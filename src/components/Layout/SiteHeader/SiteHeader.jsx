import { useRef, useState, useLayoutEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../../../hooks";
import HeaderLogo from "./HeaderLogo";
import LargeScreenNavItems from "./LargeScreenNavItems";
import SmallScreenNavItems from "./SmallScreenNavItems";
import HeaderNavDrawer from "./HeaderNavDrawer";
import styles from "./SiteHeader.module.css";

function SiteHeader() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState("0px");
  const headerRef = useRef(null);

  /*
  Get headerHeight to use for scroll padding (below), and to calculate
  HeaderNavDrawer position and height
  */
  useLayoutEffect(() => {
    if (!headerRef.current) return;

    const updateHeaderHeight = () => {
      const { height } = headerRef.current.getBoundingClientRect();
      setHeaderHeight(`${height}px`);
    };

    updateHeaderHeight();

    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  /*
  Header is sticky - adding scrollPadding equivalent to the header height
  so that elements aren't covered by sticky header when scrolled to
  via scrollIntoView 
  */
  useLayoutEffect(() => {
    const html = document.querySelector("html");
    html.style.scrollPaddingTop = headerHeight;
  }, [headerHeight]);

  const handleDrawerToggle = () => setDrawerOpen((prev) => !prev);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <>
      <header ref={headerRef} className={styles.header}>
        <nav className={styles.nav}>
          <HeaderLogo onClick={handleDrawerClose} />
          {isLargeScreen ? (
            <LargeScreenNavItems />
          ) : (
            <SmallScreenNavItems onDrawerToggle={handleDrawerToggle} />
          )}
        </nav>
      </header>
      {!isLargeScreen && (
        <AnimatePresence>
          {drawerOpen && (
            <HeaderNavDrawer
              positionTop={headerHeight}
              onClose={handleDrawerClose}
            />
          )}
        </AnimatePresence>
      )}
    </>
  );
}

export default SiteHeader;
