import React from "react";

const Filters = () => {
  return (
    <div>
      <h1>Filter</h1>
      <ul>
        <li>
          Valor mínimo:
          <input type="text" />
        </li>
        <li>
          Valor máximo:
          <input type="text" />
        </li>
        <li>
          Busca por nome:
          <input type="text" />
        </li>
      </ul>
    </div>
  );
};

export default Filters;
