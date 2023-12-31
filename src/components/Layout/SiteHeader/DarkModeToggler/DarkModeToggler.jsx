import { motion } from "framer-motion";
import {
  FaRegLightbulb as LightIcon,
  FaRegMoon as DarkIcon,
} from "react-icons/fa6";
import { useDarkMode } from "../../../../features/darkMode";
import styles from "./DarkModeToggler.module.css";

function DarkModeToggler() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      className={styles.toggler}
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
    >
      {darkMode && <LightIcon />}
      {!darkMode && <DarkIcon />}
    </motion.button>
  );
}

export default DarkModeToggler;
