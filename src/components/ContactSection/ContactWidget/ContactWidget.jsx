import { useState } from "react";
import ContactForm from "./ContactForm";
import FormFeedbackOverlay from "./FormFeedbackOverlay";
import useForm from "../useForm";
import styles from "./ContactWidget.module.css";

function ContactWidget() {
  const statuses = {
    idle: "idle",
    loading: "loading",
    success: "success",
    error: "error",
  };
  const [status, setStatus] = useState(statuses.idle);

  const { values, handleChange, clearForm } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setStatus(statuses.loading);

      const formData = {
        "form-name": "contact", // For Netlify Forms
        ...values
      };

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus(statuses.success);
    } catch (submissionError) {
      setStatus(statuses.error);
      console.error(submissionError);
    }
  };

  const handleConfirmSuccess = () => {
    clearForm();
    setStatus(statuses.idle);
  };

  const handleDismiss = () => setStatus(statuses.idle);

  return (
    <div className={styles.widget}>
      <div
        className={styles["form-view"]}
        style={{ visibility: status === statuses.idle ? "visible" : "hidden" }}
      >
        <h1 className={styles.heading}>Get In Touch</h1>
        <p>Want to ask me something? Let's chat!</p>
        <ContactForm
          values={values}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
      <FormFeedbackOverlay
        onConfirmSuccess={handleConfirmSuccess}
        onDismiss={handleDismiss}
        status={status}
      />
    </div>
  );
}

export default ContactWidget;
