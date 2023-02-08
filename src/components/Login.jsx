import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Form as FormFormik, Formik } from "formik";
import { loginSchema } from "../schemas";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomInput from "./CustomInput";
import CustomPass from "./CustomPass";

const Login = ({ show, handleClose, handleShowSignUp, login }) => {
  const navigate = useNavigate();

  const handleToggleModal = (evt) => {
    evt.preventDefault();
    handleClose();
    handleShowSignUp();
  };

  const onSubmit = async (values, actions) => {
    // const rs = await fetch("http://localhost:3001/user/login", {
    fetch("http://localhost:3001/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.token));
        if (res.errors) {
          toast.success("Error al iniciar sesión. Inténtelo de nuevo.");
          handleClose();
          localStorage.setItem("token", "");
        } else {
          toast.success("Bienvenido!");
          handleClose();
          navigate("/");
        }
      });
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{ name: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, resetForm, handleSubmit }) => (
          <>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Iniciar sesión</Modal.Title>
              </Modal.Header>
              <FormFormik onSubmit={handleSubmit}>
                <Modal.Body>
                  <CustomInput
                    label="Usuario"
                    name="name"
                    type="text"
                    placeholder="Bruno Díaz"
                  />
                  <CustomPass
                    label="Contraseña"
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                  />
                  <Form.Text>
                    Olvidó su contraseña?{" "}
                    <Link to="/RecoveryPass" onClick={handleClose}>
                      Recuperar
                    </Link>
                  </Form.Text>
                  <br />
                  <Form.Text>
                    Todavia no tienes cuenta?
                    <a
                      href={require("./Suscribite")}
                      onClick={handleToggleModal}
                    >
                      Registrate!
                    </a>
                  </Form.Text>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                  </Button>
                  <Button variant="primary" type="submit">
                    Ingresar
                  </Button>
                </Modal.Footer>
              </FormFormik>
            </Modal>
          </>
        )}
      </Formik>
    </>
  );
};
export default Login;
