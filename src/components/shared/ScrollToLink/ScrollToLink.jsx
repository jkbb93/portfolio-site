import styles from "./ScrollToLink.module.css";

function ScrollToLink({
  children,
  to: scrollToId = "",
  onClick: onClickCallback,
  className,
  ...restProps
}) {
  const handleClick = (event) => {
    event.preventDefault();

    const element = document.getElementById(scrollToId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (typeof onClickCallback === "function") {
      onClickCallback(event);
    }
  };

  return (
    <a
      href={`#${scrollToId}`}
      className={`${styles.link} ${className}`}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </a>
  );
}

export default ScrollToLink;
