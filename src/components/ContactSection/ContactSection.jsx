import { useRef } from "react";
import { Card, Section } from "../shared";
import ContactWidget from "./ContactWidget";
import styles from "./ContactSection.module.css";

function ContactSection() {
  const sectionRef = useRef(null);

  const resetScroll = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section ref={sectionRef} id="contact" className={styles.section}>
      <Card className={styles.card}>
        <ContactWidget onSubmit={resetScroll} />
      </Card>
    </Section>
  );
}

export default ContactSection;
