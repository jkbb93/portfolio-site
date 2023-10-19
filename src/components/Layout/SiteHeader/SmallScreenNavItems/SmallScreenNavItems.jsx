import DarkModeToggler from "../DarkModeToggler";
import HeaderNavDrawerToggler from "./HeaderNavDrawerToggler";
import styles from "./SmallScreenNavItems.module.css";

function SmallScreenNavItems({ onDrawerToggle: handleDrawerToggle }) {
  return (
    <div className={styles.items}>
      <DarkModeToggler />
      <HeaderNavDrawerToggler onClick={handleDrawerToggle} />
    </div>
  );
}

export default SmallScreenNavItems;
