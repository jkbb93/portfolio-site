import HeaderLogo from "./HeaderLogo";
import DarkModeToggler from "./DarkModeToggler";
import styles from "./SiteHeader.module.css";
import { ThemeableContainer } from "../../shared";

function SiteHeader() {
  return (
    <ThemeableContainer id="header" element="header" className={styles.header}>
      <nav>
        <HeaderLogo />
        <DarkModeToggler />
      </nav>
    </ThemeableContainer>
  );
}

export default SiteHeader;
