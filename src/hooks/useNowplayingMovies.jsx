import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constansts";
import { addNowPlayingMovies } from "../utils/moviesSclice";

const useNowplayingMovies = () => {

    const dispatch = useDispatch();
    
    const nowPlayingMOvies = useSelector(store => store.movies.nowPlayingMOvies);
     
    const getNowPlayingMovies = async() =>{
  
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
      const json = await data.json();
      // console.log(json.results);
      dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
      !nowPlayingMOvies && getNowPlayingMovies();
   },[])
  
 

}

export default useNowplayingMovies;