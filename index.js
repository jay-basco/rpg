import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {dialog} from "./main-dialog"
import {nav} from "./nav"

class App extends Component {
  constructor() {
    super();
    this.state = {
      nav: 1
    };
  }

  render() {
    return (
      <div>
      <div>{dialog(this.state.nav)}</div>
      <div>{nav(this.state.nav)}</div>
        <p>
          What do you do?
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
