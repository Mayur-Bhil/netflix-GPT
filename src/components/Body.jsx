import React, { useEffect } from 'react'
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
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;

