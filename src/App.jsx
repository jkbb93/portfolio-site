import { useDarkModeStyles } from "./features/darkMode";
import { useScrollToAnchor } from "./hooks";
import Layout from "./components/Layout";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

// Global styles
import "./styles.css";

// Stylesheet for styles related to dark mode
import "./theme-styles.css";

function App() {
  useDarkModeStyles();
  useScrollToAnchor();

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
