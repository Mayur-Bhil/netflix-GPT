import React from 'react'
import Header from './Header';
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usepopularMovies from '../hooks/usePopularMovies';
 
const Brwoser = () => {
 useNowplayingMovies();
 usepopularMovies();
  

 return (
    < >
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </>
  )
}

export default Brwoser;
