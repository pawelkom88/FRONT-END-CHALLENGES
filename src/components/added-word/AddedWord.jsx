export default function AddedWord({choosenQuery}) {
  return (
    <div className="mt-16">
      Choosen query :{" "}
      <ul>
        {choosenQuery?.map(word => {
          return <li key={word.id}>{word.name}</li>;
        })}
      </ul>
    </div>
  );
}
