import {
  FaCode,
  FaGlobe,
  FaMobile,
  FaDatabase,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import { ReactNode } from "react";

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const skills = [
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS, Next.js",
    color: "from-secondary to-accent",
  },
  {
    icon: <FaGlobe className="w-8 h-8" />,
    title: "Web Technologies",
    description: "HTML5, CSS3, JavaScript ES6+, REST APIs",
    color: "from-secondary to-accent",
  },
  {
    icon: <FaMobile className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Responsive Design, User Experience, Figma",
    color: "from-primary to-secondary",
  },
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: "Modern Tools",
    description: "Git, Webpack, GitHub",
    color: "from-secondary to-accent",
  },
];
const IconSizes = {
  width: 50,
  height: 50,
};
export interface SkillsProps {
  name: string;
  icon: ReactNode;
}
export const SkillsIcons: SkillsProps[] = [
  {
    name: `HTML`,
    icon: (
      <Image
        alt="HTML"
        className="z-3 bg-secondary rounded-md p-1.5"
        width={IconSizes.width}
        height={IconSizes.height}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
      />
    ),
  },
  {
    name: `CSS`,
    icon: (
      <Image
        alt="CSS"
        className="z-3 bg-secondary rounded-md p-1.5"
        width={IconSizes.width}
        height={IconSizes.height}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
      />
    ),
  },
  {
    name: `JavaScript`,
    icon: (
      <Image
        alt="JavaScript"
        className="z-3 bg-secondary rounded-md p-1.5"
        width={IconSizes.width}
        height={IconSizes.height}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
      />
    ),
  },
  {
    name: `TypeScript`,
    icon: (
      <Image
        alt="TypeScript"
        className="z-3 bg-secondary rounded-md p-1.5"
        width={IconSizes.width}
        height={IconSizes.height}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
      />
    ),
  },
  {
    name: `BootStrap`,
    icon: (
      <Image
        alt="BootStrap"
        className="z-3 bg-secondary rounded-md p-1.5"
        width={IconSizes.width}
        height={IconSizes.height}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
      />
    ),
  },
  {
    name: `Tailwind`,
    icon: (
      <Image
        alt="Tailwind"
        className="z-3 bg-secondary rounded-md p-1.5"
        width={IconSizes.width}
        height={IconSizes.height}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
      />
    ),
  },
  {
    name: `SASS`,
    icon: (
      <Image
        alt="SASS"
        className="z-3 bg-secondary rounded-md p-1.5"
        width={IconSizes.width}
        height={IconSizes.height}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
      />
    ),
  },
  {
    name: `React`,
    icon: (
      <Image
        alt="React"
        className="z-3 bg-secondary rounded-md p-1.5"
        width={IconSizes.width}
        height={IconSizes.height}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
      />
    ),
  },
  {
    name: `Next`,
    icon: (
      <Image
        alt="Next"
        className="z-3 bg-secondary rounded-md p-1.5 "
        width={IconSizes.width}
        height={IconSizes.height}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
      />
    ),
  },
  {
    name: `Redux`,
    icon: (
      <Image
        alt="Redux"
        className="z-3 bg-secondary rounded-md p-1.5"
        width={IconSizes.width}
        height={IconSizes.height}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
      />
    ),
  },
  {
    name: `Figma`,
    icon: (
      <Image
        alt="Figma"
        className="z-3 bg-secondary rounded-md p-1.5"
        width={IconSizes.width}
        height={IconSizes.height}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
      />
    ),
  },
  {
    name: `GitHub`,
    icon: (
      <Image
        alt="GitHub"
        className="z-3 bg-secondary rounded-md p-1.5"
        width={IconSizes.width}
        height={IconSizes.height}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
      />
    ),
  },
];

export const contactInfo = [
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: "Email",
    value: "eloymohamedalimansor@gmail.com",
    link: "mailto:eloymohamedalimansor@gmail.com",
  },
  {
    icon: <FaPhone className="w-6 h-6" />,
    title: "Phone",
    value: "+20 127 892 2209",
    link: "tel:+20 127 892 2209",
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    title: "Location",
    value: "Cairo, Egypt",
  },
];
