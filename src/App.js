import React, { Component } from 'react';

import Name from './components/Header/Name';

import './styles/css/main.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Name />
      </div>
    );
  }
}

export default App;
