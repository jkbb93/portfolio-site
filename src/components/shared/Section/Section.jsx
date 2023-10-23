import { forwardRef, useState, useCallback, useEffect } from "react";
import { useIntersectionObserver } from "../../../hooks";
import styles from "./Section.module.css";

/*
  Page section with animated entry using IntersectionObserver
*/

const Section = forwardRef(function Section(
  { children, id, className = "", ...restProps },
  passedRef
) {
  const [inView, setInView] = useState(false);

  // useEffect(() => {
  //   if (!inView) return;

  //   const oldURL = window.location.href;

  //   const timeout = setTimeout(() => {
  //     const href = `#${id}`;

  //     window.history.pushState(null, "", href);

  //     window.dispatchEvent(
  //       new HashChangeEvent("hashchange", {
  //         oldURL,
  //         newURL: window.location.href,
  //       })
  //     );
  //   }, 600);

  //   return () => clearTimeout(timeout);
  // }, [inView, id]);

  const callback = useCallback((entries) => {
    const { isIntersecting } = entries[0];
    if (isIntersecting) {
      setInView(true);
    }
  }, []);

  const { setElement, notSupported } = useIntersectionObserver({
    callback,
    options: {
      threshold: 0,
    },
  });

  const assignRefs = (node) => {
    setElement(node);

    if (passedRef && typeof passedRef === "object") {
      passedRef.current = node;
    }
  };

  return (
    <section
      ref={assignRefs}
      id={id}
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
});

export default Section;
