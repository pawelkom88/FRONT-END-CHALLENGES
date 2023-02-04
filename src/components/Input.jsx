export default function Input({
  id,
  name,
  htmlFor,
  children,
  type,
  player,
  numOfPlayers,
  onAddPlayer,
}) {
  function handlePlayerDetails(e) {
    const property = e.target.name;
    const value = e.target.value;

    onAddPlayer({
      id: numOfPlayers + 1,
      ...player,
      [property]: value,
    });
  }

  return (
    <div>
      <label htmlFor={htmlFor}>{children}</label>
      <input
        className="border-2 border-blue-600 shadow-sm placeholder:text-sm p-2"
        onChange={handlePlayerDetails}
        name={name}
        id={id}
        type={type}
        value={player[name]}
        placeholder={name}
        required
      />
    </div>
  );
}
