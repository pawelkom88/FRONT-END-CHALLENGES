import React from "react";

const inputStyles =
  "w-[20rem] bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500";

export default function Input({ onQuery, query }) {
  return (
    <>
      <label
        htmlFor="success"
        className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
        Enter query
      </label>
      <input
        type="text"
        id="success"
        value={query}
        onChange={e => onQuery(e.target.value)}
        className={inputStyles}
        placeholder="Success input"
      />
    </>
  );
}
