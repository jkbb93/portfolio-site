import { useContext } from "react";
import DarkModeContext from "./DarkModeContext";

function useDarkMode() {
  const context = useContext(DarkModeContext);
  return context;
}

export default useDarkMode;
