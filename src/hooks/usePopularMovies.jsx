import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constansts";
import {  addPopularMovies } from "../utils/moviesSclice";

const usePopularMovies = () => {

    const dispatch = useDispatch();

    const Popularmovies = useSelector(store=>store.movies.Popularmovies)
    const getPopularMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
      const json = await data.json();
      // console.log(json.results);
      dispatch(addPopularMovies(json.results))
    }
    useEffect(()=>{
        !Popularmovies && getPopularMovies();
   },[])
  
 

}

export default usePopularMovies;