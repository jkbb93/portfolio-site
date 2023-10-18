import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ScrollToLink } from "../../../shared";
import styles from "./HeaderLogo.module.css";

function HeaderLogo() {
  // const [hovered, setHovered] = useState("hovered");
  // const [icon, setIcon] = useState("thumb");

  // const switchIcon = () =>
  //   setIcon((prev) => (prev === "thumb" ? "bicep" : "thumb"));

  // const handleMouseEnter = () => {
  //   setHovered(true);
  // }

  // const handleMouseLeave = (event) => {
  //   const timeout = setTimeout(() => {
  //     setHovered(false);
  //     clearTimeout(timeout);
  //   }, 200);
  // };

  // useEffect(() => {
  //   if (!hovered) switchIcon();
  // }, [hovered]);

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: -2 }}
      transition={{ type: "spring", stiffness: 500, damping: 17 }}
      className={`${styles.logo}` /*${hovered ? styles.hovered : ""} ${
        styles[icon]
      }*/}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <ScrollToLink to={{ x: 0, y: 0 }} className={styles.link}>
        Jake Betts
      </ScrollToLink>
    </motion.div>
  );
}

export default HeaderLogo;
