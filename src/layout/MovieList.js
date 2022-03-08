import React, { useState, useEffect } from "react";
import API from "../services/axios";
import MovieListItem from "../components/MovieListItem";
import { Link } from "react-router-dom";

const MovieList = ({ endpoint, title }) => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [timeWindow, setTimeWindow] = useState("day");
  const [alert, setAlert] = useState(false);

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

  const handleLikeClick = (img) => {
    setAlert(true);
  };

  useEffect(() => {
    fetchMovies();
  }, [setMovies, timeWindow]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="mt-4 mb-1">
      {alert && (
        <div
          class="flex items-cente bg-slate-300 w-2/5 rounded text-sm font-bold px-4 py-3 mb-3"
          role="alert"
          style={{ color: "#5a6979" }}
        >
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
          </svg>
          <p>
            Favorilerinize eklemek için{" "}
            <Link to="/">
              <u>giris</u>
            </Link>{" "}
            yapmanız gerekiyor.
          </p>
        </div>
      )}
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
            isLiked={isLiked ? "black" : "white"}
            handleLikeClick={handleLikeClick}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
