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
          // ref={containerRef}
          style={
            {
              // position: "relative",
              // height: "400px",
              // display: "flex",
              // justifyContent: "center",
            }
          }
        >
          <img src={techImg} style={{ width: "100%" }} alt="" />
          {/* <HeroCodeExample codeExampleRef={codeExampleRef} /> */}
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
