import { Section, Card, SectionHeading } from "../shared";
import { FaRoadBarrier as BarrierIcon } from "react-icons/fa6";
import skysearcherImage from "./skysearcher.png";
import styles from "./ProjectsSection.module.css";

function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeading>Some Recent Projects</SectionHeading>
      <div className={styles.cards}>
        <Card className={styles.card}>
          <BarrierIcon />
          <h2>Under Construction</h2>
        </Card>
        {/* <Card>
          <img
            src={skysearcherImage}
            alt=""
            style={{ width: "400px", borderRadius: "4px" }}
          />
        </Card> */}
        {/* <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card> */}
      </div>
    </Section>
  );
}

export default ProjectsSection;
