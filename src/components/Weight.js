import React, { Component } from 'react';
import ButtonDown from './ButtonDown';
import ButtonUp from './ButtonUp';
import css from './imc.module.css';

export default class Weight extends Component {
  handleClickWeightDown = () => {
    this.props.onClickDown();
  };
  handleClickWeightUp = () => {
    this.props.onClickUp();
  };

  render() {
    return (
      <div>
        <div>Massa Corporal (Kg)</div>
        <div className={[css.values]}>
          <ButtonDown onHandleClickDown={this.handleClickWeightDown} />
          <span className={css.values} style={{ paddingLeft: 10 }}></span>
          <span style={{ marginLeft: 5 }}>
            <ButtonUp onHandleClickUp={this.handleClickWeightUp} />
          </span>
        </div>
      </div>
    );
  }
}
