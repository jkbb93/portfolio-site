import { motion } from "framer-motion";
import { FaRegSun, FaRegMoon } from "react-icons/fa6";
import { useDarkMode } from "../../../features/darkMode";
import styles from "./DarkModeToggler.module.css";

function DarkModeToggler() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <motion.button
      className={styles.toggler}
      style={{ color: darkMode ? "#ffffff" : "inherit" }}
      onClick={toggleDarkMode}
      whileHover={{scale: 1.15}}
      transition={{type: "spring", stiffness: 500, damping: 20}}
    >
      {darkMode && <FaRegSun />}
      {!darkMode && <FaRegMoon />}
    </motion.button>
  );
}

export default DarkModeToggler;
