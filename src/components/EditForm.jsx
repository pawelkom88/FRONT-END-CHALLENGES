import React from "react";
import InputsList from "./InputsList";
import Modal from "./modal/Modal";
import { nanoid } from "nanoid";
import { playerState } from "../utilities/utilities";

const btnStyles =
  "text-sm bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white border border-green-500 hover:border-transparent rounded mx-2 p-2";

export default function EditForm({ showEditInput, onPlayerEdit, player, setSelectedPlayer }) {
  const [editPlayer, setEditPlayer] = React.useState(playerState);

  function handlePlayerDetails(e) {
    const property = e.target.name;
    const value = e.target.value;

    setEditPlayer({
      id: nanoid(),
      ...editPlayer,
      [property]: value,
    });
  }

  return (
    <>
      {showEditInput && (
        <Modal closeModal={() => setSelectedPlayer(null)}>
          <div className="flex flex-col space-y-2 my-2 bg-blue-100 p-2">
            <label htmlFor="edit name">Edit player name</label>
            <InputsList onChange={handlePlayerDetails} value={editPlayer} />
            <button onClick={() => onPlayerEdit(editPlayer, player.id)} className={btnStyles}>
              Confirm
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
