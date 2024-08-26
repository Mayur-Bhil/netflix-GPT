import { useEffect } from "react";
import { useDispatch } from "react-redux"
import {API_OPTIONS} from '../utils/constansts'
import { addTrailerVideos } from "../utils/moviesSclice";


const useMovietrailer = (movieId) => {
    const dispatch = useDispatch();
    const getVideos =  async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS)
        const json = await data.json()
        const FilterData = json.results.filter((video)=>video.type==="Trailer")
        const trailer = FilterData.length ? FilterData[0] : json.results[0];
        dispatch(addTrailerVideos(trailer)) 
      }
      
      useEffect(()=>{
        getVideos();    
      },[]);
      
}

export default useMovietrailer;


