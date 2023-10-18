import { motion } from "framer-motion";
import styles from "./Button.module.css";

function Button({ children, className = "", ...restProps }) {
  return (
    <motion.button
      whileHover={{ opacity: 0.8 }}
      transition={{ duration: 0.05 }}
      type="button"
      className={`${styles.button} ${className}`}
      {...restProps}
    >
      {children}
    </motion.button>
  );
}

export default Button;
