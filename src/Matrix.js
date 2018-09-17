import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  constructor() {
    super();
    this.state = {
      selectedColor: "#000"
    };
  }

  updateSelectedColor = color => {
    this.setState({
      selectedColor: color
    });
  };

  getSelectedColor = () => {
    return this.state.selectedColor;
  };

  genRow = vals =>
    vals.map((val, idx) => (
      <Cell key={idx} color={val} getSelectedColor={this.getSelectedColor} />
    ));

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  render() {
    return (
      <div id="app">
        <ColorSelector updateSelectedColor={this.updateSelectedColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};
