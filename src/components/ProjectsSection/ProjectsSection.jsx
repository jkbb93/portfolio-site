import { Section, SectionHeading } from "../shared";
import {
  ReactIcon,
  CSSIcon,
  JSIcon,
  NodeIcon,
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
  const stickyNotesSiteHref = "https://jkbbstickynotes.netlify.app/";
  const stickyNotesGitHubHref = "https://github.com/jkbb93/sticky-notes";
  const dogshopSiteHref = "https://jkbbdogshop.netlify.app/";
  const dogshopGitHubHref = "https://github.com/jkbb93/dog-shop";

  const techIcons = {
    javascript: { type: "javascript", icon: JSIcon },
    react: { type: "react", icon: ReactIcon },
    node: { type: "node.js", icon: NodeIcon },
    css: { type: "css", icon: CSSIcon },
    redux: { type: "redux", icon: ReduxIcon },
  };

  return (
    <Section id="projects">
      <SectionHeading>Recent Projects</SectionHeading>
      <div className={styles.projects}>
        <ProjectCard
          imgSrc={skysearcherImage}
          imgAlt="Screenshot showcasing the SkySearcher homepage"
          name="SkySearcher"
          description="A clone of the SkyScanner website, built in React."
          techIcons={[
            techIcons.javascript,
            techIcons.react,
            techIcons.node,
            techIcons.css,
          ]}
          siteHref={skysearcherSiteHref}
          gitHubHref={skysearcherGitHubHref}
        />
        <ProjectCard
          imgSrc={stickynotesImage}
          imgAlt="Screenshot showcasing the StickyNotes App"
          name="StickyNotes"
          description="An interactive sticky notes app using custom-built drag & drop and resize hooks"
          techIcons={[
            techIcons.javascript,
            techIcons.react,
            techIcons.node,
            techIcons.css,
            techIcons.redux,
          ]}
          siteHref={stickyNotesSiteHref}
          gitHubHref={stickyNotesGitHubHref}
        />
        <ProjectCard
          imgSrc={dogshopImage}
          imgAlt="Screenshot showcasing the DogShop shop page"
          name="DogShop"
          description="An ecommerce site built with React, Redux and Express/Node.js."
          techIcons={[
            techIcons.javascript,
            techIcons.react,
            techIcons.node,
            techIcons.css,
            techIcons.redux,
          ]}
          siteHref={dogshopSiteHref}
          gitHubHref={dogshopGitHubHref}
        />
      </div>
    </Section>
  );
}

export default ProjectsSection;
