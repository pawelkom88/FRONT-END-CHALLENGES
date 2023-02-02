import React from "react";
import useFetch from "./hooks/useFetch";
import useDebounce from "./hooks/useDebounce";
import AddedWord from "./components/added-word/AddedWord";
import ListItem from "./components/list-item/ListItem";
import Input from "./components/input/Input";
import ErrorMsg from "./components/error/errorMsg";
import QueryStatus from "./components/status/QueryStatus";
import "./App.css";

export default function App() {
  const [query, setQuery] = React.useState("");
  const [choosenQuery, setChoosenQuery] = React.useState([]);
  const [status, setStatus] = React.useState(false);
  const debounceQuery = useDebounce(query, 500);
  const { data, loading, error } = useFetch(debounceQuery);

  function handleQuery(item) {
    setStatus(false);

    // loop over items in array and check for duplicate keys
    const filteredQuery = choosenQuery.filter(query => query.name !== item.name);

    // update array with new item
    setChoosenQuery([...filteredQuery, item]);

    // Clear input field
    setQuery("");
  }

  function handleKeyDown(e, item) {
    switch (e.key) {
      case "Enter":
        handleQuery(item);
        break;
      case "Escape":
        setQuery("");
        break;
      default:
        null;
    }
  }

  let isQueryIncluded;

  data.forEach(fruit => {
    if (fruit.includes(query)) {
      isQueryIncluded = true;
    } else {
      isQueryIncluded = false;
    }
  });

  const notFound = (query && loading) || (!isQueryIncluded && <p className="p-2">not found</p>);

  const loader = loading && query && <p className="p-2">...loading</p>;

  return (
    <div className="relative mb-6">
      <Input onQuery={setQuery} query={query} />
      <QueryStatus onStatusChange={status} />
      {debounceQuery && (
        <ul className="absolute top-20 left-0 right-0 min-h-[5rem] flex flex-col py-2 mt-2 bg-white text-gray-900 font-bold rounded-lg shadow shadow-gray-400 ">
          {loader}
          {notFound}
          {data?.map(item => {
            return (
              <ListItem key={item} item={item} onKeyDown={handleKeyDown} onQuery={handleQuery} />
            );
          })}
        </ul>
      )}
      <ErrorMsg error={error} />
      <AddedWord choosenQuery={choosenQuery} />
    </div>
  );
}
