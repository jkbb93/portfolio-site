import styles from "./ScrollToLink.module.css";

/*
 scrollTarget accepts an element ID as string (without #),
 or an object with x and y properties
*/

function ScrollToLink({
  children,
  to: scrollTarget,
  onClick: onClickCallback,
  className,
  ...restProps
}) {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    const idLocation = `#${id}`;

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", idLocation);
    } else {
      console.warn("Element with id of " + idLocation + " not found");
    }
  };

  const scrollToCoords = (coords) => {
    const { x, y } = coords;

    if (x !== undefined && y !== undefined) {
      window.scrollTo({
        behavior: "smooth",
        left: x,
        top: y,
      });

      window.history.pushState(null, "", "/");
    } else {
      console.warn(
        "X and Y properties are required in object passed to 'to' prop of ScrollToLink"
      );
    }
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (typeof scrollTarget === "string") {
      scrollToElement(scrollTarget);
    } else if (typeof scrollTarget === "object") {
      scrollToCoords(scrollTarget);
    }

    if (typeof onClickCallback === "function") {
      onClickCallback(event);
    }
  };

  return (
    <a
      className={`${styles.link} ${className}`}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </a>
  );
}

export default ScrollToLink;
