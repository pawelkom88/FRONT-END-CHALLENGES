import { useState } from "react";

export default function TogglePage() {
  let [isOn, setIsOn] = useState(true);

  return (
    <div className="flex items-center mt-10 w-56 mx-auto">
      <button
        onClick={() => setIsOn((current) => !current)}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
      >
        Toggle
      </button>
      <div className="text-4xl">
        <div className={isOn ? "" : "grayscale"}>💡</div>
      </div>
      <div>{isOn ? "It's on!" : "It's off"}</div>
    </div>
  );
}
