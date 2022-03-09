import React, { useState, useEffect } from "react";
import API from "../services/axios";
import MovieListItem from "../components/MovieListItem";
import { setLocalLikedMovies, getLikedMovies } from "../utils/localStorage";

const MovieList = ({ endpoint, title }) => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [timeWindow, setTimeWindow] = useState("day");
  const [likedMovies, setLikedMovies] = useState(getLikedMovies());

  const fetchMovies = async () => {
    setLoading(true);
    const endPointWithTime = endpoint.replace("time", timeWindow);
    const response = await API.get(`${endPointWithTime}`);
    setMovies(response.data.results);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleLikeClick = (img) => {
    setLocalLikedMovies(img);
    setLikedMovies(getLikedMovies());
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
          <p style={{ color: "#5a6979", fontSize: "15px" }}>
            /POPULAR FILMS THIS {timeWindow.toUpperCase()}
          </p>
          <div className="flex items-center justify-center">
            <p
              style={{ color: "#5a6979", fontWeight: "bold", fontSize: "12px" }}
            >
              BROWSE BY
            </p>
            <select
              defaultValue={timeWindow}
              onChange={handleChange}
              className="pl-2 text-xs"
              style={{
                backgroundColor: "#21272e",
                color: "#5a6979",
                outline: "none",
                width: "80px",
              }}
            >
              <option value="day" className="text-xs">
                DAY
              </option>
              <option value="week" className="text-xs">
                WEEK
              </option>
            </select>
          </div>
        </div>
      )}
      <div
        className="flex flex-wrap align-middle justify-between pb-8"
        style={{
          borderTop: "1px solid #445566",
          borderBottom: "1px solid #445566",
        }}
      >
        {movies?.map((e) => (
          <MovieListItem
            img={e.poster_path ? e.poster_path : e.backdrop_path}
            loading={loading}
            release={e.release_date ? e.release_date : e.first_air_date}
            vote={e.vote_average}
            likedMovies={likedMovies}
            handleLikeClick={handleLikeClick}
            timeWindow={timeWindow}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
