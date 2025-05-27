import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/GptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    // Search movie in TMDB
    const searchMovieTMDB = async (movie) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    };

    // Make call to open AI to get Movies results
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me name of 5 movies, comma separated like the example result given ahead. Example Result: Anjana Anjani, Pushpa, Hera Pheri, Animal, Main Hoon Na.";

    const gptResults = await client.chat.completions.create({
      model: "gpt-3.5-turbo", // fallback to base model
      messages: [{ role: "assistant", content: gptQuery }],
    });

    console.log(gptResults.choices?.[0].message?.content);
    const gptMoviesSuggestions =
      gptResults.choices?.[0].message?.content.split(",");
    console.log("gptMoviesSuggestions :: ", gptMoviesSuggestions);

    const promiseArray = gptMoviesSuggestions?.map((movie) =>
      searchMovieTMDB(movie)
    );
    const tmdbResults = await Promise.all(promiseArray);
    console.log("tmdbResults :: ", tmdbResults);
    dispatch(
      addGptMovieResult({
        movieNames: gptMoviesSuggestions,
        movieResults: tmdbResults,
      })
    );
  };
  return (
    <div className="pt-[5%] flex justify-center w-screen">
      <form
        className="bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 my-4 mr-4 py-2 px-6 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
