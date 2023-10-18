import { Card, Section } from "../shared";
import ContactWidget from "./ContactWidget";
import styles from "./ContactSection.module.css";

function ContactSection() {
  return (
    <Section id="contact">
      <Card className={styles.card}>
        <ContactWidget />
      </Card>
    </Section>
  );
}

export default ContactSection;
