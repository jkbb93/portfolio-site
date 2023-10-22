import { motion } from "framer-motion";
import { FaTerminal as CommandLineIcon } from "react-icons/fa";
import {
  JSIcon,
  ReactIcon,
  NodeIcon,
  ReduxIcon,
  HTMLIcon,
  CSSIcon,
  GitIcon,
} from "../../assets/icons";
import { Section, SectionHeading } from "../shared";
import styles from "./SkillsSection.module.css";

function SkillsSection() {
  const iconData = [
    { label: "Javascript", icon: <JSIcon /> },
    { label: "Node.js", icon: <NodeIcon /> },
    { label: "React", icon: <ReactIcon /> },
    { label: "Redux", icon: <ReduxIcon /> },
    { label: "HTML5", icon: <HTMLIcon /> },
    { label: "CSS3", icon: <CSSIcon /> },
    { label: "Git", icon: <GitIcon /> },
    { label: "Command Line", icon: <CommandLineIcon /> },
  ];

  const icons = iconData.map((data) => (
    <motion.li
      key={data.label}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      className={styles.icon}
    >
      {data.icon}
      <span>{data.label}</span>
    </motion.li>
  ));

  return (
    <Section id="skills">
      <SectionHeading className={styles.heading}>Skills</SectionHeading>
      <ul className={styles["icon-list"]}>{icons}</ul>
    </Section>
  );
}

export default SkillsSection;
