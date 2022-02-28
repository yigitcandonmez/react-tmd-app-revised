import React from "react";
import { useState, useEffect } from "react";
import API from "../services/axios";
import { requests } from "../services/requests";
import MovieListItem from "../components/MovieListItem";

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState();
  const [loading, setLoading] = useState(false);

  const fetchTrendingMovies = async () => {
    setLoading(true);
    const response = await API.get(`${requests[0].url}`);
    setTrendingMovies(response.data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, [setTrendingMovies]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        trendingMovies?.map((e) => <MovieListItem title={e.title} key={e.id} />)
      )}
    </div>
  );
};

export default Trending;
