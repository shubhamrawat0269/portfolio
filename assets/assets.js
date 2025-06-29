import user_image from "./user-image.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import mobile_icon from "./mobile-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import {
  BrainCog,
  CircleUser,
  Code,
  HardHat,
  Monitor,
  PersonStanding,
  VenetianMask,
} from "lucide-react";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";


const about_me = `I am an experienced Frontend Developer with over 3 years of
  professional expertise in the field. Throughout my career, I have
  had the privilege of collaborating with prestigious organizations,
  contributing to their success and growth.`;

export const assets = {
  user_image,
  vscode,
  firebase,
  figma,
  git,
  about_me,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  mobile_icon,
  graphics_icon,
  right_arrow,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const cardData = [
  {
    icon: <Code size={40} />,
    title: "Frontend Dev",
    description: "Building seamless and responsive UIs with modern frameworks.",
  },
  {
    icon: <Monitor size={40} />,
    title: "UI/UX Enthusiast",
    description:
      "Passionate about creating intuitive, responsive, & visually appealing web applications.",
  },
  {
    icon: <BrainCog size={40} />,
    title: "Creative Thinker",
    description: "Designing with a balance of functionality and aesthetics.",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

export const serviceCardData = [
  {
    icon: <CircleUser size={40} />,
    title: "Self Contained",
    description:
      "Experienced in developing reusable, maintainable components for fast and efficient web development",
  },
  {
    icon: <VenetianMask size={40} />,
    title: "Implementer",
    description:
      "Skilled in translating design mockups into functional, interactive digital experiences.",
  },
  {
    icon: <HardHat size={40} />,
    title: "Tech Savvy",
    description:
      "Always exploring new tools and technologies to push the boundaries of modern web development.",
  },
  {
    icon: <PersonStanding size={40} />,
    title: "Code Artisans",
    description:
      "Passionate about clean code, modern JavaScript, and scalable front-end architecture.",
  },
];

export const portfolioCardData = [
  {
    imageUrl: "/work-1.png",
    title: "Explore Nature",
  },
  {
    imageUrl: "/work-2.png",
    title: "Mountain Views",
  },
  {
    imageUrl: "/work-3.png",
    title: "City Nights",
  },
  {
    imageUrl: "/work-4.png",
    title: "City Nights",
  },
  {
    imageUrl: "/work-1.png",
    title: "Explore Nature",
  },
  {
    imageUrl: "/work-2.png",
    title: "Mountain Views",
  },
  {
    imageUrl: "/work-3.png",
    title: "City Nights",
  },
  {
    imageUrl: "/work-4.png",
    title: "City Nights",
  },
  {
    imageUrl: "/work-1.png",
    title: "Explore Nature",
  },
  {
    imageUrl: "/work-2.png",
    title: "Mountain Views",
  },
  {
    imageUrl: "/work-3.png",
    title: "City Nights",
  },
  {
    imageUrl: "/work-4.png",
    title: "City Nights",
  },
];

export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const scaleUpIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.2, ease: "easeOut" },
  }),
};
