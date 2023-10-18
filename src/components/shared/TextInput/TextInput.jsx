import { forwardRef } from "react";
import styles from "./TextInput.module.css";

const TextInput = forwardRef(function TextInput(
  { type: passedType = "text", className = "", ...restProps },
  passedRef
) {
  // If passedType is one of allowed, use it, otherwise use "text"
  const allowedTypes = ["text", "email", "password", "textarea"];
  const type = allowedTypes.includes(passedType) ? passedType : "text";

  // Use a textarea HTML element if passed type was "textarea", else use HTML input element
  const Element = type === "textarea" ? "textarea" : "input";

  const baseClass = styles["text-input"];
  const textareaClass = type === "textarea" ? styles.textarea : "";

  return (
    <Element
      ref={passedRef}
      type={type !== "textarea" ? type : null}
      className={`${baseClass} ${textareaClass} ${className}`}
      {...restProps}
    />
  );
});

export default TextInput;
