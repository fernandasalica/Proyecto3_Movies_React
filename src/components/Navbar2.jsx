import React from "react";
import { Container, Form, Button } from "react-bootstrap";
// import /*NavLink*/ "react-router-dom";

const Navbar2 = ({ searchMovies, setSearchMovies }) => {
  const handleInput = (evt) => {
    setSearchMovies(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <div id="nav" expand="lg" className="navv">
      <Container className="col-md-block d-flex p-2">
        <Form onSubmit={handleSubmit} className=" ms-0 d-flex h-25 pt-2 col-7 pe-4">
          <Form.Control
            type="search"
            placeholder="Ingrese su búsqueda"
            className="me-2"
            aria-label="Search"
            value={searchMovies}
            onInput={handleInput}
          />
          <Button variant="outline-dark">buscar</Button>
        </Form>
        <div />
        <div className="row ms-auto mt-2 me-2">
          <a
            className="col-3"
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/img/icons/facebook.png"
              alt="Icono Facebook"
              width={35}
            />
          </a>
          <a
            className="col-3"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/img/icons/instagram.png"
              alt="Icono Instagram"
              width={35}
            />
          </a>
          <a
            className="col-3"
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/icons/twitter.png" alt="Icono Twitter" width={35} />
          </a>
          <a
            className="col-3"
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/icons/youtube.png" alt="Icono Youtube" width={35} />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Navbar2;
