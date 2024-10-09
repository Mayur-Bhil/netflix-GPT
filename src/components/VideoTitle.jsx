import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className= 'w-screen h-[65vh] px-12 absolute pt-3 text-white bg-gradient-to-r from-black sm:mt-0 sm:pt-[30%]'>  
        <h1 className="font-semibold text-5xl sm:text-red-50 sm:text-[3.5vw] sm:mb-3">{title}</h1>
        <h4 className='py-6 text-sm leading-8 w-[35%] mb-3 sm:w-[65%] sm:text-[2.2vw] sm:leading-none'>{overview}</h4>
        <div>
          <button className='bg-white text-black py-2 px-4 text-md ml-2 rounded-lg hover:bg-opacity-30 hover:text-white transition-all delay-50 ease-in'> ▶ Play  
          </button>
          <button className='bg-gray-500 text-white py-2 px-4 text-md ml-2 bg-opacity-30 rounded-lg'>More info</button>
         </div>
        </div>
  )
}

export default VideoTitle
