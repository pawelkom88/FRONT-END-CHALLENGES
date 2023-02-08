import { ACTION } from "../store/actions";

export function Data({ database, dispatch }) {
  let table = database.selected;
  let data = database.tables[table];
  let columns = data[0] ? Object.keys(data[0]) : [];

  return (
    <div className="w-full mt-4">
      <h3 className="text-lg font-semibold text-gray-700">Data</h3>
      <div className="p-4 mt-1 border-2 border-dashed">
        <div className="flex flex-col">
          {data.length > 0 ? (
            <div className="-mt-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full pt-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden border-gray-200  sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="">
                      <tr>
                        {columns.map((header) => (
                          <th
                            key={header}
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
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
                              className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                              key={`${item.id}-${column}`}
                            >
                              {item[column]}
                            </td>
                          ))}
                          <td className="relative px-6 py-3">
                            <button
                              onClick={() => {
                                dispatch({
                                  type: ACTION.delete,
                                  payload: table,
                                  id: item.id,
                                });
                              }}
                              // onClick={() => {
                              //   setDatabase((current) => ({
                              //     ...current,
                              //     tables: {
                              //       ...current.tables,
                              //       [table]: current.tables[table].filter(
                              //         (row) => row.id !== item.id
                              //       ),
                              //     },
                              //   }));
                              // }}
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
            <p className="text-sm text-gray-800">There is no data to display</p>
          )}
        </div>
      </div>
    </div>
  );
}
