import { useId } from "react";
import { TextInput, Button } from "../../shared";
import styles from "./ContactForm.module.css";

function ContactForm({
  values,
  onChange: handleChange,
  onSubmit: handleSubmit,
}) {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["input-slot"]}>
        <label htmlFor={nameId}>Name</label>
        <TextInput
          id={nameId}
          name="name"
          type="text"
          placeholder="Your name"
          required={true}
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles["input-slot"]}>
        <label htmlFor={emailId}>Email Address</label>
        <TextInput
          id={emailId}
          name="email"
          type="email"
          placeholder="example@email.com"
          required={true}
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles["input-slot"]}>
        <label htmlFor={messageId}>Message</label>
        <TextInput
          id={messageId}
          name="message"
          type="textarea"
          rows="5"
          placeholder="What's up?"
          required={true}
          value={values.message}
          onChange={handleChange}
        />
        <input type="hidden" name="form-name" value="contact" />
      </div>
      <Button type="submit" className={styles.button}>
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;
