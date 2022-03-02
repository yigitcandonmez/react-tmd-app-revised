import React from "react";

const MovieListItem = (props) => {
  const { title, key, original_title } = props;

  return (
    <div>
      <ul>
        {title ? (
          <li key={key}>{title}</li>
        ) : (
          <li key={key}>{original_title}</li>
        )}
      </ul>
    </div>
  );
};

export default MovieListItem;
