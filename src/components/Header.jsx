import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/Userslice';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { APP_LOGO } from '../utils/constansts';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store?.user);

  const handleSignout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {

      navigate("/error")
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email : email,displayName : displayName,photoURL:photoURL}));
        navigate("/brwose")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>unsubscribe();
  },[]);

  return (
    <div className="bg-gradient-to-b from-black h-37">
         <div className="px-12 bg-gradient-to-b from-black  py-4 absolute z-10 w-full h-18">
         <img className='w-[240px] cursor-pointer' src={APP_LOGO} alt="NetFlix Logo" /> 
          {user && <div className="flex mt-2 p-4 gap-5 justify-end absolute z-50 top-1 right-0"> 
            <img className="h-12 w-12 object-cover rounded-full cursor-pointer" src={user?.photoURL} alt="ProfilePhoto" />
        <button onClick={handleSignout} className="font-semibold w-20 text-white bg-orange-700 p-2 rounded ">signout</button>
        </div>} 
         </div>
    </div>
  )
}

export default Header;  
