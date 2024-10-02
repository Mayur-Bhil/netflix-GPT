import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggetion = () => {
  const { movieResults, moviename } = useSelector((store) => store.gpt);
  if (!movieResults) return null;

  return (
    <div className="w-full h-screen p-4 m-4 bg-black text-white bg-opacity-90 ">
      <div>
        {moviename.map((moviename, index) => (
          <MovieList key={moviename}
          title={moviename}
          movies={movieResults[index]}        
          
          />
        ))}
      </div>
    </div>
  );
};

export default GptMoviesSuggetion;
