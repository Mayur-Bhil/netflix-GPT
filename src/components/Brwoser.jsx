import React from 'react'
import Header from './Header';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Brwoser = () => {
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
    <>
        <Header/>
        <div className="flex p-5 gap-5 justify-end absolute z-[999] right-1"> <img className="h-12 w-12 object-cover  " src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="" />
        <button onClick={handleSignout} className="font-semibold text-white " >signout</button>
        </div>    

    </>
  )
}

export default Brwoser;
