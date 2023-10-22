import { Section } from "../shared";
import styles from "./AboutSection.module.css";
import HeroCodeExample from "./HeroCodeExample";
import HeroHeading from "./HeroHeading3";

function AboutSection() {
  return (
    <Section id="about" className={styles.section}>
      <div className={styles.hero}>
        <HeroHeading />
        <HeroCodeExample />
      </div>
    </Section>
  );
}

export default AboutSection;
