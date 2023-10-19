import { Section } from "../shared";
import HeroHeading from "./HeroHeading";
import HeroCodeExample from "./HeroCodeExample";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <Section>
      <div className={styles.hero}>
        <div>
          <HeroHeading />
        </div>
        <div>
          <HeroCodeExample />
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
