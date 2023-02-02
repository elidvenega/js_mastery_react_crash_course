import React from "react";

export const MovieCard = ({ movie: { ID, Year, Poster, Title, Type } }) => {
  return (
    <>
      <div className="movie" key={ID}>
        <div>
          <p>{Year}</p>
        </div>
        <div>
          <img
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
            alt={Title}
          />
        </div>
        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
    </>
  );
};
