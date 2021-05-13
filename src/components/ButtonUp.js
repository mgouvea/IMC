import React, { Component } from 'react';
import css from './imc.module.css';

export default class ButtonUp extends Component {
  handleClickUp = () => {
    this.props.onHandleClickUp();
  };
  render() {
    return (
      <button
        onClick={this.handleClickUp}
        className="waves-effect waves-light btn green darken-4"
      >
        +
      </button>
    );
  }
}
