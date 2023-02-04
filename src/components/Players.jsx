export default function Players({ onRemovePlayer, name, lastName, age, id }) {
  return (
    <div className="flex items-center justify-start my-4">
      <li>
        {name} {lastName} {age}
      </li>
      <button
        className="text-sm bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2"
        onClick={() => onRemovePlayer(id)}>
        Remove
      </button>
    </div>
  );
}
