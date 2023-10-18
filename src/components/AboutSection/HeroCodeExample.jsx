import { motion } from "framer-motion";
import { CodeExample } from "../shared";

const code = `class Jake {
    constructor() {
        this.name = "Jake";
        this.role = "Developer";
        this.skills = ["Frontend", "Backend"];
    }
}`;

function HeroCodeExample() {
  return (
    <motion.div
      whileHover={{ scale: 1.13, rotate: 0.5 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
    >
      <CodeExample code={code} withHeader={true} />
    </motion.div>
  );
}

export default HeroCodeExample;
