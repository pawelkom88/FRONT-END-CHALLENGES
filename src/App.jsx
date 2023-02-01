import React from "react";
import useFetch from "./hooks/useFetch";
import useDebounce from "./hooks/useDebounce";
import AddedWord from "./components/added-word/AddedWord";
import ListItem from "./components/list-item/ListItem";
import Input from "./components/input/Input";
import "./App.css";

// const api = 'https://restcountries.com/v3.1/all?fields=name"';

export default function App() {
  const [query, setQuery] = React.useState("");
  const [choosenQuery, setChoosenQuery] = React.useState([]);
  const debounceQuery = useDebounce(query, 500);
  const { data, loading, error } = useFetch(debounceQuery);

  function handleQuery(item) {
    // if array is empty add first item
    if (!choosenQuery.length) {
      setChoosenQuery([...choosenQuery, item]);
    }

    // loop over items in array and check for duplicate keys
    choosenQuery.forEach(query => {
      if (query.name === item.name) {
        return;
      }

      // update array with new item
      setChoosenQuery([...choosenQuery, item]);
    });

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

  const notFound = (query && loading) || data.includes(query) || <p className="p-2">not found</p>;

  const loader = loading && query && <p className="p-2">...loading</p>;

  return (
    <div className="mb-6">
      <Input onQuery={setQuery} query={query} />

      {debounceQuery && (
        <ul className="flex flex-col py-2 mt-2 bg-gray-500 text-white font-bold rounded-lg shadow shadow-gray-400 ">
          {loader}
          {notFound}
          {data?.map(item => {
            return <ListItem item={item} onKeyDown={handleKeyDown} onQuery={handleQuery} />;
          })}
        </ul>
      )}

      {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500">
        <span className="font-medium">Well done!</span> Some success message.
      </p> */}

      <AddedWord choosenQuery={choosenQuery} />
    </div>
  );
}
