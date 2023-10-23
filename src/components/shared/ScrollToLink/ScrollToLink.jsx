import { useState, useEffect, useRef } from "react";
import styles from "./ScrollToLink.module.css";

function ScrollToLink({
  children,
  to: toString,
  onClick: onClickCallback,
  onActiveChange: onActiveChangeCallback,
  className = "",
  ...restProps
}) {
  const [isActive, setIsActive] = useState(false);
  const href = `#${toString}`;
  const isInitialRenderRef = useRef(true);

  const handleClick = (event) => {
    event.preventDefault();

    const element = document.getElementById(toString);

    if (!element) {
      console.warn(`No elements found with ID of ${href}`);
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" });

    const oldURL = window.location.href;

    window.history.pushState(null, "", href);

    window.dispatchEvent(
      new HashChangeEvent("hashchange", {
        oldURL,
        newURL: window.location.href,
      })
    );

    if (typeof onClickCallback === "function") {
      onClickCallback(event);
    }
  };

  useEffect(() => {
    const updateIsActive = () => {
      const nowActive = window.location.hash === href;
      setIsActive(nowActive);

      if (typeof onActiveChangeCallback === "function") {
        onActiveChangeCallback({ href, isActive: nowActive });
      }
    };

    // isInitialRenderRef in case onActiveCallback is not memoized
    if (isInitialRenderRef.current) {
      isInitialRenderRef.current = false;
      updateIsActive();
    }

    window.addEventListener("hashchange", updateIsActive);
    return () => window.removeEventListener("hashchange", updateIsActive);
  }, [href, onActiveChangeCallback]);

  const passedClassName =
    typeof className === "function" ? className(isActive) : className;

  return (
    <a
      href={href}
      className={`${styles.link} ${passedClassName}`}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </a>
  );
}

export default ScrollToLink;
