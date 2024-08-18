import React from 'react'
import Header from './Header';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Brwoser = () => {
  //subscribing yhe store
  const user = useSelector((store)=>store.user);

  const navigate  = useNavigate();
  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
 return (
    < >
        <Header/>
        <div className="flex mt-4 p-5 gap-5 justify-end absolute z-[999] right-1"> <img className="h-12 w-12 object-cover rounded-full" src={user?.photoURL} alt="" />
        <button onClick={handleSignout} className="font-semibold text-white bg-orange-700 p-2 rounded " >signout</button>
        </div>    

    </>
  )
}

export default Brwoser;
