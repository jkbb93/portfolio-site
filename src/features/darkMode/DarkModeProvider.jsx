import DarkModeContext from "./DarkModeContext";
import useManageDarkMode from "./useManageDarkMode";

function DarkModeProvider({ children }) {
  const contextValue = useManageDarkMode();

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;
