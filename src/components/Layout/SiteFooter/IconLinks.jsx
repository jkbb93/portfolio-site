import { motion } from "framer-motion";
import {
  FaLinkedin as LinkedInIcon,
  FaGithub as GitHubIcon,
} from "react-icons/fa6";
import styles from "./IconLinks.module.css";

function IconLinks() {
  const linkData = [
    { name: "github", icon: <GitHubIcon />, href: "https://github.com/jkbb93" },
    {
      name: "linkedin",
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/in/jake-betts-708015188",
    },
  ];

  const links = linkData.map((link) => (
    <motion.a
      key={link.name}
      href={link.href}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
    >
      {link.icon}
    </motion.a>
  ));

  return <nav className={styles.links}>{links}</nav>;
}

export default IconLinks;
