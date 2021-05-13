import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            Calculadora de IMC
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Dev: Mateus Gouvêa</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
