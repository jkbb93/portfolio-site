import { motion } from "framer-motion";
import { Section, SectionHeading } from "../shared";
import {
  JSIcon,
  ReactIcon,
  NodeIcon,
  HTMLIcon,
  CSSIcon,
  GitIcon,
} from "./icons";
import styles from "./SkillsSection.module.css";

function SkillsSection() {
  const iconData = [
    { label: "Javascript", icon: <JSIcon /> },
    { label: "React", icon: <ReactIcon /> },
    { label: "Node.js", icon: <NodeIcon /> },
    { label: "HTML", icon: <HTMLIcon /> },
    { label: "CSS", icon: <CSSIcon /> },
    { label: "Git", icon: <GitIcon /> },
  ];

  const icons = iconData.map((data) => (
    <motion.div
      key={data.label}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      className={styles.icon}
    >
      {data.icon}
      <span>{data.label}</span>
    </motion.div>
  ));

  return (
    <Section id="skills">
      <SectionHeading className={styles.heading}>Skills</SectionHeading>
      <div className={styles["icons-wrapper"]}>{icons}</div>
    </Section>
  );
}

export default SkillsSection;
