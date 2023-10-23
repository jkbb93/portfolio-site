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
  description,
  techIcons = [],
  siteHref,
  gitHubHref,
}) {
  const techIconComponents = techIcons.map((techIcon) => {
    const { type, icon: Icon } = techIcon;
    return <Icon key={type} />;
  });

  return (
    <Card className={styles.card}>
      <div className={styles["project-info"]}>
        <a href={siteHref}>
          <img src={imgSrc} alt={imgAlt} />
        </a>
        <div className={styles.description}>
          <h2>{name}</h2>
          <p>{description}</p>
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
          <Button asLink href={siteHref} className={styles["external-link"]}>
            <LinkIcon />
            <span>View Live Site</span>
          </Button>
        )}
        {gitHubHref && (
          <Button asLink href={gitHubHref} className={styles["external-link"]}>
            <GitHubIcon />
            <span>View GitHub Repo</span>
          </Button>
        )}
      </div>
    </Card>
  );
}

export default ProjectCard;
