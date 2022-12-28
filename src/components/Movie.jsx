import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Movie = ({ d }) => {
  return (
    <Col className=" mb-4">
        <Card className='cardsprincipales d-flex  h-100 border-0'>
            <Card.Img className="  justify-content-center p-1" src={d.image} />
                <Card.Body>
                    <Card.Title className='movie-title'>

                        {d.name}
                    </Card.Title>
                </Card.Body>
                <Card.Footer className='p-1'>
                    <Row>
                        <Col className='col-3 me-4'>
                            <i className="fa-solid fa-star"></i>
                        </Col>
                        <Col>
                            <Link to={`/MovieDetailContainer/${d._id}`}>  
                                <Button className =' btn-cards'>
                                    Ver más
                                </Button> 
                            </Link>
                        </Col>
                    </Row>
                </Card.Footer>
        </Card>
    </Col>
  );
};

export default Movie;