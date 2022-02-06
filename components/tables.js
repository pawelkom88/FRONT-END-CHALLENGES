export function Tables({ database, setDatabase }) {
  return (
    <div className="w-full">
      <h3 className="font-semibold text-gray-700 text-lg">Tables</h3>
      <div className="border-dashed border-2 p-4 mt-1">
        <ul className="list-disc ml-4 text-gray-800">
          {Object.keys(database.tables).map((table, index) => (
            <li key={table} className={index !== 0 ? "mt-1" : ""}>
              <button
                className={table === database.selected ? "font-semibold" : ""}
                onClick={() => {
                  setDatabase((current) => ({
                    ...current,
                    selected: table,
                  }));
                }}
              >
                {table} ({database.tables[table].length})
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
