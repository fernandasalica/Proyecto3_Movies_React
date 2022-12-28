import React from "react";

const CrudRow = ({ data }) => {
  return (
    <tr>
      <td>{data.id}</td>
      <td>Mark</td>
      <td>Otto</td>
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
  );
};

export default CrudRow;
