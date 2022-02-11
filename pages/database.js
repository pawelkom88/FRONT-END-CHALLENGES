import { useReducer, useState } from "react";
import { Tables } from "../components/tables";
import { Data } from "../components/data";
import { Admin } from "../components/admin";

let initialDb = {
  selected: "users",
  tables: {
    users: [
      { id: 1, name: "Bob", age: 24 },
      { id: 2, name: "Alice", age: 28 },
      { id: 3, name: "Jane", age: 30 },
    ],
    books: [
      { id: 1, title: "The Lord of the Rings" },
      { id: 2, title: "Liar's Poker" },
    ],
  },
};

export default function DatabasePage() {
  // let [database, setDatabase] = useState(initialDb);
  let [database, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "selectTable":
        return {
          ...state,
          selected: action.table,
        };

      case "deleteRow":
        // deleting a row from a table
        return {
          ...state,
          tables: {
            ...state.tables,
            [action.table]: state.tables[action.table].filter(
              (row) => row.id !== action.id
            ),
          },
        };

      case "restoreTable":
        return {
          ...state,
          tables: {
            ...state.tables,
            [action.table]: initialDb.tables[action.table],
          },
        };

      case "clearTable":
        return {
          ...state,
          tables: {
            ...state.tables,
            [action.table]: [],
          },
        };

      default:
        throw new Error(`Unknown action: ${action.type}`);
    }
  }, initialDb);

  return (
    <div className="flex flex-col min-h-[calc(100vh-2em)] items-center mt-4 max-w-md mx-auto">
      <Tables database={database} dispatch={dispatch} />
      <Data database={database} dispatch={dispatch} />
      <Admin database={database} dispatch={dispatch} />
    </div>
  );
}
