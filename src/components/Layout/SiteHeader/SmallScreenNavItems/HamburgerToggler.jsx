import { motion } from "framer-motion";
import styles from "./HamburgerToggler.module.css";

function HamburgerToggler({
  isToggled,
  onClick: handleClick,
  ariaControls = "",
  ...restProps
}) {
  return (
    <button
      type="button"
      aria-expanded={isToggled}
      aria-controls={ariaControls}
      aria-haspopup={true}
      onClick={handleClick}
      className={styles.toggler}
      {...restProps}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          x1="2"
          y1="5"
          x2={isToggled ? "33" : "30"}
          y2="5"
          animate={{
            rotate: isToggled ? 45 : 0,
            x: isToggled ? 3 : 0,
          }}
          transition={{ duration: 0.1 }}
          strokeWidth="4"
          strokeLinecap="round"
          style={{ originX: 0, originY: 0.5 }}
        />
        <motion.line
          x1="2"
          y1="16"
          x2="30"
          y2="16"
          animate={{
            opacity: isToggled ? 0 : 1,
            pathLength: isToggled ? 0 : 1,
            transition: {
              opacity: { duration: 0.15 },
              pathLength: { duration: 0.17 },
            },
          }}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <motion.line
          x1="2"
          y1="27"
          x2={isToggled ? "33" : "30"}
          y2="27"
          animate={{
            rotate: isToggled ? -45 : 0,
            x: isToggled ? 3 : 0,
          }}
          transition={{ duration: 0.1 }}
          strokeWidth="4"
          strokeLinecap="round"
          style={{ originX: 0, originY: 0.5 }}
        />
      </svg>
    </button>
  );
}

export default HamburgerToggler;
