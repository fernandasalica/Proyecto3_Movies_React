import { React, useState, useEffect } from "react";
import CloseButton from "react-bootstrap/CloseButton";

const Suscribite = () => {
  const [modal, setModal] = useState("hidden");
  useEffect(() => {
    setTimeout(() => {
      setModal("visible");
    }, 500);
    setTimeout(() => {
      setModal("hidden");
    }, 5000);
  }, []);

  return (
    <div style={{ visibility: modal }} className="modal d-md-flex">
      <div className="contenido">
        <div className="fondito d-flex justify-centent-center align-items-center">
          <h3 variant="danger lg" className="text-danger"> Suscribete!</h3>
          <CloseButton
            onClick={() => {
              setModal("hidden");
            }}
            variant="white"
            className="btn-close"
          />
        </div>
      </div>
    </div>
  );
};

export default Suscribite;