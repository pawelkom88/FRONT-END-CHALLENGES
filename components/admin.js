export function Admin({ database, setDatabase }) {
  return (
    <div className="w-full mt-auto">
      <h3 className="font-semibold  text-gray-700 text-lg">Admin</h3>
      <div className="border-dashed border-2 p-4 mt-1 flex space-x-4">
        <button
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => {
            setDatabase((current) => ({
              ...current,
              tables: {
                ...current.tables,
                [current.selected]:
                  current.selected === "users"
                    ? [
                        { id: 1, name: "Bob", age: 24 },
                        { id: 2, name: "Alice", age: 28 },
                        { id: 3, name: "Jane", age: 30 },
                      ]
                    : current.selected === "books"
                    ? [
                        { id: 1, title: "The Lord of the Rings" },
                        { id: 2, title: "Liars Poker" },
                      ]
                    : [],
              },
            }));
          }}
        >
          Restore table
        </button>
        <button
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={() => {
            setDatabase((current) => ({
              ...current,
              tables: {
                ...current.tables,
                [current.selected]: [],
              },
            }));
          }}
        >
          Clear table
        </button>
      </div>
    </div>
  );
}
