import React from 'react'
import Header from './Header';
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpCommingMovies from '../hooks/useUpCommingMovies';

import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
 
const Brwoser = () => {
 const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
 useNowplayingMovies();
 usePopularMovies();
 useUpCommingMovies();
 useTopRatedMovies();
  

 return (
    < >
        <Header/>
        {
          showGptSearch?(
            <GptSearch/>

          ):(
            <>
              <MainContainer/>
              <SecondaryContainer/>
            </>
          )
        }
        
    </>
  )
}

export default Brwoser;
