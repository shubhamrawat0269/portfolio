import { MdEmail } from "react-icons/md";
import styles from "./beyondCode.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactLinks() {
  const links = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "#",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "#",
    },
    {
      icon: <MdEmail />,
      label: "Email",
      href: "#",
    },
  ];

  return (
    <div className={styles["contact-links"]}>
      {links.map((item) => (
        <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
          {item.icon}
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
}
