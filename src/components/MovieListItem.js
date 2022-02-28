import React from "react";

const MovieListItem = (props) => {
  const { title, key } = props;

  return (
    <div>
      <ul>
        <li key={key}>{title}</li>
      </ul>
    </div>
  );
};

export default MovieListItem;
