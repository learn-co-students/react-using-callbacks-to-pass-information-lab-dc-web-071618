import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    // debugger
    // console.log(this.props.color)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    //remember to call the function with ()
    this.setState({
      color: this.props.passColorSelected()
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
      </div>
    )
  }

}
