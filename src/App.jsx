import React from "react";

import Input from "./components/formulario/Input";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layouts/Card";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";

import alunos from "./data/alunos";
import produtos from "./data/produtos";

import "./App.css";

export default () => {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <div className="cards">
        <Card title="Componente controlado" color="#eea760">
          <Input />
        </Card>

        <Card title="Comunicação indireta" color="#eea990">
          <IndiretaPai />
        </Card>

        <Card title="Comunicação direta" color="#DE4D4E">
          <DiretaPai />
        </Card>

        <Card title="Par ou ímpar" color="#FFC33C">
          <ParOuImpar numero={159} />
          <UsuarioInfo usuario={{ nome: "John" }} />
          <UsuarioInfo usuario={{ email: "john@example.com" }} />
          <UsuarioInfo />
        </Card>

        <Card title="Lista de produtos" color="#A0Daaa">
          <TabelaProdutos produtos={produtos} />
        </Card>

        <Card title="Lista de alunos" color="#A7DBDB">
          <ListaAlunos alunos={alunos} />
        </Card>

        <Card title="Família" color="#69D2E7">
          <Familia lastname="Wilson">
            <FamiliaMembro firstame="John" />
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
