import useCopyToClipboard from "./useCopyToClipboard";
import {
  FaRegCopy as CopyIcon,
  FaXmark as XIcon,
  FaCheck as CheckIcon,
} from "react-icons/fa6";
import styles from "./CopyToClipboardControl.module.css";

/*
  Copies passed text to clipboard. 
  On success/error, shows a feedback message with configurable
  timeout, and direction in relation to button
*/

function CopyToClipboardControl({
  text,
  feedbackTimeout,
  feedbackOnRight = false,
}) {
  const { copy, success, error } = useCopyToClipboard({ feedbackTimeout });

  const handleCopy = () => copy(text);

  let icon = <CopyIcon />;
  if (success) icon = <CheckIcon />;
  if (error) icon = <XIcon />;

  return (
    <div
      className={styles.control}
      style={{
        flexDirection: feedbackOnRight ? "row-reverse" : "row",
      }}
    >
      <span>
        {success ? "Copied!" : ""}
        {error ? "Error!" : ""}
      </span>
      <button onClick={handleCopy}>{icon}</button>
    </div>
  );
}

export default CopyToClipboardControl;
