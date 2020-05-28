import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layouts/Card";

import "./App.css";

export default () => {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <div className="cards">
        <Card title="Família" color="#69D2E7">
          <Familia lastname="Wilson">
            <FamiliaMembro firstame="John"  />
            <FamiliaMembro firstame="Mara" />
            <FamiliaMembro firstame="Eric" />
            <FamiliaMembro firstame="Ray" />
            <FamiliaMembro firstame="Jay" />
          </Familia>
        </Card>

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
