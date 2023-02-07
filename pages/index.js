import { useReducer } from "react";
import { Tables } from "../components/tables";
import { Data } from "../components/data";
import { Admin } from "../components/admin";
import { initialDb } from "../utils/utils";
import { reducer } from "../store/reducer";

export default function DatabasePage() {
  // let [database, setDatabase] = useState(initialDb);
  const [database, dispatch] = useReducer(reducer, initialDb);

  return (
    <div className="flex flex-col min-h-[calc(100vh-2em)] items-center mt-4 max-w-md mx-auto">
      <Tables database={database} dispatch={dispatch} />
      <Data database={database} dispatch={dispatch} />
      <Admin database={database} dispatch={dispatch} />
      {/* <Tables database={database} setDatabase={setDatabase} />
      <Data database={database} setDatabase={setDatabase} />
      <Admin database={database} setDatabase={setDatabase} /> */}
    </div>
  );
}
