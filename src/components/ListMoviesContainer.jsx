import React, {useState, useEffect } from 'react';
import ListMovie from './ListMovie';

const ListMoviesContainer = ({ searchMovies }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('https://backend-proyecto3-cpzv4av54-admanser.vercel.app/viewmovies')
        .then(res => res.json())
        .then(json => setData(json));
    }, []);

  const filteredData = () => {
    return data.filter((movie) => movie.name.toLowerCase().includes((searchMovies || '').toLowerCase()));
  }

  return (
    <ListMovie data={filteredData()} />
  );
};

export default ListMoviesContainer;