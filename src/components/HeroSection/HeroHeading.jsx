import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HeroHeading.module.css";

function HeroHeading() {
  const [spanMinWidth, setSpanMinWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const ghostSpanRef = useRef(null);
  
  const technologies = ["Javascript", "React", "Node.js", "CSS", "HTML"];
  const cycleTime = 2000;

  // Cycle through technologies by setting a new index
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % technologies.length);
    }, cycleTime);

    return () => clearTimeout(timeout);
  }, [index]);

  /*
  ghostSpan below is a replica of the 'sliding-text' span,
  but it is filled with the longest-named technology as its
  text content. This is measured, and its width is used for 
  the sliding-text span's minWidth; this is so the sliding-text
  span has a consistent width so that it won't cause page content
  to shift when its text content is longer/shorter
  */
  useLayoutEffect(() => {
    if (!ghostSpanRef.current) return;

    const { width } = ghostSpanRef.current.getBoundingClientRect();

    setSpanMinWidth(width + 8);
  }, []);

  const getLongestTechnologyName = () => {
    let longest = "";

    technologies.forEach((technology) => {
      if (technology.length > longest.length) {
        longest = technology;
      }
    });

    return longest;
  };

  const ghostSpan = (
    <span
      ref={ghostSpanRef}
      className={`${styles["sliding-text"]} ${styles.ghost}`}
    >
      {getLongestTechnologyName()}
    </span>
  );

  return (
    <span className={styles.heading}>
      <h1>Full Stack Developer building cool stuff with </h1>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
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
      {ghostSpan}
    </span>
  );
}

export default HeroHeading;