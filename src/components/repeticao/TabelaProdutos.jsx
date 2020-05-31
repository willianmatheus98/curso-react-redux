import React from "react";

export default (props) => {
  const produtos = props.produtos.map((produto) => {
    return (
      <li
        key={produto.id}
      >{`Produto: ${produto.name} com preço: $ ${produto.price}`}</li>
    );
  });

  return (
    <React.Fragment>
      <ul style={{ listStyle: "none" }}>{produtos}</ul>
    </React.Fragment>
  );
};
