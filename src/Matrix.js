import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      colorSelected: '#fff'
    }
  }

  handleColorSelected = (color) => {
    //cannot console.log insite setState. color is the color that was selected on click. It is being stored on state(use react debugger, will show you the props and state of this compoment)
    console.log(color)
    this.setState({
      colorSelected: color
    })
  }

  //this will pass the colorSelected to Cell Component
  passColorSelected = () => this.state.colorSelected

  //added passColorSelected as props 
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} passColorSelected={this.passColorSelected}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

//added handleColorSelected as a prop to Matrix(orange)
  render() {
    return (
      <div id="app">
        <ColorSelector colorSelected={this.colorSelected} handleColorSelected={this.handleColorSelected} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
