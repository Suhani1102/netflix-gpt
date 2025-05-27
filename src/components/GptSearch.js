import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute h-full w-full object-cover">
        <img src={BG_IMAGE} alt="background image" />
      </div>
      <div className="relative">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
