import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggetion from "./GptMoviesSuggetion";
import { BG_URL } from "../utils/constansts";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-20 ">
        <img
          className="sm:bg-gradient-to-b from-black h-screen w-screen object-cover"
          src={BG_URL}
          alt="netflix Logo"
        />
      </div>
      <GptSearchBar />
      <GptMoviesSuggetion />
    </div>
  );
};

export default GptSearch;
