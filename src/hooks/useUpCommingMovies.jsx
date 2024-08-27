import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constansts";
import {  addUpCommingMovies } from "../utils/moviesSclice";

const useUpCommingMovies = () => {

    const dispatch = useDispatch();

    
    const getUpcommingMovies = async() =>{
  
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
      const json = await data.json();
      console.log(json.results);
      dispatch(addUpCommingMovies(json.results))
    }
    useEffect(()=>{
        getUpcommingMovies();
   },[])
  
 

}

export default useUpCommingMovies;