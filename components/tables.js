import { ACTION } from "../store/actions";

export function Tables({ database, dispatch }) {
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-gray-700">Tables</h3>
      <div className="p-4 mt-1 border-2 border-dashed">
        <ul className="ml-4 text-gray-800 list-disc">
          {Object.keys(database.tables).map((table, index) => {
            return (
              <li key={table} className={index !== 0 ? "mt-1" : ""}>
                <button
                  className={table === database.selected ? "font-semibold" : ""}
                  onClick={() =>
                    dispatch({ type: ACTION.select, payload: table })
                  }
                >
                  {table} ({database.tables[table].length})
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
