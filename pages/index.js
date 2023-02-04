import { useReducer, useState } from "react";
import { Tables } from "../components/tables";
import { Data } from "../components/data";
import { Admin } from "../components/admin";
import { initialDb } from "../utils/utils";

export default function DatabasePage() {
  let [database, setDatabase] = useState(initialDb);

  return (
    <div className="flex flex-col min-h-[calc(100vh-2em)] items-center mt-4 max-w-md mx-auto">
      <Tables database={database} setDatabase={setDatabase} />
      <Data database={database} setDatabase={setDatabase} />
      <Admin database={database} setDatabase={setDatabase} />
    </div>
  );
}
