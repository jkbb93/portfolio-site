import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HeroHeading.module.css";

function HeroHeading() {
  const [index, setIndex] = useState(0);
  const technologies = ["Javascript", "React", "Node.js", "CSS", "HTML"];
  const cycleTime = 2000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % technologies.length);
    }, cycleTime);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <span>
      <h1 className={styles.heading}>
        Full Stack Developer building cool stuff with{" "}
      </h1>
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
        >
          {technologies[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default HeroHeading;
