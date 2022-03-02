import React, { useState, useEffect } from "react";
import API from "../services/axios";
import MovieListItem from "../components/MovieListItem";

const MovieList = ({ endpoint, title }) => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [timeWindow, setTimeWindow] = useState("day");

  const fetchMovies = async () => {
    setLoading(true);
    const endPointWithTime = endpoint.replace("time", timeWindow);
    const response = await API.get(`${endPointWithTime}`);
    setMovies(response.data.results);
    setLoading(false);
  };

  const handleChange = (e) => {
    setTimeWindow(e.target.value);
  };

  useEffect(() => {
    fetchMovies();
  }, [setMovies, timeWindow]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {title === "/trending" && (
        <select defaultValue={timeWindow} onChange={handleChange}>
          <option value="day">Day</option>
          <option value="week">Week</option>
        </select>
      )}
      {loading ? (
        <div>Loading...</div>
      ) : (
        movies?.map((e) => (
          <MovieListItem
            title={e.title}
            key={e.id}
            original_title={e.original_title}
          />
        ))
      )}
    </div>
  );
};

export default MovieList;
