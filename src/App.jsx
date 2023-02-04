import React from "react";
import Player from "./components/Player";
import Form from "./components/Form";
import { playersState } from "./utilities/utilities";

export default function App() {
  const [players, setPlayers] = React.useState(playersState);

  function removePlayer(id) {
    const updatedPlayers = [...players].filter(player => player.id !== id);
    setPlayers(updatedPlayers);
  }

  function handleEdit(editedPlayer, id) {
    // find player
    const index = players.findIndex(player => player.id === id);
    // copy players
    const copyPlayersArr = [...players];
    //swap old object with new, passed in one
    copyPlayersArr.splice(index, 1, editedPlayer);
    // update state
    setPlayers(copyPlayersArr);
  }

  return (
    <div className="App">
      <h1 className="mt-8 mb-2 text-5xl">Players</h1>
      {players.length > 0 && <p>click to edit</p>}
      <ul className="flex">
        {!players.length && <h2>There are no players</h2>}
        {players?.map(player => {
          return (
            <Player
              key={player.id}
              player={player}
              onPlayerRemove={removePlayer}
              onPlayerEdit={handleEdit}
            />
          );
        })}
      </ul>
      <Form players={players} onAddPlayer={setPlayers} />
    </div>
  );
}
