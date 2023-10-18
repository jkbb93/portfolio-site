import Layout from "./components/Layout";
import ArticlePage from "./pages";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { ScrollToLink } from "./components/shared";
import { useDarkMode } from "./features/darkMode";
import { useLayoutEffect, useEffect } from "react";
import "./styles.css";
import "./theme-styles.css";

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
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <Layout>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
