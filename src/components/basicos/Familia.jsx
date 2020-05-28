import React, { cloneElement } from "react";

export default (props) => {
  //{...props} operador spread passa todas as propriedades pro filho
  return (
    <div>
      {React.Children.map(props.children, (child) => {
        return cloneElement(child, props);
      })}
    </div>
  );
};
