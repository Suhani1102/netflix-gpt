import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  console.log("Top Rated: ", movies.topRatedMovies);
  console.log("Popular Onesss: ", movies.popularMovies);
  return (
    <div className=" -mt-40 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular "} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
    </div>
  );
};

export default SecondaryContainer;
