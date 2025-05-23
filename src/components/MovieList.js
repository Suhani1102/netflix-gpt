import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-12">
      <h1 className="text-3xl font-bold text-white py-6">{title}</h1>

      <div className="flex overflow-x-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-black">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
