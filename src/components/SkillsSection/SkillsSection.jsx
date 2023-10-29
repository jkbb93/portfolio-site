import { motion } from "framer-motion";
import { FaTerminal as CommandLineIcon } from "react-icons/fa";
import {
  JSIcon,
  NodeIcon,
  ExpressIcon,
  ReactIcon,
  NextIcon,
  ReduxIcon,
  HTMLIcon,
  CSSIcon,
  GitIcon,
  TypeScriptIcon,
  TailwindIcon,
} from "../../assets/icons";
import { Section, SectionHeading } from "../shared";
import styles from "./SkillsSection.module.css";

function SkillsSection() {
  const iconData = [
    { label: "JavaScript", icon: <JSIcon /> },
    { label: "TypeScript", icon: <TypeScriptIcon /> },
    { label: "Node.js", icon: <NodeIcon /> },
    { label: "Express", icon: <ExpressIcon /> },
    { label: "React", icon: <ReactIcon /> },
    { label: "Next.js", icon: <NextIcon /> },
    { label: "Redux", icon: <ReduxIcon /> },
    { label: "Tailwind CSS", icon: <TailwindIcon /> },
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
