import React, { Component } from 'react';
import ButtonDown from './ButtonDown';
import ButtonUp from './ButtonUp';
import css from './imc.module.css';

export default class Height extends Component {
  handleClickHeightDown = () => {
    this.props.onClickDown();
  };
  handleClickHeightUp = () => {
    this.props.onClickUp();
  };

  render() {
    return (
      <div>
        <div>Altura (cm)</div>
        <div className={css.values}>
          <ButtonDown onHandleClickDown={this.handleClickHeightDown} />
          <span className={css.values} style={{ paddingLeft: 10 }}></span>
          <ButtonUp onHandleClickUp={this.handleClickHeightUp} />
        </div>
      </div>
    );
  }
}
