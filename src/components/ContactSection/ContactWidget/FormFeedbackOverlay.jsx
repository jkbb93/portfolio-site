import { Button } from "../../shared";
import { RotatingLines } from "react-loader-spinner";
import {
  FaRegCircleCheck as CircleCheckIcon,
  FaRegFaceSadTear as SadIcon,
} from "react-icons/fa6";
import styles from "./FormFeedbackOverlay.module.css";

function FormFeedbackOverlay({
  status,
  onConfirmSuccess: handleConfirmSuccess,
  onDismiss: handleDismiss,
}) {
  const allowedStatuses = ["success", "loading", "error"];

  if (!allowedStatuses.includes(status)) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.feedback}>
        {status === "success" && (
          <>
            <CircleCheckIcon />
            <h1>Thanks for your message!</h1>
            <p>I'll get back to you shortly!</p>
            <Button className={styles.button} onClick={handleConfirmSuccess}>
              OK Cool
            </Button>
          </>
        )}
        {status === "error" && (
          <>
            <SadIcon />
            <h1>Something went wrong...</h1>
            <p>I didn't get your message.</p>
            <Button className={styles.button} onClick={handleDismiss}>
              Try again
            </Button>
          </>
        )}
        {status === "loading" && (
          <>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
            <h1>Sending...</h1>
            <Button className={styles.button} onClick={handleDismiss}>
              Cancel
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default FormFeedbackOverlay;
