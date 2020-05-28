import React from "react";

import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
  //{...props} operador spread passa todas as propriedades pro filho
  return (
    <div>
      <FamiliaMembro firstame="John" lastname={props.lastname} />
      <FamiliaMembro firstame="Mara" lastname={props.lastname} />
      <FamiliaMembro firstame="Eric" lastname={props.lastname} />
      <FamiliaMembro firstame="Ray" {...props} />
      <FamiliaMembro firstame="Jay" lastname={props.lastname} />
    </div>
  );
};
