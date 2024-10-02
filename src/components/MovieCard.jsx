import React from "react";
import { IMG_CDN_URL } from "../utils/constansts";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="w-48 hover:scale-[1.2] cursor-pointer transition-all ease-linear">
      <img src={IMG_CDN_URL + poster_path} alt="Movie-Poster" />
    </div>
  );
};

export default MovieCard;
