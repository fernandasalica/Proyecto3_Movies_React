import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useParams, useNavigate } from "react-router-dom";

const CrudTable = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [movieSelect, setMovieSelect] = useState({
    _id: "",
    name: "",
    category: "",
    year: "",
    directedby: "",
    actors: "",
    story: "",
    image: "",
    trailer: "",
  });
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [EditShow, setEditShow] = useState(false);
  const [DeleteShow, setDeleteShow] = useState(false);
  const handleDeleteClose = () => setDeleteShow(false);
  const [id, setId] = useState("");
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
  const handleEditClose = () => setEditShow(false);

  useEffect(() => {
    // fetch("https://backend-proyecto3-cpzv4av54-admanser.vercel.app/viewmovies")
    fetch("http://localhost:3001/movies/viewmovies")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

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
        // console.log("res", res);
        // handleClose();
      });
    handleClose();
  };

  const handleEditMovie = (e, id) => {
    e.preventDefault();
    fetch(`http://localhost:3001/movies/editOneMovie/${id}`, {
      method: "PUT",
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
      .then(() => navigate("/"));
    handleEditClose();
  };

  const SelectMovie = (element, type) => {
    setMovieSelect(element);
    setId(element._id);
    type === "Editar" && setEditShow(true);
    type === "Borrar" && setDeleteShow(true);
  };

  // Asigno al estado los valores ingresados por el usuario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieSelect((prevState) => ({ ...prevState, [name]: value }));
    setName(movieSelect.name);
    setCategory(movieSelect.category);
    setYear(movieSelect.year);
    setDirectedby(movieSelect.directedby);
    setActors(movieSelect.actors);
    setStory(movieSelect.story);
    setImage(movieSelect.image);
    setTrailer(movieSelect.trailer);
  };

  const handleDeleteMovie = (e, id) => {
    e.preventDefault();
    fetch(`http://localhost:3001/movies/deleteOneMovie/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => navigate("/"));
    handleDeleteClose();
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
                  <Button
                    variant="primary"
                    onClick={() => SelectMovie(d, "Editar")}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => SelectMovie(d, "Borrar")}
                  >
                    Borrar
                  </Button>
                  {/* <i
                    class="fa-solid fa-pen-to-square"
                    onClick={() => SelectMovie(d, "Editar")}
                  ></i>
                  <i class="fa-solid fa-trash"></i> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={EditShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Película</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={movieSelect && movieSelect.name}
                onChange={handleChange}
                placeholder="Ingrese nombre de película"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={movieSelect && movieSelect.category}
                onChange={handleChange}
                placeholder="Ingrese categoría de película"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Año</Form.Label>
              <Form.Control
                type="text"
                name="year"
                value={movieSelect && movieSelect.year}
                onChange={handleChange}
                placeholder="Ingrese año de película"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Dirigida por</Form.Label>
              <Form.Control
                type="text"
                name="directedby"
                value={movieSelect && movieSelect.directedby}
                onChange={handleChange}
                placeholder="Dirigida por.."
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Actuaciones</Form.Label>
              <Form.Control
                type="text"
                name="actors"
                value={movieSelect && movieSelect.actors}
                onChange={handleChange}
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
                name="story"
                rows={3}
                value={movieSelect && movieSelect.story}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={movieSelect && movieSelect.image}
                onChange={handleChange}
                placeholder="Ingrese url de la imagen"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Trailer</Form.Label>
              <Form.Control
                type="text"
                name="trailer"
                value={movieSelect && movieSelect.trailer}
                onChange={handleChange}
                placeholder="Ingrese url del Trailer"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={(e) => handleEditMovie(e, id)}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={DeleteShow} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Borrar Película</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Está seguro de borrar la película: {movieSelect.name}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => handleDeleteMovie(e, id)}>
            SI
          </Button>
          <Button variant="primary" onClick={handleDeleteClose}>
            NO
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CrudTable;
