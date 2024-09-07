import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[17%] px-12 absolute text-white bg-gradient-to-r from-black'>  
        <h1 className="font-semibold text-5xl">{title}</h1>
        <h4 className='py-6 text-md w-1/4'>{overview}</h4>
        <div>
          <button className='bg-white text-black py-2 px-4 text-md ml-2 rounded-lg hover:bg-opacity-30 hover:text-white transition-all delay-50 ease-in'> ▶ Play  
          </button>
          <button className='bg-gray-500 text-white py-2 px-4 text-md ml-2 bg-opacity-30 rounded-lg'>More info</button>
         </div>
        </div>
  )
}

export default VideoTitle
