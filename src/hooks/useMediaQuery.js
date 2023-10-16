import { useSyncExternalStore, useCallback } from "react";

function useMediaQuery(query) {
  const subscribe = useCallback(
    (callback) => {
      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener("change", callback);

      return () => mediaQueryList.removeEventListener("change", callback);
    },
    [query]
  );

  const getSnapshot = useCallback(() => {
    return window.matchMedia(query).matches;
  }, [query]);

  const mediaMatches = useSyncExternalStore(subscribe, getSnapshot);

  return mediaMatches;
}

export default useMediaQuery;
