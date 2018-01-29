import React from 'react';

const Player = props => (
  <div className="player">
    <h3>{props.player.name}</h3>
    {props.player.points >= props.max ? (
      <div>
        <h4>Har vunnit!!!</h4>
      </div>
    ) : (
        <div>
          <button onClick={props.updPlayerPoints}>-</button>
          <h3>{props.player.points}</h3>
          <button onClick={props.updPlayerPoints}>+</button>
        </div>
      )}
  </div>
);

export default Player;