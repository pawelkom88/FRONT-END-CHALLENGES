import React from "react";
import { getAutocompleteResult } from "../helpers/functions";

export default function useFetch(debounceQuery) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const controller = new AbortController();

  React.useEffect(() => {
    const signal = controller.signal;

    (async function fetchData() {
      setData([]);
      setError(null);
      setLoading(true);
      if (debounceQuery) {
        try {
          const data = await getAutocompleteResult(debounceQuery, signal);
          setData(data);
        } catch (error) {
          setError(error.message);
        }
      }
      setLoading(false);

      return () => controller.abort("cancel request");
    })();
  }, [debounceQuery]);

  return { data, loading, error };
}
