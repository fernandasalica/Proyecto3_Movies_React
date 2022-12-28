import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="">
      <Row style={{ backgroundColor: "#FAA916" }}>
        <Col className="col-3 d-flex justify-content-center align-items-center">
          <Link className="foot" to="/">
            <img
              className="foot"
              src="/img/icons/logo.png"
              alt="logo.png"
              width={100}
            />
          </Link>
        </Col>
        <Col>
          <Row className=" col-4 g-3 mt-3 mb-2 d-none d-md-block">
            <Row className="g-3">
              <Link className="foot" to="/Contact">
                Contacto
              </Link>
              <Link className="foot" to="/Favorites">
                Favoritos
              </Link>
              <Link className="foot" to="/AboutUs">
                Nosotros
              </Link>
            </Row>
          </Row>
        </Col>
        <Col>
          <Row className="col-4 mt-3 mb-2 d-none d-md-block">
            <Row className="g-3">
              <Link className="foot" href="https://www.netflix.com/ar/">
                Netflix
              </Link>
              <Link className="foot" href="https://www.disneyplus.com/es-ar">
                Disney
              </Link>
              <Link
                className="foot"
                href="https://www.starplus.com/es-ar/welcome/stream-now"
              >
                Start +
              </Link>
            </Row>
          </Row>
        </Col>
        <Col className="d-flex flex-column">
          <Row className="col-4 mt-2 ">
            <div className="d-flex mt-3 mb-2">
              <h3 className="col-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img
                    src="/img/icons/facebook.png"
                    alt="Icono Facebook"
                    width={30}
                  />
                </a>
              </h3>
              <h3 className="col-4 ms-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/img/icons/instagram.png"
                    alt="Icono Instagram"
                    width={30}
                  />
                </a>
              </h3>
              <h3 className="col-4 ms-4">
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img
                    src="/img/icons/twitter.png"
                    alt="Icono Twitter"
                    width={30}
                  />
                </a>
              </h3>
              <h3 className="col-4 ms-4">
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <img
                    src="/img/icons/youtube.png"
                    alt="Icono Youtube"
                    width={30}
                  />
                </a>
              </h3>
            </div>
          </Row>
          <Col className="d-flex flex-column">
            <h5 className="ms-4 mt-0">Contactanos</h5>
            <h5>
              {" "}
              <a className="foot" href="https://rollingcodeschool.com/">
                {" "}
                Rolling Code school
              </a>
            </h5>
          </Col>
        </Col>
      </Row>
      <Row>
        <h5 className="text-center bg-dark text-light py-2 m-0">
          &copy; Copyright 2022 RollingCode Films - All Rights Reserved
        </h5>
      </Row>
    </Container>
  );
};
export default Footer;
