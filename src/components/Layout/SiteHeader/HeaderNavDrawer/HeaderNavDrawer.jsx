import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import NavDrawerLinks from "./NavDrawerLinks";
import HeaderIconLinks from "../HeaderIconLinks";
import styles from "./HeaderNavDrawer.module.css";

function HeaderNavDrawer({ positionTop = "0px", onClose: handleClose }) {
  // Disable scroll on body while component is rendered
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);

  const closedAnimationState = { opacity: 0, y: "-120px", filter: "blur(3px)" };
  const openAnimationState = { opacity: 1, y: "0px", filter: "blur(0px)" };

  const component = (
    <motion.div
      initial={closedAnimationState}
      animate={openAnimationState}
      exit={closedAnimationState}
      transition={{ duration: 0.15 }}
      className={styles.drawer}
      style={{
        top: positionTop,
        height: `calc(100% - ${positionTop})`,
      }}
    >
      <NavDrawerLinks onLinkClick={handleClose} />
      <div className={styles["icon-links"]}>
        <HeaderIconLinks />
      </div>
    </motion.div>
  );

  return createPortal(component, document.body);
}

export default HeaderNavDrawer;
