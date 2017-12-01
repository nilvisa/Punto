import React from 'react';

import Player from './Player';

const Playerlist = props => (
  <ul className="playerlist">
    {
      props.players.map((player, index) => 
        <li key={index}>
          <Player player={player} max={props.max}/>
        </li>
      )
    }
  </ul>
)

export default Playerlist;