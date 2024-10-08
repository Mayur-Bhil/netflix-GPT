import { useRef, useState } from 'react'
import Header from './Header'
import { checkValidetData } from '../utils/Validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from '../utils/Userslice';
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { User_avtar } from '../utils/constansts';
const Login = () => {
  
  const dispatch = useDispatch();

   const [isSignin,setisSign] = useState(true);
   const [ErrorMessage,setErrorMessage] = useState(null);
   
   const name = useRef(null);
   const email = useRef(null);
   const password = useRef(null);

  const handleButtonClick = () => {
      // here we validate the form data
      //  checkValidetData(email,password)
   
      
    const message = checkValidetData(email.current.value,password.current.value);
    setErrorMessage(message);

     if(message)return;

      if(!isSignin){
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, photoURL: User_avtar
            }).then(() => {
              // Profile updated!
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email : email,displayName : displayName,photoURL:photoURL}));   
                   
            }).catch((error) => {
              setErrorMessage(error)

            });
            
          
            
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+" " +errorMessage);
          })
          
    }
  else{
   
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      })
      .catch(() => {
        const errorCode = "401";
        const errorMessage = "Invalid User";
        setErrorMessage(errorCode+ " " +errorMessage);

      });
  
  }

}

  const toggleSigninForm = () =>{
      setisSign(!isSignin);
  }

  return (
    <div>
        <Header/>
        <div className="absolute w-full h-screen object-cover">
        <img className="bg-gradient-to-b from-black h-screen object-cover w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg" alt="netflix Logo" />
        </div>
        <form onSubmit={e => e.preventDefault()} className="xl:w-3/12 left-1/2 top-[25%] absolute z-1 p-12 bg-black -translate-x-[50%] -translate-y-[50%] my-40 mx-5 right-0 text-white rounded-lg bg-opacity-60 sm:w-6/12">
        <h1 className="font-bold text-3xl mb-4">{isSignin ? "Sign in " : "Sign Up"}</h1>
       {!isSignin && <input ref={name} type="text" placeholder='Full Name' className="p-2 my-2 w-full outline-blue-500 bg-slate-700 rounded-md" />}
            <input ref={email} type="email" placeholder='Email Address' className="p-2 my-2 w-full outline-blue-500 bg-slate-700 rounded-md" />
            <input ref={password} type="password" placeholder='Password' className="p-2 my-2 w-full outline-blue-500 bg-slate-700 rounded-md" />
            <p className="text-red-500">{ErrorMessage}</p>
            <button className="p-3  mt-4 font-bold  bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>{isSignin ? "Sign in " : "Sign Up"}</button>  
          <p onClick={toggleSigninForm} className="mt-6 cursor-pointer">{isSignin ? "New to Netflix sign Up now ?" : "Already registered sign in now "}</p>
        </form>
    </div>
  ) 
}
export default Login;
