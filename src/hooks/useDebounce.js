import React from "react";

export default function useDebounce(value, time = 300) {
  const [debounceVal, setDebounceVal] = React.useState(value);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceVal(value);
    }, time);

    return () => clearTimeout(timeout);
  }, [value, time]);

  return debounceVal;
}
