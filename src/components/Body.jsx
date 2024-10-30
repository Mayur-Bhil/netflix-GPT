import React from 'react'
import Login from './Login'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Brwoser from './Brwoser'


const Body = () => {
  
  
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

 
  return (
    <div className="bg-to-black overflow-x-hidden sm:bg-black">
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;

