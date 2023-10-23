import { Section, SectionHeading, ScrollToLink } from "../shared";
import profilePhoto from "./profile-photo.jpeg";
import styles from "./AboutSection.module.css";

function AboutSection() {
  return (
    <Section id="about">
      <div className={styles.layout}>
        <div className={styles["photo-container"]}>
          <div>
            <img
              src={profilePhoto}
              alt="Jake Betts, the author of this portfolio"
              className={styles["profile-photo"]}
            />
          </div>
        </div>
        <div className={styles["text-container"]}>
          <SectionHeading>About Me</SectionHeading>
          <div className={styles["main-text"]}>
            <p className={styles.paragraph}>
              I&apos;m a passionate Full Stack developer with a keen proficiency
              in technologies such as Javascript, React, Node.js, and more.
            </p>
            <p className={styles.paragraph}>
              My background sales has not only equipped me with a deep
              commercial awareness but has also a knack for understanding
              business needs, product requirements, and delivering impeccable
              user experiences.
            </p>
            <p className={styles.paragraph}>
              Beyond coding, I believe in creating solutions that are
              user-centric and detail-oriented. I pride myself on being
              personable, a trait which I&apos;ve found invaluable in my
              professional journey, allowing me to effectively collaborate with
              diverse teams and stakeholders.
            </p>
          </div>
          <ScrollToLink to="contact" className={styles.link}>
            Get in touch
          </ScrollToLink>
        </div>
      </div>
    </Section>
  );
}

export default AboutSection;
