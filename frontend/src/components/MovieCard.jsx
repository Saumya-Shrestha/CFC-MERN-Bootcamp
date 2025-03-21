import React from "react";

const MovieCard = ({ name, description }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default MovieCard;
