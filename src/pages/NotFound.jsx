import React from "react";
import Card from "react-bootstrap/Card";

const NotFound = (props) => {
  return (
    <div className="containerError">
      <Card className="text-center">
        <Card.Body>
          {props.message && <h3 className="text-danger">{props.message}</h3>}
          <Card.Title>
            <h1 className="titleError pt-4">- ERROR 404 -</h1>
          </Card.Title>
          <Card.Text className="img-error">
            <p>
              Awww... no te preocupes. <br /> Es solo un error 404. Lo que estas
              buscando puede haberse extraviado en la memoria a largo plazo.{" "}
            </p>
            <img
              src={require("../img/img-error.gif")}
              alt="Gif intensamente"
              className="gif"
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NotFound;
