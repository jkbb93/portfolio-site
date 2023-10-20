import { useState, useEffect, useCallback } from "react";

function useIntersectionObserver({
  callback,
  options = { root: null, threshold: 0 },
}) {
  const [elementNode, setElementNode] = useState(null);
  const [notSupported, setNotSupported] = useState(false);

  useEffect(() => {
    const isSupported = "IntersectionObserver" in window;
    const hasCallback = typeof callback === "function";

    if (!isSupported) {
      console.warn("IntersectionObserver not supported or not available");
      setNotSupported(true);
      return;
    }

    if (!hasCallback) {
      console.warn("No callback provided for useIntersectionObserver");
      return;
    }

    if (!elementNode) {
      return;
    }

    const observer = new IntersectionObserver(callback, options);
    observer.observe(elementNode);

    return () => observer.disconnect();
  }, [callback, options, elementNode]);

  const updateElementNode = useCallback((node) => {
    if (node instanceof Node || node === null) {
      setElementNode(node);
    } else {
      console.warn(
        "setElement from useIntersectionObserver must receive a valid DOM Node, or null, as its argument"
      );
    }
  }, []);

  return { setElement: updateElementNode, notSupported };
}

export default useIntersectionObserver;
