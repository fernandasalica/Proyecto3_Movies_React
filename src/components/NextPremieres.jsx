import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const NextPremieres = () => {
  return (
    <Container className="mb-5">
      <h2 className="mt-4">PRÓXIMOS ESTRENOS</h2>
      <hr></hr>
      <Row xs={2} md={3} xl={5} className="g-5">
        <Col>
          <Card>
            <Card.Img variant="top" src="../img/premiere1.jpg" />
            <Card.Body>
              <Card.Title className="movie-title">
                El cuarto pasajero
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="../img/premiere2.png" />
            <Card.Body>
              <Card.Title className="movie-title">
                No mires a los ojos
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="../img/premiere3.png" />
            <Card.Body>
              <Card.Title className="movie-title">Exorcismos</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="../img/premiere4.jpg" />
            <Card.Body>
              <Card.Title className="movie-title">Sintiéndolo mucho</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="../img/premiere5.jpg" />
            <Card.Body>
              <Card.Title className="movie-title">Black Adam</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NextPremieres;
