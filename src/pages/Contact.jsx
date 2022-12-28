import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from "react-bootstrap";

const Contact = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Container fluid className="back px-0 ms-0 d-flex flex-column min-vw-100">
        <Formik
          initialValues={{
            nombre: "",
            correo: "",
            categorias: "",
            mensaje: "",
          }}
          validate={(valores) => {
            let errores = {};

            if (!valores.nombre) {
              errores.nombre = "Por favor, ingresa un nombre";
            } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.nombre)) {
              errores.nombre =
                "El nombre solo puede contener letras y espacios";
            }

            if (!valores.correo) {
              errores.correo = "Por favor, ingresa un correo electrónico";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.correo
              )
            ) {
              errores.correo =
                "El nombre solo puede contener letras, numeros, puntos, giones y guion bajo.";
            }

            if (!valores.categorias) {
              errores.categorias = "Por favor, elija una categoría";
            } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.categorias)) {
              errores.categorias = "Selecciona una categoría";
            }

            if (!valores.mensaje) {
              errores.mensaje = "Por favor, ingrese su mensaje";
            } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.mensaje)) {
              errores.mensaje =
                "El mensaje sólo puede contener letras y espacios";
            }

            return errores;
          }}
          onClick={(valores, { resetForm }) => {
            resetForm();
            console.log("Formulario enviado");
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado(false), 5000);
          }}
        >
          {({ errors }) => (
            <Form action="" className="form2 mt-5">
              <div>
                <label className="form-label" htmlFor="nombre">
                  Nombre
                </label>
                <br />
                <Field
                  className="form-control"
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Carlos Perez"
                />
                <ErrorMessage
                  name="nombre"
                  component={() => <div className="error">{errors.nombre}</div>}
                />
              </div>
              <br />
              <div>
                <label className="form-label" htmlFor="correo">
                  Correo electrónico
                </label>
                <br />
                <Field
                  className="form-control"
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="correo@correo.com"
                />
                <ErrorMessage
                  name="correo"
                  component={() => <div className="error">{errors.correo}</div>}
                />
              </div>
              <br />
              <div>
                <label className="form-label" htmlFor="categorias">
                  Te gustaria que sumemos contenido referido a películas de...
                </label>
                <br />
                <Field
                  className="form-control option"
                  name="categorias"
                  as="select"
                >
                  <option value="Acción">Acción</option>
                  <option value="Ciencia Ficción">Ciencia Ficción</option>
                  <option value="Comedia">Comedia</option>
                  <option value="Drama">Drama</option>
                  <option value="Musical">Musical</option>
                  <option value="Suspenso">Suspenso</option>
                  <option value="Terror">Terror</option>
                </Field>
                <ErrorMessage
                  name="categorias"
                  component={() => (
                    <div className="error">{errors.categorias}</div>
                  )}
                />
              </div>
              <br />
              <div>
                <label className="form-label" htmlFor="mensaje">
                  Dejanos tu mensaje
                </label>
                <br />
                <Field
                  className="form-control"
                  name="mensaje"
                  as="textarea"
                  placeholder="Tú mensaje..."
                />
                <ErrorMessage
                  name="mensaje"
                  component={() => (
                    <div className="error">{errors.mensaje}</div>
                  )}
                />
              </div>
              <br />
              <button className="btn btn-outline-light" type="submit">
                Enviar
              </button>
              {formularioEnviado && <p> Formulario enviado con éxito!</p>}
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default Contact;
