import React from "react";

const inputStyles = "w-[25rem] border-2 text-sm rounded-lg focus:ring-green-500 block w-full p-2.5";

export default function Input({ onQuery, query }) {
  return (
    <>
      <label htmlFor="success" className="block mb-2 text-sm font-medium ">
        Enter fruit name:
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
