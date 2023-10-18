import { useState, useCallback } from "react";
import { useIntersectionObserver } from "../../../hooks";
import styles from "./Section.module.css";

/*
  Page section with animated entry using IntersectionObserver
*/

function Section({ children, className = "", ...restProps }) {
  const [inView, setInView] = useState(false);

  const callback = useCallback((entries) => {
    const { isIntersecting } = entries[0];
    setInView(isIntersecting);
  }, []);

  const { setElement, notSupported } = useIntersectionObserver({
    callback,
    options: {
      threshold: 0.3,
    },
  });

  return (
    <section
      ref={setElement}
      className={`${styles.section} ${className}`}
      {...restProps}
    >
      <div
        className={`${styles.content} ${
          inView || notSupported ? styles["in-view"] : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
}

export default Section;
