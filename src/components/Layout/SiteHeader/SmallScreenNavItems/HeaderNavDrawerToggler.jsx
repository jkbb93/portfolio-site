import { FaBars as HamburgerIcon } from "react-icons/fa6";
import styles from "./HeaderNavDrawerToggler.module.css";

function HeaderNavDrawerToggler({ onClick: handleClick }) {
  return (
    <button type="button" onClick={handleClick} className={styles.toggler}>
      <HamburgerIcon />
    </button>
  );
}

export default HeaderNavDrawerToggler;
