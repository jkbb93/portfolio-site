import { motion } from "framer-motion";
import { ScrollToLink } from "../../shared";
import styles from "./HeaderLogo.module.css";

function HeaderLogo() {
  return (
    <motion.span
      whileHover={{ scale: 1.05, rotate: -1 }}
      transition={{ type: "spring", stiffness: 500, damping: 17 }}
      className={styles.logo}
    >
      <ScrollToLink to="hehe">Jake Betts</ScrollToLink>
    </motion.span>
  );
}

export default HeaderLogo;
