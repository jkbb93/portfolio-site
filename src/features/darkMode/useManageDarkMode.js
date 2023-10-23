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
  const systemSetToDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const hasSetInitialRef = useRef(false);
  const isInitialRenderRef = useRef(true);
  const prevSystemSettingRef = useRef(systemSetToDarkMode);

  /*
    Set darkMode on initial render, before browser paints.
    Preferably by previously saved setting in localStorage but 
    otherwise leave set to true as default
  */
  useLayoutEffect(() => {
    if (hasSetInitialRef.current) return;

    const storedSetting = getStoredValue();

    if (typeof storedSetting === "boolean") {
      setDarkMode(storedSetting);
    }

    hasSetInitialRef.current = true;
  }, [systemSetToDarkMode]);

  /*
    Listen for changes to system setting after first render -
    e.g. when user changes their system setting
  */
  useEffect(() => {
    if (isInitialRenderRef.current) {
      isInitialRenderRef.current = false;
      return;
    }

    if (systemSetToDarkMode !== prevSystemSettingRef.current) {
      setDarkMode(systemSetToDarkMode);
      prevSystemSettingRef.current = systemSetToDarkMode;
    }
  }, [systemSetToDarkMode]);

  // Persist all setting changes to localStorage
  useEffect(() => {
    updateStoredValue(darkMode);
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => setDarkMode((prev) => !prev), []);

  return { darkMode, toggleDarkMode };
}

export default useManageDarkMode;
