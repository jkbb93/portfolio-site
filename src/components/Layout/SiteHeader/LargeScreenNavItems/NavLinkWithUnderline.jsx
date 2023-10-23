import { useState } from "react";
import { motion } from "framer-motion";
import { useNavLinks } from "../../../../features/navLinks";
import { ScrollToLink } from "../../../shared";
import styles from "./NavLinkWithUnderline.module.css";

function NavLinkWithUnderline({ children, to }) {
  const [isHovered, setIsHovered] = useState(false);
  const { activeAnchor, setActiveAnchor } = useNavLinks();

  const updateActiveAnchor = ({ isActive, href }) => {
    if (isActive) {
      setActiveAnchor(href);
    }
  };

  const shouldUnderline = activeAnchor === `#${to}` || isHovered;

  return (
    <ScrollToLink
      to={to}
      className={styles.link}
      onActiveChange={updateActiveAnchor}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>
        {children}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: shouldUnderline ? 1 : 0,
            transition: { duration: shouldUnderline ? 0.12 : 0.08 },
          }}
          className={styles.underline}
        />
      </span>
    </ScrollToLink>
  );
}

export default NavLinkWithUnderline;
