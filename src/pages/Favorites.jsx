import React from "react";
import Category from "../components/Category";
import ListMoviesContainer from "../components/ListMoviesContainer";

const Favorites = ({ searchMovies }) => {
  return (
    <div className="mt-4">
      <ListMoviesContainer searchMovies={searchMovies} />
      <Category />
    </div>
  );
};

export default Favorites;
