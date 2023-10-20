import { useRef, useLayoutEffect } from "react";
import { Section } from "../shared";
import HeroHeading from "./HeroHeading";
import HeroCodeExample from "./HeroCodeExample";
import styles from "./HeroSection.module.css";
import techImg from "./Transparentbggraphic.png";

function HeroSection() {
  // const codeExampleRef = useRef(null);
  // const containerRef = useRef(null);

  // useLayoutEffect(() => {
  //   const handleScale = () => {
  //   const containerWidth = containerRef.current.offsetWidth;
  //   const elementWidth = codeExampleRef.current.offsetWidth;

  //   const scaleFactor = containerWidth / elementWidth;
  //   console.log(scaleFactor);
  //   codeExampleRef.current.style.transform = `scale(${scaleFactor}) !important`;
  //   };

  //   handleScale();

  //   window.addEventListener("resize", handleScale);
  //   return () => window.removeEventListener("resize", handleScale);
  // }, []);

  return (
    <Section>
      <div className={styles.hero}>
        <div>
          <HeroHeading />
        </div>
        <div
          // ref={containerRef}
          style={{
            // position: "relative",
            // height: "400px",
            // display: "flex",
            // justifyContent: "center",
          }}
        >
          <img src={techImg} style={{width: "100%"}} />
          {/* <HeroCodeExample codeExampleRef={codeExampleRef} /> */}
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
