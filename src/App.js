import React, { Component } from 'react';

import Name from './components/Header/Name';
import Game from './components/Game/Game';

import './styles/css/main.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Name />
        <Game />
      </div>
    );
  }
}

export default App;
