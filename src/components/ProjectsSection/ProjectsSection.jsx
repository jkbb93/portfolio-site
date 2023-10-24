import { Section, SectionHeading } from "../shared";
import {
  ReactIcon,
  HTMLIcon,
  CSSIcon,
  JSIcon,
  NodeIcon,
  ExpressIcon,
  ReduxIcon,
} from "../../assets/icons";
import skysearcherImage from "./skysearcher.png";
import stickynotesImage from "./stickynotes.png";
import dogshopImage from "./dogshop.png";
import styles from "./ProjectsSection.module.css";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  const skysearcherSiteHref = "https://skysearcher.netlify.app/";
  const skysearcherGitHubHref = "https://github.com/jkbb93/skysearcher";
  // const skysearcherDescription =
  //   "A clone of the SkyScanner website, focused on demonstrating my Front End skills - in particular my proficiency in React, and creating responsive layouts with CSS.\n\nI created a collection of custom React components from scratch, including a modular and reusable date range picker, which relied on extensive knowledge of React hooks and component lifecycle behaviour, as well as interactions with browser APIs.";
  const skysearcherDescription =
    "A clone of the SkyScanner website, focused on demonstrating my Front End skills - in particular my proficiency in React, and creating responsive layouts with CSS.";

  const dogshopSiteHref = "https://jkbbdogshop.netlify.app/";
  const dogshopGitHubHref = "https://github.com/jkbb93/dog-shop";
  const dogshopDescription =
    "An ecommerce site built with React, with Redux for state management, utilising an API built in Node.js/Express to manage authentication and session persistence.";

  const stickyNotesSiteHref = "https://jkbbstickynotes.netlify.app/";
  const stickyNotesGitHubHref = "https://github.com/jkbb93/sticky-notes";
  const stickynotesDescription =
    "An interactive note-taking app with custom drag and drop/resize hooks built in React with Redux";

  const techIcons = {
    javascript: { type: "javascript", icon: JSIcon },
    react: { type: "react", icon: ReactIcon },
    redux: { type: "redux", icon: ReduxIcon },
    node: { type: "node.js", icon: NodeIcon },
    express: { type: "express.js", icon: ExpressIcon },
    html: { type: "html", icon: HTMLIcon },
    css: { type: "css", icon: CSSIcon },
  };

  return (
    <Section id="projects">
      <SectionHeading>Recent Projects</SectionHeading>
      <div className={styles.projects}>
        <ProjectCard
          imgSrc={skysearcherImage}
          imgAlt="Screenshot showcasing the SkySearcher homepage"
          name="SkySearcher"
          description={skysearcherDescription}
          techIcons={[
            techIcons.javascript,
            techIcons.react,
            techIcons.node,
            techIcons.express,
            techIcons.html,
            techIcons.css,
          ]}
          siteHref={skysearcherSiteHref}
          gitHubHref={skysearcherGitHubHref}
        />
        <ProjectCard
          imgSrc={dogshopImage}
          imgAlt="Screenshot showcasing the DogShop shop page"
          name="DogShop"
          description={dogshopDescription}
          techIcons={[
            techIcons.javascript,
            techIcons.node,
            techIcons.express,
            techIcons.react,
            techIcons.redux,
            techIcons.html,
            techIcons.css,
          ]}
          siteHref={dogshopSiteHref}
          gitHubHref={dogshopGitHubHref}
        />
        <ProjectCard
          imgSrc={stickynotesImage}
          imgAlt="Screenshot showcasing the StickyNotes App"
          name="StickyNotes"
          description={stickynotesDescription}
          techIcons={[
            techIcons.javascript,
            techIcons.react,
            techIcons.redux,
            techIcons.html,
            techIcons.css,
          ]}
          siteHref={stickyNotesSiteHref}
          gitHubHref={stickyNotesGitHubHref}
        />
      </div>
    </Section>
  );
}

export default ProjectsSection;
