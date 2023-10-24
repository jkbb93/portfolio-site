import { IconLink } from "../../shared";
import {
  FaLinkedin as LinkedInIcon,
  FaGithub as GitHubIcon,
} from "react-icons/fa6";
import styles from "./FooterIconLinks.module.css";

function FooterIconLinks() {
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
      target="_blank"
      rel="noopener noreferrer"
      motionProps={{
        whileHover: { scale: 1.2 },
        transition: { type: "spring", stiffness: 500, damping: 20 },
      }}
      className={styles.link}
    >
      {link.icon}
    </IconLink>
  ));

  return <nav className={styles.nav}>{links}</nav>;
}

export default FooterIconLinks;
