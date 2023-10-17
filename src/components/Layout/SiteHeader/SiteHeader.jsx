import HeaderLogo from "./HeaderLogo";
import NavLinks from "./NavLinks";
import HeaderIconLinks from "./HeaderIconLinks";
import DarkModeToggler from "./DarkModeToggler";
import styles from "./SiteHeader.module.css";
import { useLayoutEffect, useRef } from "react";

function SiteHeader() {
  const headerRef = useRef(null);

  /*
   Set html element's scrollPaddingTop to header height, because 
   using a sticky-positioned header and need to scroll elements 
   into view; without setting scroll padding, elements will be 
   covered by sticky header
   */
  useLayoutEffect(() => {
    if (!headerRef.current) return;

    const setHTMLScrollPadding = () => {
      const { height } = headerRef.current.getBoundingClientRect();

      const html = document.querySelector("html");
      html.style.scrollPaddingTop = `${height}px`;
    };

    setHTMLScrollPadding();

    window.addEventListener("resize", setHTMLScrollPadding);
    return () => window.removeEventListener("resize", setHTMLScrollPadding);
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <nav>
        <HeaderLogo />
        <NavLinks />
        <HeaderIconLinks />
        <DarkModeToggler />
      </nav>
    </header>
  );
}

export default SiteHeader;
