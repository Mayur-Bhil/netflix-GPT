import React from 'react'
import Header from './Header';
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
 
const Brwoser = () => {
 useNowplayingMovies();
  

 return (
    < >
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </>
  )
}

export default Brwoser;
