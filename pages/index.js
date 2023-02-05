import { useReducer, useState } from "react";
import { Tables } from "../components/tables";
import { Data } from "../components/data";
import { Admin } from "../components/admin";
import { initialDb } from "../utils/utils";
import { reducer } from "../store/reducer";

export default function DatabasePage() {
  // let [database, setDatabase] = useState(initialDb);
  const [state, dispatch] = useReducer(reducer, initialDb);

  console.log(state)

  return (
    <div className="flex flex-col min-h-[calc(100vh-2em)] items-center mt-4 max-w-md mx-auto">
      <Tables database={state} dispatch={dispatch} />
      <Data database={state} dispatch={dispatch} />
      <Admin database={state} dispatch={dispatch} />
      {/* <Tables database={database} setDatabase={setDatabase} />
      <Data database={database} setDatabase={setDatabase} />
      <Admin database={database} setDatabase={setDatabase} /> */}
    </div>
  );
}
