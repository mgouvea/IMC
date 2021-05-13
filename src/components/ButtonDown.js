import React, { Component } from 'react';

export default class ButtonDown extends Component {
  handleClickDown = () => {
    this.props.onHandleClickDown();
  };
  render() {
    return (
      <button
        onClick={this.handleClickDown}
        className="waves-effect waves-light btn red darken-4"
      >
        -
      </button>
    );
  }
}
