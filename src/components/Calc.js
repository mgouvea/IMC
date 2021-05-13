import React, { Component } from 'react';
import css from './imc.module.css';
import Weight from './Weight';
import Height from './Height';
import NavBar from './NavBar';
import Imc from './Imc';

export default class Calc extends Component {
  constructor() {
    super();

    this.state = {
      weight: 60,
      height: 170,
    };
  }

  handleClickWeightDown = () => {
    const { weight } = this.state;

    this.setState({
      weight: weight - 1,
    });
  };
  handleClickWeightUp = () => {
    const { weight } = this.state;

    this.setState({
      weight: weight + 1,
    });
  };

  handleClickHeightDown = () => {
    const { height } = this.state;

    this.setState({
      height: height - 1,
    });
  };
  handleClickHeightUp = () => {
    const { height } = this.state;

    this.setState({
      height: height + 1,
    });
  };

  render() {
    const { weight, height } = this.state;
    let height2 = height * height;
    let imc = weight / height2;
    imc = imc * 10000;
    imc = imc.toFixed(2);
    let bg = '';
    let classification = '';

    if (imc <= 18) {
      bg = 'red';
      classification = 'Anorexia';
    } else if (imc > 18 && imc < 25) {
      bg = 'green';
      classification = 'Peso Normal';
    } else if (imc >= 25 && imc < 30) {
      bg = 'orange';
      classification = 'Sobrepeso';
    } else if (imc > 30) {
      bg = 'red';
      classification = 'Obeso';
    }

    return (
      <div className="container">
        <NavBar />
        <div className="row">
          <div className="col s6" style={{ marginTop: 25 }}>
            <span className={css.values}>Seu IMC é: </span>
            <span className={css.values} style={{ backgroundColor: bg }}>
              {imc}
            </span>
            <span className={css.values}>{classification}</span>
          </div>
          <div className="col s6">
            <div className="col s6">
              <Weight
                onClickDown={this.handleClickWeightDown}
                onClickUp={this.handleClickWeightUp}
              />
              <span className={css.values} style={{ marginLeft: 35 }}>
                {weight}
              </span>
            </div>

            <div>
              <Height
                onClickDown={this.handleClickHeightDown}
                onClickUp={this.handleClickHeightUp}
              />
              <span className={css.values} style={{ marginLeft: 22 }}>
                {height}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
