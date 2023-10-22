import { FaBars as HamburgerIcon } from "react-icons/fa6";
import styles from "./HeaderNavDrawerToggler.module.css";

function HeaderNavDrawerToggler({
  onClick: handleClick,
  ariaControls = "",
  ariaExpanded = false,
}) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles.toggler}
      aria-haspopup={true}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-label="Toggle navigation menu"
    >
      <HamburgerIcon />
    </button>
  );
}

export default HeaderNavDrawerToggler;
