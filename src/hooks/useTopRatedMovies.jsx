import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constansts";
import {  addTopRatedMovies } from "../utils/moviesSclice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const TopRatedMovies = useSelector(store => store.movies.TopRatedMovies)
    const getTopRatedmovies = async() =>{
  
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);
      const json = await data.json();
      // console.log(json.results);
      dispatch(addTopRatedMovies(json.results))
    }
    useEffect(()=>{
      !TopRatedMovies && getTopRatedmovies();
   },[])
  
 

}

export default useTopRatedMovies;