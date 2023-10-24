import { motion } from "framer-motion";
import styles from "./IconLink.module.css";

function IconLink({
  children,
  href,
  motionProps,
  className = "",
  style,
  ...restProps
}) {
  return (
    <motion.a
      href={href}
      {...motionProps}
      className={`${styles.link} ${className}`}
      style={style}
      {...restProps}
    >
      {children}
    </motion.a>
  );
}

export default IconLink;
