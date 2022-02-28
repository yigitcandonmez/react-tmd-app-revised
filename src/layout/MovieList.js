import React from "react";
import { useState, useEffect } from "react";
import API from "../services/axios";
import MovieListItem from "../components/MovieListItem";

const MovieList = ({ endpoint }) => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    const response = await API.get(`${endpoint}`);
    setMovies(response.data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [setMovies]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        movies?.map((e) => <MovieListItem title={e.title} key={e.id} />)
      )}
    </div>
  );
};

export default MovieList;
