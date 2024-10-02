import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggetion from "./GptMoviesSuggetion";
import { BG_URL } from "../utils/constansts";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-20">
        <img
          className="bg-gradient-to-b from-black"
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
