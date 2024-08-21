import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/Userslice';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { APP_LOGO } from '../utils/constansts';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <div className="px-8 py-4  absolute bg-gradient-to-b from-zinc-950 z-10 w-full min-h-28">
          <img className='w-[240px] h-18 ml-20' src={APP_LOGO} alt="NetFlix Logo" />
    </div>
  )
}

export default Header;  
