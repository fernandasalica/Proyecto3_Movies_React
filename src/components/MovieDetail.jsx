import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Ratio from "react-bootstrap/Ratio";
import NextPremieres from "./NextPremieres";

const MovieDetail = ({ data }) => {
  return (
    <Container className="movie-detail">
      <h2 className="mt-4">{data.name}</h2>
      <hr></hr>
      <Row>
        <div className="width-col">
          <Col className="d-flex justify-content-start">
            <img src={data.image}></img>
          </Col>
          <Col>
            <div className="d-block justify-content-start mt-2">
              <p>
                <b>Categoría</b>: {data.category}
              </p>
              <p>
                <b>Año:</b> {data.year}
              </p>
              <p>
                <b>Dirigida por:</b> {data.directedby}
              </p>
              <p>
                <b>Reparto:</b> {data.actors}
              </p>
            </div>
          </Col>
        </div>
      </Row>
      <Row>
        <Col className="mt-5">
          <Ratio aspectRatio="16x9">
            <embed type="image/svg+xml" src={data.trailer} />
          </Ratio>
        </Col>
      </Row>
      <h4 className="mt-5">Argumento</h4>
      <hr></hr>
      <p className="mb-5">{data.story}</p>
      <hr />
      <NextPremieres />
    </Container>
  );
};

export default MovieDetail;
