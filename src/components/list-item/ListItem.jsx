// import {nanoid} from "nanoid";

export default function ListItem({ onKeyDown, onQuery, item }) {
  const newItem = {
    id: item,
    name: item,
  };

  return (
    <li
      onKeyDown={e => onKeyDown(e, newItem)}
      tabIndex={0}
      className="p-2 hover:bg-white focus:bg-white hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:ring focus:ring-blue-500"
      key={item}
      onClick={() => onQuery(newItem)}>
      {item}
    </li>
  );
}
