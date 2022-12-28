import React from "react";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <Container fluid className="container-hero">
      <img
        fluid
        className="d-block w-100 p-0 m-0"
        src={require("../img/hero.jpg")}
        alt="Imagen del hero"
      />
    </Container>
  );
};

export default Hero;
