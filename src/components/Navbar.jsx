import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav /*, Form*/,
  Button,
  Stack,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import { toast } from "react-toastify";
import Logo from "../img/Logo.png";

const Navbar1 = ({ currentUser, login, logout, loggedIn, loggedAdmin }) => {
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showSignUp, setShowSignUp] = useState(false);
  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);

  const handleLogout = () => {
    logout();
    toast("Hasta pronto");
  };

  return (
    <>
      <Navbar
        id="nav"
        expand="lg"
        style={{ backgroundColor: "#FAA916" }}
        className="fixed-top col-12"
      >
        <Container className="col-12 col-md-12">
          <NavLink className="me-3" to="/">
            <img src={Logo} alt="logo.png" width={50} />
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto  my-lg-0">
              <NavLink className="nav-link mt-1 foot " to="/Contact">
                Contacto
              </NavLink>
              <NavLink className="nav-link mt-1 me-2 foot " to="/Favorites">
                Favoritos
              </NavLink>
              <NavLink className="nav-link mt-1 me-2 foot" to="/AboutUs">
                Nosotros
              </NavLink>
              {loggedAdmin() ? (
                <NavLink className="nav-link mt-1 me-4 foot" to="/CrudMovies">
                  Editar
                </NavLink>
              ) : null}
            </Nav>
            {loggedIn() ? (
              <Button
                className="mt-1 me-2 btn-nav text-dark"
                onClick={handleLogout}
              >
                <span className="me-2">({currentUser().name})</span>
                Cerrar sesión
              </Button>
            ) : (
              <>
                <Button
                  className="mt-1  btn-nav text-dark"
                  onClick={handleShowSignUp}
                >
                  Registrarse
                </Button>
                <Button
                  className="mt-1  btn-nav text-dark"
                  onClick={handleShowLogin}
                >
                  Iniciar sesión
                </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login
        handleShowSignUp={handleShowSignUp}
        show={showLogin}
        handleClose={handleCloseLogin}
        login={login}
        logout={logout}
      />
      <SignUp show={showSignUp} handleClose={handleCloseSignUp} />
    </>
  );
};
export default Navbar1;
