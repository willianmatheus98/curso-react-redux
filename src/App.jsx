import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layouts/Card";

import "./App.css";

export default () => {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <div className="cards">
        <Card title="Aleatório" color="#fa6900">
          <Aleatorio min={0} max={100} />
        </Card>

        <Card title="Primeiro" color="#e94c6f">
          <Primeiro />
        </Card>

        <Card title="Fragmento" color="#e8b71a">
          <Fragmento />
        </Card>

        <Card title="ComParametro" color="#588c73">
          <ComParametro title="titulo 1" subtitle="subtitulo 1" />
        </Card>
      </div>
    </div>
  );
};
