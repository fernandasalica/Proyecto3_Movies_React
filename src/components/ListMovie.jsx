import React from "react";
import { Container, Pagination, Row, Col } from "react-bootstrap";

import Movie from "./Movie";
import Publicity from "./Publicity"
//import Col from 'react-bootstrap/Col';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const ListMovie = (props) => {
  return (
    <Container className="mb-5 mt-2">
      <h1 className="mt-4 text-center">CARTELERA</h1>
      <hr></hr>
      <h3 className="mb-5 text-center"> Mira nuestra nueva cartelera, las mejores películas están en nuestro blog. </h3>
      <Col className="d-flex justify-content-center col-12"> 
        <Row xs={2} md={3} xl={5} className="col-12 mt-3 col-md-9">
              {props.data.map((d, i) => (
          <Movie d={d} key={"Movie" + i} /> ))}
        </Row>    
        <Row className="d-none d-lg-block ms-3 mt-4"><Publicity/>
        </Row>
      </Col> 
    </Container>
  );
};

export default ListMovie;
