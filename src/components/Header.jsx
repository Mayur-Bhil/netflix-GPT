import React from 'react'
import { useSelector } from 'react-redux';

function Header() {


  return (
    <div className="px-8 py-4  absolute bg-gradient-to-b from-zinc-950 z-10 w-full min-h-28">
          <img className='w-[240px] h-18 ml-20' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="NetFlix Logo" />
    </div>
  )
}

export default Header;  
