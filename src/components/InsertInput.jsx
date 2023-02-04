export default function InsertInput({ onIndexChange, index, numbersOfPlayers }) {
  return (
    <div className="wrapper" style={{ marginTop: "1rem" }}>
      <label>Insert at index:</label>
      <input
        className="border-2 border-blue-600 shadow-sm placeholder:text-sm p-2"
        onChange={e => onIndexChange(+e.target.value)}
        id="index"
        name="index"
        type="number"
        min={0}
        max={numbersOfPlayers}
        value={index}
        required
      />
    </div>
  );
}
