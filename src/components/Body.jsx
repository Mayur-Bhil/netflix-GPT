import React, { useEffect } from 'react'
import Login from './Login'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import Brwoser from './Brwoser'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/Userslice';

const Body = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  
  
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Login/>
    },
    {
      path:"/brwose",
      element : <Brwoser/>
    }
  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email : email,displayName : displayName,photoURL:photoURL}));
        // navigate("/brwose")
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        // navigate("/");
        // ...
      }
    });
  },[]); 



  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;

