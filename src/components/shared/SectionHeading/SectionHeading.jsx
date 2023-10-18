import styles from "./SectionHeading.module.css";

function SectionHeading({ children, className = "", ...restProps }) {
  return (
    <h1 className={`${styles.heading} ${className}`} {...restProps}>
      {children}
    </h1>
  );
}

export default SectionHeading;
