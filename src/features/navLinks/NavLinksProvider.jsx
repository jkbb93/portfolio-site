import { useState } from "react";
import NavLinksContext from "./NavLinksContext";

function NavLinksProvider({ children }) {
  const [activeAnchor, setActiveAnchor] = useState("");

  const contextValue = { activeAnchor, setActiveAnchor };

  return (
    <NavLinksContext.Provider value={contextValue}>
      {children}
    </NavLinksContext.Provider>
  );
}

export default NavLinksProvider;
