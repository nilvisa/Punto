import React, { Component } from 'react';

import Playerlist from './Playerlist';


class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      players: [],
      max: 10
    }
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  addPlayer = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      players: [...this.state.players, {name: this.state.term, points: 0}]
    });
  }

  render() {
    return (
      <div className="game">
        <Playerlist players={this.state.players} max={this.state.max} />
        <form onSubmit={this.addPlayer}>
          <input placeholder="Enter name" value={this.state.term} onChange={this.onChange} />
          <button> + </button>
        </form>
      </div>
    );
  }

}




export default Game;