import React, { useEffect, useState } from "react";

import { MovieCard } from "./MovieCard";
import SearchIcon from "./search.svg";

// API been used
const API_URL = "https://www.omdbapi.com?apikey=d49d8266";

export const API = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const movieGenre = "marvel";
    searchMovies(movieGenre);
  }, []);

  // Function been use to fetch data
  async function searchMovies(title) {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  return (
    <>
      <div className="app">
        <h1>Search Your favorite movie.</h1>

        <div className="search">
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie, ID) => (
              <MovieCard key={ID} movie={movie} />
            ))}
          </div>
        ) : <div className="empty">
            <h2>No movies found</h2>
          </div> ? (
          <h2 className="begin">Begin Searching</h2>
        ) : (
          <h2 className="begin">Something not working</h2>
        )}
      </div>
    </>
  );
};
