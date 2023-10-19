import { motion } from "framer-motion";
import { ScrollToLink } from "../../../shared";
import styles from "./HeaderLogo.module.css";

function HeaderLogo({ onClick: handleClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: -2 }}
      transition={{ type: "spring", stiffness: 500, damping: 17 }}
      className={`${styles.logo}`}
    >
      <ScrollToLink
        to={{ x: 0, y: 0 }}
        onClick={handleClick}
        className={styles.link}
      >
        Jake Betts
      </ScrollToLink>
    </motion.div>
  );
}

export default HeaderLogo;
