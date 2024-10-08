import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';


const MainContainer = () => {

const movies = useSelector(store => store.movies?.nowPlayingMovies);
if(!movies) return;
const mainmovie = movies[0];



const {original_title,overview,id} = mainmovie;


  return (
    <div className='bg-black'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground moviId={id}/>
    </div>
  )
}

export default MainContainer;

