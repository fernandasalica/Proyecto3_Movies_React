import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Landing from "./Landing";
import NotFound from "./NotFound";
import Footer from "../components/Footer";
import RecoveryPass from "../pages/RecoveryPass";
import Contact from "./Contact";
import Favorites from "./Favorites";
import AboutUs from "./AboutUs";
import Navbar2 from "../components/Navbar2";
import MovieDetailContainer from "../components/MovieDetailContainer";
import CrudMovies from "../pages/CrudMovies";
// import SignUp from "../components/SignUp";
import ListCategoryContainer from "../components/ListCategoryContainer";
// import Suscribite from "../components/Suscribite";

const Main = ({
  currentUser,
  validate,
  login,
  logout,
  loggedIn,
  loggedAdmin,
}) => {
  const [searchMovies, setSearchMovies] = useState("");

  return (
    <>
      <Navbar
        currentUser={currentUser}
        validate={validate}
        login={login}
        logout={logout}
        loggedIn={loggedIn}
        loggedAdmin={loggedAdmin}
      />
      <Navbar2 searchMovies={searchMovies} setSearchMovies={setSearchMovies} />
      <div className="mt-0 d-flex flex-column min-vh-100">
        <Routes>
          <Route path="/" element={<Landing searchMovies={searchMovies} />} />
          <Route path="/recoveryPass" element={<RecoveryPass />} />;
          <Route
            path="/Favorites"
            element={
              loggedIn() ? (
                <Favorites />
              ) : (
                <NotFound message="Primero debes loguearte" />
              )
            }
          />{" "}
          ;
          {/* <Route
            path="CrudMovies"
            element={loggedAdmin() ? <CrudMovies /> : <NotFound />}
          /> */}
          <Route path="CrudMovies" element={<CrudMovies />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route
            path="/MovieDetailContainer/:id"
            element={<MovieDetailContainer />}
          />
          <Route
            path="/ListCategoryContainer/:category"
            element={<ListCategoryContainer />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Main;
