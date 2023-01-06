import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const CrudTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://backend-proyecto3-cpzv4av54-admanser.vercel.app/viewmovies")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [directedby, setDirectedby] = useState("");
  const [actors, setActors] = useState("");
  const [story, setStory] = useState("");
  const [image, setImage] = useState("");
  const [trailer, setTrailer] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNewMovie = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/movies/new", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        category,
        year,
        directedby,
        actors,
        story,
        image,
        trailer,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        handleClose();
      });
    handleClose();
  };

  return (
    <Container className="crud-table">
      <h2 className="mt-2 text-center">Administrar Películas</h2>
      <Button variant="primary" onClick={handleShow}>
        Nueva Película
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar nueva película</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ingrese nombre de película"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Ingrese categoría de película"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Año</Form.Label>
              <Form.Control
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Ingrese año de película"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Dirigida por</Form.Label>
              <Form.Control
                type="text"
                value={directedby}
                onChange={(e) => setDirectedby(e.target.value)}
                placeholder="Dirigida por.."
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Actuaciones</Form.Label>
              <Form.Control
                type="text"
                value={actors}
                onChange={(e) => setActors(e.target.value)}
                placeholder="Ingrese los actores"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Argumento</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={story}
                onChange={(e) => setStory(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Ingrese url de la imagen"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Trailer</Form.Label>
              <Form.Control
                type="text"
                value={trailer}
                onChange={(e) => setTrailer(e.target.value)}
                placeholder="Ingrese url del Trailer"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={(e) => handleNewMovie(e)}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
      <hr></hr>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Destacado</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={"Movie" + i}>
              <td>{i + 1}</td>
              <td>{d.name}</td>
              <td>{d.category}</td>
              <td>
                <i className="fa-solid fa-star"></i>
              </td>
              <td>
                <div className="d-flex justify-content-around">
                  <i class="fa-solid fa-pen-to-square"></i>
                  <i class="fa-solid fa-trash"></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CrudTable;
