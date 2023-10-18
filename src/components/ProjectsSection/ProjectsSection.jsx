import { Section, Card, SectionHeading } from "../shared";
import styles from "./ProjectsSection.module.css";

function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeading>Some Recent Projects</SectionHeading>
      <div className={styles.cards}>
        <Card className={styles.card}>1</Card>
        <Card className={styles.card}>2</Card>
        <Card className={styles.card}>3</Card>
      </div>
    </Section>
  );
}

export default ProjectsSection;
