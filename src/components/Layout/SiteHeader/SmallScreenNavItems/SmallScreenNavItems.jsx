import DarkModeToggler from "../DarkModeToggler";
import HeaderNavDrawerToggler from "./HeaderNavDrawerToggler";
import styles from "./SmallScreenNavItems.module.css";

function SmallScreenNavItems({
  onDrawerToggle: handleDrawerToggle,
  drawerOpen,
  togglerAriaControls,
}) {
  return (
    <div className={styles.items}>
      <DarkModeToggler />
      <HeaderNavDrawerToggler
        onClick={handleDrawerToggle}
        ariaExpanded={drawerOpen}
        ariaControls={togglerAriaControls}
      />
    </div>
  );
}

export default SmallScreenNavItems;
