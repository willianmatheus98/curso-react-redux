import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  const [nome, setNome] = useState("?");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
    console.log(nomeParam, idadeParam, nerdParam);
    setNome(nomeParam);
    setIdade(idadeParam);
    setNerd(nerdParam);
  }

  return (
    <div>
      <span> Nome : {nome}</span>
      <span> Idade : {idade}</span>
      <span> Nerd : {nerd}</span>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};
