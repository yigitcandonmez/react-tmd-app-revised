import React from "react";
import ContentLoader from "react-content-loader";

const MovieListItem = (props) => {
  const { img, loading, release, vote, isLiked, handleLikeClick } = props;

  return (
    <div className="movieList w-36 mt-5 mb-2 h-40">
      {loading ? (
        <div
          style={{
            border: "1px solid rgba(210,210,210,0.7)",
            borderRadius: "4px",
          }}
        >
          <ContentLoader
            speed="2"
            viewBox="0 0 360 400"
            backgroundColor="rgba(217, 217, 217, 0.4)"
            foregroundColor="rgba(237, 237, 237, 0.5)"
          >
            <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
          </ContentLoader>
        </div>
      ) : (
        <div className="movie w-full h-full">
          <div
            className="movieBox w-full h-full"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${img})`,
              backgroundSize: "100% 100%",
              border: "1px solid rgba(210,210,210,0.5)",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <div className="w-full h-full relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="right-1 bottom-1 w-5 h-5 absolute text-red-500"
                fill={isLiked}
                onClick={() => {
                  handleLikeClick(img);
                }}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
          <div className="movieInfo flex  h-4 w-full flex-row mt-1  justify-center">
            <div className="movieInfo__view flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="#40bcf4"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <p
                style={{
                  color: "#5a6979",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {release}
              </p>
            </div>
            <div className="movieInfo__average flex items-center justify-center pl-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="orange"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p
                style={{
                  color: "#5a6979",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {vote}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieListItem;
