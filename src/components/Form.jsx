import React from "react";
import Input from "./Input";
import InsertInput from "./InsertInput";
import { inputProps, playerState } from "../utilities/utilities";

export default function Form({ players, onAddPlayer }) {
  const [newPlayer, setNewPlayer] = React.useState(playerState);
  const [index, setIndex] = React.useState("");

  function addNewPlayer(e) {
    e.preventDefault();
    // copy state to avoid mutation
    const copyPlayersArr = [...players];
    // insert new player at given index
    copyPlayersArr.splice(index, 0, newPlayer);
    // update state
    onAddPlayer(copyPlayersArr);
    // clear inputs
    setNewPlayer(playerState);
  }

  return (
    <form className="wrapper space-y-3 mt-16" onSubmit={addNewPlayer}>
      {Object.values(inputProps).map(prop => {
        return (
          <Input
            key={prop.id}
            numOfPlayers={players.length}
            onAddPlayer={setNewPlayer}
            player={newPlayer}
            {...prop}>
            {prop.name}
          </Input>
        );
      })}
      {players.length !== 0 && (
        <InsertInput onIndexChange={setIndex} index={index} numbersOfPlayers={players.length} />
      )}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
        Add player
      </button>
    </form>
  );
}
