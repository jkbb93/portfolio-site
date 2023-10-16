import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [mediaMatches, setMediaMatches] = useState(
    window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleMediaChange = (event) => setMediaMatches(event.matches);

    mediaQueryList.addEventListener("change", handleMediaChange);
    return () =>
      mediaQueryList.removeEventListener("change", handleMediaChange);
  }, [query]);

  return mediaMatches;
}

export default useMediaQuery;
