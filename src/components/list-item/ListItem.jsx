import { nanoid } from "nanoid";

export default function ListItem({ onKeyDown, onQuery, item }) {
  const newItem = {
    id: nanoid(),
    name: item,
  };

  return (
    <li
      onKeyDown={e => onKeyDown(e, newItem)}
      tabIndex={0}
      className="p-2 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white focus:outline-none focus:ring focus:ring-blue-500"
      key={item}
      onClick={() => onQuery(newItem)}>
      {item}
    </li>
  );
}
