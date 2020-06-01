import React from "react";

export default (props) => {
  const isPar = props.numero % 2 === 0;

  return <>{isPar ? <span>Par</span> : <span>Ímpar</span>}</>;
};
