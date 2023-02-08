import React from "react";
import Fer from "../img/fer.jpg";
import Checho from "../img/checho.jpg";
import Nico from "../img/nicolasg.png";
import Dani from "../img/daniela.png";

const AboutUs = () => {
  return (
    <>
      <div class="Acercadenosotros">
        <h2>ACERCA DE NOSOTROS</h2>
        <br />
      </div>

      {/* <!--inicio de fotos integrantes--> */}

      <div class="container-fluid ci¿on">
        <div class="container">
          <div class="row text-center d-flex">
            <div class="col d-flex justify-content-center">
              <div class="contenedor transform-img">
                <img src={Fer} alt="Facu" />
                <div class="detalle">
                  <h3>
                    Fernanda <br />
                    Salica
                  </h3>
                  <p>
                    Nuestra especialista en backend. <br />
                    Apasionada por aprender y dar lo mejor de si siempre.
                  </p>
                </div>
              </div>
            </div>

            <div class="col d-flex justify-content-center">
              <div class="contenedor transform-img">
                <img src={Checho} alt="Tefi" />
                <div class="detalle">
                  <h3>
                    Sergio <br />
                    Manzaraz
                  </h3>
                  <p>
                    Nuestro tech lead. <br /> Es programador autodidacta,
                    positivo y carismatico.
                    <br />
                    El alma del equipo.
                  </p>
                </div>
              </div>
            </div>

            <div class="col d-flex justify-content-center">
              <div class="contenedor transform-img">
                <img src={Dani} alt="Dani" />
                <div class="detalle">
                  <h3>
                    Daniela <br />
                    Gavier
                  </h3>
                  <p>
                    La sagitariana del team, intento de programadora, reformada
                    en Scrum y Tester QA.
                  </p>
                </div>
              </div>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="contenedor transform-img">
                <img src={Nico} alt="NicoG" />
                <div class="detalle">
                  <h3>Nicolas Guiggiolini</h3>
                  <p>
                    El programador gamer del grupo. El nerd del team, versatil y
                    capaz de resolver cualquier error que se presente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
