import { useContext } from "react";
import NavLinksContext from "./NavLinksContext";

function useNavLinks() {
  const context = useContext(NavLinksContext);
  return context;
}

export default useNavLinks;
