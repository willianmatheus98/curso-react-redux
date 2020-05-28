import React from "react";

export default (props) => {
  const { min, max } = props;

  let random = getRandomNumber(min, max);

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  return (
    <>
      <h1>
        Aleatório entre {min} e {max}
      </h1>
      <h2>{random}</h2>
    </>
  );
};
