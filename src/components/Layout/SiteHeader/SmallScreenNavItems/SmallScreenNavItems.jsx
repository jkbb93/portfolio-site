import DarkModeToggler from "../DarkModeToggler";
import HamburgerToggler from "./HamburgerToggler";
import styles from "./SmallScreenNavItems.module.css";

function SmallScreenNavItems({
  onDrawerToggle: handleDrawerToggle,
  drawerOpen,
  togglerAriaControls,
}) {
  return (
    <div className={styles.items}>
      <DarkModeToggler />
      <HamburgerToggler
        isToggled={drawerOpen}
        onClick={handleDrawerToggle}
        ariaControls={togglerAriaControls}
      />
    </div>
  );
}

export default SmallScreenNavItems;
