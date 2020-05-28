import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default () => {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Aleatorio min={0} max={100} />
      <Primeiro />
      <ComParametro title="titulo 1" subtitle="subtitulo 1" />
      <Fragmento />
    </div>
  );
};
