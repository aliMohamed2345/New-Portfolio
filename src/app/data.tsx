import { FaCode, FaGlobe, FaMobile, FaDatabase } from 'react-icons/fa';

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
    color: "from-secondary to-accent"
  },
  {
    icon: <FaGlobe className="w-8 h-8" />,
    title: "Web Technologies", 
    description: "HTML5, CSS3, JavaScript ES6+, REST APIs",
    color: "from-secondary to-accent"
  },
  {
    icon: <FaMobile className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Responsive Design, User Experience, Figma",
    color: "from-primary to-secondary"
  },
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: "Modern Tools",
    description: "Git, Webpack, GitHub",
    color: "from-secondary to-accent"
  }
];