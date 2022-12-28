import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
//import CrudRow from './CrudRow';

const CrudTable = () => {
  
  return (
    <Container className="crud-table">
      <h2 className="mt-2 text-center">Administrar Películas</h2>
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
          {/* {console.log("datos" + data)} */}
          {/* {data.map((d, i) => (
            <CrudRow d={d} key={'Movie' + i} />
              
        ))}
             */}
          {/* <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td><i className="fa-solid fa-star"></i></td>
              </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td><i className="fa-solid fa-star"></i></td>
            </tr> */}
        </tbody>
      </Table>
    </Container>
  );
};

export default CrudTable;
