import React from "react";
import { Button, Modal, Stack } from "react-bootstrap";
import { Form, Formik } from "formik";
import { singupSchema } from "../schemas";
import CustomRePass from "./CustomRePass";
import CustomInput from "./CustomInput";
import CustomPass from "./CustomPass";

const onSubmit = async (values, actions) => {
  const rs = await fetch('https://backend-proyecto3-cpzv4av54-admanser.vercel.app/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: values.name,
      mail: values.mail,
      password: values.password
    })
  });
  const response = await rs.json();
  console.log('response', response)
  actions.resetForm();
};

const SignUp = ({ show, handleClose }) => {
  return (
    <Formik
      initialValues={{ name: "", mail: "", password: "", confirmpass: "" }}
      validationSchema={singupSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, resetForm, handleSubmit }) => (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="text-dark fw-bold p-2">
                Registrarse
              </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <CustomInput
                  label="Usuario"
                  name="name"
                  type="text"
                  placeholder="Bruno Díaz"
                />
                <CustomInput
                  label="Mail"
                  name="mail"
                  type="email"
                  placeholder="bruno@mail.com"
                />
                <CustomPass
                  label="Contraseña"
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                />
                <CustomRePass
                  label="Confirmar Contraseña"
                  name="confirmpass"
                  type="password"
                  placeholder="Confirmar Contraseña"
                />
                {/* <button disabled={isSubmitting} type="submit" className="mt-5">
                  Submit
                </button> */}
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => handleClose(resetForm())}
                  >
                  Cerrar
                </Button>
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  Crear Cuenta
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </>
      )}
    </Formik>
  );
};
export default SignUp;
