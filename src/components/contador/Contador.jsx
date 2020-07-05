import React from "react";

import "./Contador.css";

export default class Contador extends React.Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 1,
  };

  constructor(props) {
    super(props);
    this.inc = this.inc.bind(this); // aponta pra instância atual
  }

  inc() {
    this.setState({ numero: this.state.numero + this.state.passo });
  }

  dec = () => {
    this.setState({ numero: this.state.numero - this.state.passo });
  };

  setPasso = (e) => {
    this.setState({ passo: +e.target.value });
  };

  render() {
    return (
      <div className="contador">
        <h2>Contador</h2>
        <p>Valor Inicial: {this.props.numeroInicial}</p>
        <p>Valor: {this.state.numero}</p>
        <div>
          <label htmlFor="passoInput">Passo:</label>
          <input
            type="number"
            value={this.state.passo}
            id="passoInput"
            onChange={this.setPasso}
          />
        </div>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}
