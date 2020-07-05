import React from "react";

export default (props) => {

    function gerarIdade(min, max){
        return parseInt(Math.random() * (max - min)) + min;
    }

  function quandoClicarHandler(e){
      props.quandoClicar('Joao', gerarIdade(15, 35), true);
  }
    
  return (
    <div>
      <div>Filho</div>
      <button onClick={quandoClicarHandler}>Fornecer Informações</button>
    </div>
  );
};
