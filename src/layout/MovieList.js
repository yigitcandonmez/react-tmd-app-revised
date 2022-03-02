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
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setTimeWindow(e.target.value);
  };

  useEffect(() => {
    fetchMovies();
  }, [setMovies, timeWindow]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="mt-4 mb-1">
      {title === "/trending" && (
        <div className="flex items-center justify-between">
          <p style={{ color: "#5a6979", fontWeight: "bold", fontSize: "20px" }}>
            {title}
          </p>

          <select
            defaultValue={timeWindow}
            onChange={handleChange}
            className="pl-2"
            style={{
              backgroundColor: "#21272e",
              color: "#5a6979",
              outline: "none",
              width: "80px",
            }}
          >
            <option value="day">DAY</option>
            <option value="week">WEEK</option>
          </select>
        </div>
      )}
      <div
        className="flex flex-wrap align-middle justify-between pt-2 pb-3"
        style={{
          borderTop: "1px solid #445566",
          borderBottom: "1px solid #445566",
        }}
      >
        {movies?.map((e) => (
          <MovieListItem
            img={e.poster_path ? e.poster_path : e.backdrop_path}
            key={e.id}
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
