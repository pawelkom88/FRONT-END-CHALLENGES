export function Admin({ database, dispatch }) {
  let table = database.selected;

  return (
    <div className="w-full mt-auto">
      <h3 className="text-lg font-semibold text-gray-700">Admin</h3>
      <div className="flex p-4 mt-1 space-x-4 border-2 border-dashed">
        <button
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => {
            dispatch({ type: "restoreTable", table });
            // setDatabase((current) => ({
            //   ...current,
            //   tables: {
            //     ...current.tables,
            //     [table]:
            //       table === "users"
            //         ? [
            //             { id: 1, name: "Bob", age: 24 },
            //             { id: 2, name: "Alice", age: 28 },
            //             { id: 3, name: "Jane", age: 30 },
            //           ]
            //         : table === "books"
            //         ? [
            //             { id: 1, title: "The Lord of the Rings" },
            //             { id: 2, title: "Liars Poker" },
            //           ]
            //         : [],
            //   },
            // }));
          }}
        >
          Restore table
        </button>
        <button
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={() => {
            dispatch({ type: "clearTable", table });
            // setDatabase((current) => ({
            //   ...current,
            //   tables: {
            //     ...current.tables,
            //     [current.selected]: [],
            //   },
            // }));
          }}
        >
          Clear table
        </button>
      </div>
    </div>
  );
}
