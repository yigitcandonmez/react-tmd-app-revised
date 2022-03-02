import React from "react";
import ContentLoader from "react-content-loader";

const MovieListItem = (props) => {
  const { key, img, loading } = props;

  return (
    <div className="movieList w-36 mt-1 h-40">
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
        <div
          className="movieBox w-full h-full"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${img})`,
            backgroundSize: "100% 100%",
            border: "1px solid rgba(210,210,210,0.5)",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        />
      )}
    </div>
  );
};

export default MovieListItem;
