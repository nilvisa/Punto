import React from 'react';

import Player from './Player';

const Playerlist = props => {

  props.players.sort((a, b)=> {
    return b.points - a.points;
  });

  return(
    <ul className="playerlist">
      {
        props.players.map((player, index) => 
          <li key={player.id}>
            <Player 
              player={player} 
              max={props.max}
              updPlayerPoints={props.updPlayerPoints.bind(null, player)}
            />
          </li>
        )
      }
    </ul>
  )
}

export default Playerlist;