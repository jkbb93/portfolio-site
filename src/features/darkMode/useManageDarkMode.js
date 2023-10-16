import {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import { useMediaQuery } from "../../hooks";
import { manageLocalStorage } from "../../utils";

const { getStoredValue, updateStoredValue } = manageLocalStorage("darkMode");

function useManageDarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const [hasSetInitial, setHasSetInitial] = useState(false);
  const systemSetToDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const hasMountedRef = useRef(false);

  /*
    Set darkMode on initial render, before browser paints.
    Preferably by previously saved setting in localStorage but 
    otherwise by current user system setting. 
  */
  useLayoutEffect(() => {
    if (hasSetInitial) return;

    const storedSetting = getStoredValue();

    if (typeof storedSetting === "boolean") {
      setDarkMode(storedSetting);
    } else {
      setDarkMode(systemSetToDarkMode);
    }

    setHasSetInitial(true);
  }, [hasSetInitial, systemSetToDarkMode]);

  /*
    Listen for changes to system setting after first render -
    e.g. when user changes their system setting
  */
  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    setDarkMode(systemSetToDarkMode);
  }, [systemSetToDarkMode]);

  // Persist all setting changes to localStorage
  useEffect(() => {
    updateStoredValue(darkMode);
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => setDarkMode((prev) => !prev), []);

  return { darkMode, toggleDarkMode };
}

export default useManageDarkMode;
