import { Section } from "../shared";
import HeroHeading from "./HeroHeading";
import HeroCodeExample from "./HeroCodeExample";
import styles from "./HeroSection.module.css";
import techImg from "./Transparentbggraphic.png";

function HeroSection() {
  return (
    <Section id="home">
      <div className={styles.hero}>
        <div>
          <HeroHeading />
        </div>
        <div
          style={{
            position: "relative",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <HeroCodeExample /> */}
          <img
            src={techImg}
            alt="A desktop computer, tablet, and mobile showing abstract code"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
