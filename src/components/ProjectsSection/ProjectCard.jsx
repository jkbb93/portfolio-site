import { Button } from "../shared";
import {
  FaArrowUpRightFromSquare as LinkIcon,
  FaGithub as GitHubIcon,
} from "react-icons/fa6";
import { Card } from "../shared";
import styles from "./ProjectCard.module.css";

function ProjectCard({
  imgSrc,
  imgAlt,
  name,
  description = "",
  techIcons = [],
  siteHref,
  gitHubHref,
}) {
  const techIconComponents = techIcons.map((techIcon) => {
    const { type, icon: Icon } = techIcon;
    return <Icon key={type} />;
  });

  /* 
  Note that the string passed to the description prop must be passed as a JS expression,
   e.g. description={"string\n\n"}
  If you pass the string directly - description="string\n\n", then it will be treated as a 
  literal string and escaped - 'string\n\n' will be escaped to 'string\\n\\n'
  */
  const descriptionComponents = description
    .split("\n\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <Card className={styles.card}>
      <div className={styles["project-info"]}>
        <a href={siteHref} target="_blank" rel="noopener noreferrer">
          <img src={imgSrc} alt={imgAlt} />
        </a>
        <div className={styles.description}>
          <h2>{name}</h2>
          {descriptionComponents}
        </div>
        {techIconComponents.length > 0 && (
          <div className={styles["built-with"]}>
            <span>Built with</span>
            <div className={styles["tech-icons"]}>{techIconComponents}</div>
          </div>
        )}
      </div>
      <div>
        {siteHref && (
          <Button
            asLink
            href={siteHref}
            className={styles["external-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon />
            <span>View Live Site</span>
          </Button>
        )}
        {gitHubHref && (
          <Button
            asLink
            href={gitHubHref}
            className={styles["external-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            <span>View GitHub Repo</span>
          </Button>
        )}
      </div>
    </Card>
  );
}

export default ProjectCard;
