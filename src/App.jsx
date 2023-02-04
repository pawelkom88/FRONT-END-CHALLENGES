import React from "react";
import Players from "./components/Players";
import Form from "./components/Form";
import { playersState } from "./utilities/utilities";

export default function App() {
  const [players, setPlayers] = React.useState(playersState);

  function removePlayer(id) {
    const updatedPlayers = [...players].filter(player => player.id !== id);
    setPlayers(updatedPlayers);
  }

  return (
    <div className="App">
      <h1>Players</h1>
      <ul>
        {!players.length && <h2>There are no players</h2>}
        {players?.map(player => {
          return <Players key={player.id} {...player} onRemovePlayer={removePlayer} />;
        })}
      </ul>
      <Form players={players} onAddPlayer={setPlayers} />
    </div>
  );
}
