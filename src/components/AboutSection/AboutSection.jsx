import { Section, Card, SectionHeading } from "../shared";
import { FaRoadBarrier as BarrierIcon } from "react-icons/fa6";
import styles from "./AboutSection.module.css";

function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading>About Me</SectionHeading>
      <div className={styles.cards}>
        <Card className={styles.card}>
          <BarrierIcon />
          <h2>Under Construction</h2>
        </Card>
      </div>
    </Section>
  );
}

export default AboutSection;
