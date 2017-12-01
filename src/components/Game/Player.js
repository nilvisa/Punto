import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerName: props.player.name,
      points: props.player.points
    }
  }

  removePoint = (event) => {
    this.setState({ points: this.state.points - 1 });
  }

  addPoint = (event) => {
    this.setState({ points: this.state.points + 1 });
  }

  render() {
    return (
      <div>
        <h3>{this.state.playerName}</h3>
        {this.state.points >= this.props.max ? (
          <div>
            <h4>Har vunnit!!!</h4>
          </div>
        ) : (
            <div>
              <button onClick={this.removePoint}>-</button>
              <h3>{this.state.points}</h3>
              <button onClick={this.addPoint}>+</button>
            </div>
          )}
      </div>
    );
  }
}

export default Player;