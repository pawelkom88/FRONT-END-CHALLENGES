export function Data({ database, setDatabase }) {
  let data = database.tables[database.selected];
  let columns = data[0] ? Object.keys(data[0]) : [];

  return (
    <div className="w-full mt-4">
      <h3 className="font-semibold  text-gray-700 text-lg">Data</h3>
      <div className="border-dashed border-2 p-4 mt-1">
        <div className="flex flex-col">
          {data.length > 0 ? (
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className=" overflow-hidden border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="">
                      <tr>
                        {columns.map((header) => (
                          <th
                            key={header}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {data.map((item) => (
                        <tr key={item.id}>
                          {columns.map((column) => (
                            <td
                              className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                              key={`${item.id}-${column}`}
                            >
                              {item[column]}
                            </td>
                          ))}
                          <td className="relative px-6 py-3">
                            <button
                              onClick={() => {
                                setDatabase((current) => ({
                                  ...current,
                                  tables: {
                                    ...current.tables,
                                    [current.selected]: current.tables[
                                      current.selected
                                    ].filter((row) => row.id !== item.id),
                                  },
                                }));
                              }}
                            >
                              ❌
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-800 text-sm">There is no data to display</p>
          )}
        </div>
      </div>
    </div>
  );
}
