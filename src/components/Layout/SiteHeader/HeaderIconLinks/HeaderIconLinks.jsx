import { IconLink } from "../../../shared";
import {
  FaLinkedin as LinkedInIcon,
  FaGithub as GitHubIcon,
} from "react-icons/fa6";
import styles from "./HeaderIconLinks.module.css";

function HeaderIconLinks() {
  const linkData = [
    { name: "github", icon: <GitHubIcon />, href: "https://github.com/jkbb93" },
    {
      name: "linkedin",
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/in/jake-betts-708015188",
    },
  ];

  const links = linkData.map((link) => (
    <IconLink
      key={link.name}
      href={link.href}
      motionProps={{
        whileHover: { scale: 1.2 },
        transition: { type: "spring", stiffness: 500, damping: 20 },
      }}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.icon}
    </IconLink>
  ));

  return <div className={styles.wrapper}>{links}</div>;
}

export default HeaderIconLinks;
