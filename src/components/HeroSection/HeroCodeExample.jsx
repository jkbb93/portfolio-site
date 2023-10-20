import { motion } from "framer-motion";
import { CodeExample } from "../shared";
import styles from "./HeroCodeExample.module.css";

const code = `class Jake {
    constructor() {
        this.name = "Jake";
        this.role = "Developer";
        this.skills = ["Frontend", "Backend"];
    }
}`;

function HeroCodeExample({ codeExampleRef }) {
  return (
    <motion.div
      ref={codeExampleRef}
      whileHover={{ scale: 1.14, rotate: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      className={styles["code-example"]}
    >
      <CodeExample code={code} withHeader={true} />
    </motion.div>
  );
}

export default HeroCodeExample;
