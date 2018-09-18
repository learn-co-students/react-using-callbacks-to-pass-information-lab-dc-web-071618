import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

    constructor(props) {
      super(props)
      this.state = {}
      this.state.selectedColor = ''
    }

    setSelectedColor = (color) => {
      this.setState({
        selectedColor: color
      })
    }

    getSelectedColor = () => {
      return this.state.selectedColor
    }

    genRow = (vals) => (
      vals.map((val, idx) => <Cell onClick={this.setColor} key={idx} getSelectedColor={this.getSelectedColor} />)
    )

    genMatrix = () => (
      this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
    )


    render() {
      return (
        <div id="app">
          <ColorSelector setSelectedColor = {this.setSelectedColor}/>
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
