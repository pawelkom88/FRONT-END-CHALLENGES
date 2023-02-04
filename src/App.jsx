import React from "react";
import Player from "./components/Player";
import Form from "./components/Form";
import { playersState } from "./utilities/utilities";

export default function App() {
  const [players, setPlayers] = React.useState(playersState);
  const [selected, setSelectedPlayer] = React.useState(null);

  function getPlayerId(id, e) {
    e.stopPropagation();
    setSelectedPlayer(id);
  }

  function removePlayer(id) {
    const updatedPlayers = [...players].filter(player => player.id !== id);
    setPlayers(updatedPlayers);
  }

  function handleEdit(editedPlayer, id) {
    // find player 
    const index = players.findIndex(player => player.id === id);
    const copyPlayersArr = [...players];

    copyPlayersArr.splice(index, 1, editedPlayer);
    setPlayers(copyPlayersArr);
  }

  return (
    <div className="App">
      <h1 className="mt-8 mb-2 text-5xl">Players</h1>
      <p>click to edit</p>
      <ul>
        {!players.length && <h2>There are no players</h2>}
        {players?.map(player => {
          return (
            <Player
              key={player.id}
              {...player}
              onPlayerRemove={removePlayer}
              onPlayerEdit={handleEdit}
              getPlayerId={getPlayerId}
              showEditInput={player.id === selected}
            />
          );
        })}
      </ul>
      <Form players={players} onAddPlayer={setPlayers} />
    </div>
  );
}
