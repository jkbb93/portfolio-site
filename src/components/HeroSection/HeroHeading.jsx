import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HeroHeading.module.css";

function HeroHeading() {
  const [shouldRun, setShouldRun] = useState(true);
  const [spanMinWidth, setSpanMinWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const ghostSpanRef = useRef(null);

  const technologies = ["Javascript", "React", "Node.js", "CSS", "HTML"];
  const numberOfTechnologies = technologies.length;

  // Cycle through technologies by setting a new index every X milliseconds
  useEffect(() => {
    if (!shouldRun) return;
    const cycleTime = 2000;

    const timeout = setTimeout(() => {
      // Increment index, but wrap to number of technologies
      setIndex((prev) => (prev + 1) % numberOfTechnologies);
    }, cycleTime);

    return () => clearTimeout(timeout);
  }, [shouldRun, index, numberOfTechnologies]);

  /*
   Stop running when document not visible - e.g. browser tab switches,
   then restart when document is visible again. 
   This is to solve glitches caused by browser optimisations affecting
   timeout when the document is not visible.
   */
  useEffect(() => {
    const handleDocumentVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setShouldRun(true);
      } else {
        setShouldRun(false);
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleDocumentVisibilityChange
    );
    return () =>
      document.removeEventListener(
        "visibilitychange",
        handleDocumentVisibilityChange
      );
  }, []);

  /*
  ghostSpan below is a replica of the 'sliding-text' span,
  but it is filled with the longest-named technology as its
  text content. This is measured, and its width is used for 
  the sliding-text span's minWidth; this is so that the sliding-text
  span has a consistent width, and won't cause page content
  to shift when its text content is longer/shorter
  */
  useLayoutEffect(() => {
    if (!ghostSpanRef.current) return;

    const { width } = ghostSpanRef.current.getBoundingClientRect();
    const extraWidth = 8; // Adds a little extra to account for letter spacing, etc.

    setSpanMinWidth(width + extraWidth);
  }, []);

  const longestTechnologyName = technologies.reduce(
    (longestSoFar, technology) =>
      technology.length > longestSoFar.length ? technology : longestSoFar
  );

  return (
    <span className={styles.heading}>
      <h1>Full Stack Developer building cool stuff with </h1>
      <AnimatePresence mode="wait">
        <motion.span
          key={technologies[index]}
          initial={{
            opacity: 0,
            y: 0,
            filter: "blur(0px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.1 },
          }}
          exit={{
            opacity: 0,
            y: 2,
            filter: "blur(1px)",
            transition: { duration: 0.5 },
          }}
          className={styles["sliding-text"]}
          style={{ minWidth: `${spanMinWidth}px` }}
        >
          {technologies[index]}
        </motion.span>
      </AnimatePresence>
      <span
        ref={ghostSpanRef}
        className={`${styles["sliding-text"]} ${styles.ghost}`}
      >
        {longestTechnologyName}
      </span>
    </span>
  );
}

export default HeroHeading;
