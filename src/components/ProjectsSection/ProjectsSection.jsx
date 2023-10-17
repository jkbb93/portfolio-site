import { Card } from "../shared";
import styles from "./ProjectsSection.module.css";

function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <h1>Some Recent Projects</h1>
      <div className={styles.cards}>
        <Card className={styles.card}>1</Card>
        <Card className={styles.card}>2</Card>
        <Card className={styles.card}>3</Card>
      </div>
    </section>
  );
}

export default ProjectsSection;
