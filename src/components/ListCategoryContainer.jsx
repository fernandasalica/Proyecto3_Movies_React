import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListCategory from "./ListCategory";

const ListCategoryContainer = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch(
    // `https://backend-proyecto3-cpzv4av54-admanser.vercel.app/viewmoviecat/${params.category}`
    // )
    fetch(`http://localhost:3001/movies/viewmoviecat/${params.category}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return <ListCategory data={data} />;
};

export default ListCategoryContainer;
