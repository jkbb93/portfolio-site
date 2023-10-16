import { useState, useCallback, useEffect } from "react";

function useCopyToClipboard({ feedbackTimeout = 800 } = {}) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const copy = useCallback(async (text) => {
    try {
      setError(null);

      if (!navigator.clipboard) {
        throw new Error("Clipboard API not supported or not available");
      }

      if (typeof text !== "string") {
        throw new Error("Data passed to copy() must be of type string");
      }

      await navigator.clipboard.writeText(text);

      setSuccess(true);
    } catch (copyError) {
      setError(copyError);
      console.error(copyError);
    }
  }, []);

  useEffect(() => {
    if (!success) return;

    const timeout = setTimeout(() => {
      setSuccess(false);
    }, feedbackTimeout);

    return () => clearTimeout(timeout);
  }, [success, feedbackTimeout]);

  return { copy, success, error };
}

export default useCopyToClipboard;
