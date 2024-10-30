import React from 'react'
import { useSelector } from 'react-redux'
import useMovietrailer from '../hooks/useMovietrailer'

const VideoBackground = ({moviId}) => {
const trailerVideo = useSelector((store)=>store?.movies?.trailerVideo);
  //custom hook for fetching movies trailer
  useMovietrailer(moviId);


  return (
    <div className='w-screen h-max pt-20 bg-gradient-to-l from-black bg-opacity-80 bg-black '>
     <div className='bg-black w-full'>
     <iframe className='w-full aspect-video sm:h-[68vh] sm:w-screen' src={"https://www.youtube.com/embed/"+trailerVideo?.key+ "?&autoplay=1&&mute=1"}
         title="YouTube video player"
         allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         refererpolicy="strict-origin-when-cross-origin"> 
      </iframe>
     </div>
    </div>
  );
};

export default VideoBackground; 
