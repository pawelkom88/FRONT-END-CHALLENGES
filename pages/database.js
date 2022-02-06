import { useState } from "react";
import { Tables } from "../components/tables";
import { Data } from "../components/data";
import { Admin } from "../components/admin";

export default function DatabasePage() {
  let [database, setDatabase] = useState({
    selected: "users",
    tables: {
      users: [
        { id: 1, name: "Bob", age: 24 },
        { id: 2, name: "Alice", age: 28 },
        { id: 3, name: "Jane", age: 30 },
      ],
      books: [
        { id: 1, title: "The Lord of the Rings" },
        { id: 2, title: "Liars Poker" },
      ],
    },
  });

  return (
    <div className="flex flex-col min-h-[calc(100vh-2em)] items-center mt-4 max-w-md mx-auto">
      <Tables database={database} setDatabase={setDatabase} />
      <Data database={database} setDatabase={setDatabase} />
      <Admin database={database} setDatabase={setDatabase} />
    </div>
  );
}
