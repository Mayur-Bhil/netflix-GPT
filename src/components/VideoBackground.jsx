import React from 'react'
import { useSelector } from 'react-redux'
import useMovietrailer from '../hooks/useMovietrailer'

const VideoBackground = ({moviId}) => {
const trailerVideo = useSelector((store)=>store?.movies?.trailerVideo);
  //custom hook for fetching movies trailer
  useMovietrailer(moviId);


  return (
    <div className='w-screen h-max bg-gradient-to-l from-black bg-opacity-80 '>
    <iframe className='w-screen aspect-video ' src={"https://www.youtube.com/embed/"+trailerVideo?.key+ "?&autoplay=1&&mute=1"}
         title="YouTube video player"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         refererpolicy="strict-origin-when-cross-origin"> 
      </iframe>
    </div>
  );
};

export default VideoBackground; 
