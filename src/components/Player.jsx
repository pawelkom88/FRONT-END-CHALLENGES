import React from "react";
import EditForm from "./EditForm";

const btnStyles =
  "text-sm bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white border border-red-500 hover:border-transparent rounded mt-2 mx-2 p-2";

export default function Player({ onPlayerRemove, player, onPlayerEdit, getPlayerId }) {
  const [selected, setSelectedPlayer] = React.useState(null);

  function getPlayerId(id, e) {
    e.stopPropagation();
    setSelectedPlayer(id);
  }

  return (
    <div className="flex flex-col items-start justify-start my-4 mx-2">
      <li
        onClick={e => getPlayerId(player.id, e)}
        className="w-full border-2 border-blue-200 cursor-pointer hover:bg-blue-50 p-4 shadow-md">
        <p className="italic">
          name:
          <span className="font-bold">
            {player.name} {player.lastName}
          </span>
        </p>
        <p className="italic">
          age:
          <span className="font-bold">{player.age}</span>
        </p>
        <button className={btnStyles} onClick={() => onPlayerRemove(player.id)}>
          Remove
        </button>
        <EditForm
          showEditInput={player.id === selected}
          onPlayerEdit={onPlayerEdit}
          player={player}
          setSelectedPlayer={setSelectedPlayer}
        />
      </li>
    </div>
  );
}
