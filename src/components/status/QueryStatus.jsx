export default function QueryStatus({ onStatusChange }) {
  return (
    <>{onStatusChange && <p className="text-red-500 m-2">This query has been already added !</p>}</>
  );
}
