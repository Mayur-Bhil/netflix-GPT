import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constansts";
import {  addTopRatedMovies } from "../utils/moviesSclice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    
    const getTopRatedmovies = async() =>{
  
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);
      const json = await data.json();
      console.log(json.results);
      dispatch(addTopRatedMovies(json.results))
    }
    useEffect(()=>{
        getTopRatedmovies();
   },[])
  
 

}

export default useTopRatedMovies;