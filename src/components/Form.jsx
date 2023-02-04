import React from "react";
import InsertInput from "./InsertInput";
import InputsList from "./InputsList";
import { playerState } from "../utilities/utilities";
import { nanoid } from "nanoid";

const btnStyles = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2";

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

  function handlePlayerDetails(e) {
    const property = e.target.name;
    const value = e.target.value;

    setNewPlayer({
      id: nanoid(),
      ...newPlayer,
      [property]: value,
    });
  }
  return (
    <form className="wrapper space-y-3 mt-16" onSubmit={addNewPlayer}>
      <InputsList onChange={handlePlayerDetails} value={newPlayer} />
      {players.length !== 0 && (
        <InsertInput onIndexChange={setIndex} index={index} numbersOfPlayers={players.length} />
      )}
      <button className={btnStyles}>Add player</button>
    </form>
  );
}
