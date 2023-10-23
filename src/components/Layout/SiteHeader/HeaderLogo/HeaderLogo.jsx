import { motion } from "framer-motion";
import { useNavLinks } from "../../../../features/navLinks";
import { ScrollToLink } from "../../../shared";
import styles from "./HeaderLogo.module.css";

function HeaderLogo({ onClick: handleClick }) {
  const { setActiveAnchor } = useNavLinks();

  const updateActiveAnchor = ({ isActive, href }) => {
    if (isActive) setActiveAnchor(href);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: -2 }}
      transition={{ type: "spring", stiffness: 500, damping: 17 }}
      className={`${styles.logo}`}
    >
      <ScrollToLink
        to="home"
        onClick={handleClick}
        onActiveChange={updateActiveAnchor}
        className={styles.link}
      >
        Jake Betts
      </ScrollToLink>
    </motion.div>
  );
}

export default HeaderLogo;
