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
      players: [...this.state.players, {id: this.state.players.length, name: this.state.term, points: 0}]
    });
  }

  updPlayerPoints = (playerToUpdate, event) => {
    event.preventDefault();
    const operator = event.currentTarget.innerHTML;
    const updPlayers = [];    
    this.state.players.map((player) => {
      if(player.id === playerToUpdate.id) {
        player.points = (operator === '+') ? player.points+1 : player.points-1;
      }
      updPlayers.push(player);
      return updPlayers;
    });

    this.setState((prevState) => {
      return {players: updPlayers};
    });
  }

  render() {
    return (
      <div className="game">
        <Playerlist 
          players={this.state.players} 
          max={this.state.max}
          updPlayerPoints={this.updPlayerPoints}
        />

        <form onSubmit={this.addPlayer}>
          <input placeholder="Enter name" value={this.state.term} onChange={this.onChange} />
          <button> + </button>
        </form>
      </div>
    );
  }

}




export default Game;