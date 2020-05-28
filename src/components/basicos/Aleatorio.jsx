import React from "react";

export default (props) => {
  const { min, max } = props;

  let random = getRandomNumber(min, max);

  function getRandomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }

  return (
    <>
      <h2>
        Aleatório entre {min} e {max}
      </h2>
      <p>{random}</p>
    </>
  );
};
