import { useRef, useState } from 'react'
import Header from './Header'
import { checkValidetData } from '../utils/Validate';
const Login = () => {

   const [isSignin,setisSign] = useState(true);
   const [ErrorMessage,setErrorMessage] = useState(null);

   const email = useRef(null);
   const password = useRef(null);

  const handleButtonClick = () => {
      // here we validate the form data
      //  checkValidetData(email,password)
   
      
    const message = checkValidetData(email.current.value,password.current.value);
    setErrorMessage(message)
    console.log(email.current.value);
    console.log(password.current.value);
    // console.log(message);
    
    
  }

  const toggleSigninForm = () =>{
      setisSign(!isSignin);
  }

  return (
    <div>
        <Header/>
        <div className="absolute">
        <img className="bg-gradient-to-b from-black" src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg" alt="netflix Logo" />
        </div>
        <form onSubmit={e => e.preventDefault()} className="w-3/12 absolute z-1 p-12 bg-black  my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-60">
        <h1 className="font-bold text-3xl mb-4">{isSignin ? "Sign in " : "Sign Up"}</h1>
       {!isSignin && <input type="text" placeholder='Full Name' className="p-2 my-2 w-full outline-blue-500 bg-slate-700 rounded-md" />}
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
