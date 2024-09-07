import React from 'react'
import Header from './Header';
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpCommingMovies from '../hooks/useUpCommingMovies';

import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
 
const Brwoser = () => {
 useNowplayingMovies();
 usePopularMovies();
 useUpCommingMovies();
 useTopRatedMovies();
  

 return (
    < >
        <Header/>
        <GptSearch/>
        <MainContainer/>
        <SecondaryContainer/>
    </>
  )
}

export default Brwoser;
