import React, { useState } from "react";

export default (props) => {
  const [valor, setValor] = useState("Inicial");

  function changeValueHandler(e) {
    setValor(e.target.value);
  }

  return (
    <div>
      <h2>{valor}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input value={valor} onChange={changeValueHandler} />
        <input value={valor} readOnly />

        {/* Componente não controlados */}
        <input value={undefined} />
      </div>
    </div>
  );
};
