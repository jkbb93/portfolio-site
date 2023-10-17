import Layout from "./components/Layout";
import ArticlePage from "./pages";
import { ScrollToLink } from "./components/shared";
import { useDarkMode } from "./features/darkMode";
import { useLayoutEffect, useEffect } from "react";
import "./styles.css";
import "./theme-styles.css";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  const { darkMode } = useDarkMode();

  useLayoutEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    document.body.classList.add("theme-transition");
  }, []);

  // Scroll to section if hash used in url
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <Layout>
      <ProjectsSection />
      <ArticlePage />
      <div
        style={{
          height: "2000px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <ScrollToLink to={{ x: 0, y: 0 }}>
          <h1 id="skills">Hehe</h1>
        </ScrollToLink>
      </div>
    </Layout>
  );
}

export default App;
