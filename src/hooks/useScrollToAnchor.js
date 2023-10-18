import { useEffect } from "react";

/*
  If URL contains anchor when app loads, scroll to corresponding element
*/

function useScrollToAnchor() {
  useEffect(() => {
    const { hash } = window.location;

    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
}

export default useScrollToAnchor;
