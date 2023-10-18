import { Section, SectionHeading } from "../shared";
import styles from "./ContactSection.module.css";

function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(Object.fromEntries(formData));
  };

  return (
    <Section id="contact">
      <SectionHeading>Get In Touch</SectionHeading>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input}>
          <label>Name</label>
          <input name="name" type="text" />
        </div>
        <div className={styles.input}>
          <label>Email Address</label>
          <input name="email" type="email" />
        </div>
        <div className={styles.input}>
          <label>Message</label>
          <textarea name="message" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Section>
  );
}

export default ContactSection;
