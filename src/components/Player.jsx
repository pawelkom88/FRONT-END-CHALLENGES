import React from "react";

export default function Player({
  onPlayerRemove,
  id,
  name,
  lastName,
  age,
  onPlayerEdit,
  getPlayerId,
  showEditInput,
}) {
  const [editPlayer, setEditPlayer] = React.useState("");
  function onEditPlayer(id) {
    const editedPlayer = {
      id,
      name: editPlayer,
      lastName,
      age,
    };

    onPlayerEdit(editedPlayer, id);
  }

  return (
    <div className="flex flex-col items-start justify-start my-4">
      {/* componetn */}

      <li onClick={e => getPlayerId(id, e)} className="cursor-pointer hover:bg-blue-100">
        <p className="italic">
          name:
          <span className="font-bold">
            {name} {lastName}
          </span>
        </p>
        <p className="italic">
          age:
          <span className="font-bold">{age}</span>
        </p>
      </li>

      {/* componetn */}

      {showEditInput && (
        <div className="flex my-2">
          <label htmlFor="edit player">Edit player name</label>
          <input
            className="border border-blue-600 shadow-sm placeholder:text-sm"
            id="edit"
            name="edit player"
            type="text"
            onChange={e => setEditPlayer(e.target.value)}
            value={editPlayer}
          />
          <button
            onClick={() => onEditPlayer(id)}
            className="text-sm bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white border border-green-500 hover:border-transparent rounded mx-2 p-2">
            Confirm
          </button>
        </div>
      )}

      <button
        className="text-sm bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white border border-red-500 hover:border-transparent rounded mx-2 p-2"
        onClick={() => onPlayerRemove(id)}>
        Remove
      </button>
    </div>
  );
}
