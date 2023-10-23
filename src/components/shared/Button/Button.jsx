import { motion } from "framer-motion";
import styles from "./Button.module.css";

function Button({
  children,
  className = "",
  type = "button",
  asLink = false,
  href = "",
  element,
  ...restProps
}) {
  if (asLink && href === "") {
    console.warn("Button component expects 'href' prop when asLink is true.");
  }

  const Element = asLink ? motion.a : motion.button;
  const elementProps = asLink ? { href } : { type };

  return (
    <Element
      {...elementProps}
      whileHover={{ opacity: 0.8 }}
      transition={{ duration: 0.05 }}
      className={`${styles.button} ${asLink ? styles.link : ""} ${className}`}
      {...restProps}
    >
      {children}
    </Element>
  );
}

export default Button;
