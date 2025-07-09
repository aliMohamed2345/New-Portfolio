import {
  FaCode,
  FaGlobe,
  FaMobile,
  FaDatabase,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import Calculator from "../../public/Basic Calculator.jpg";
import FirstTemplate from "../../public/First Template.jpg";
import SecondTemplate from "../../public/Second Template.jpg";
import TicTacToeGame from "../../public/Tic Tac Toe Game.jpg";
import LoginPage from "../../public/Login Page.jpg";
import Translator from "../../public/BasicTranslator.jpg";
import ToDoList from "../../public/To-Do List.jpg";
import ColorFlipper from "../../public/Color Flipper.jpg";
import StopWatch from "../../public/StopWatch.jpg";
import ClipBoardLandingPage from "../../public/clipboard-landing-page-front-end-mentor.jpg";
import SocialLinksProfile from "../../public/social-links-profile-front-end-mentor.jpg";
import QuizGame from "../../public/Quiz_Game.jpg";
import Fzakerr from "../../public/Fzakerr App.jpg";
import Pixels from "../../public/Pixels.jpg";
import Movie from "../../public/Movie-App.png";
import News from '../../public/news-app.jpg'

export interface SkillsProps {
  name: string;
  icon: ReactNode;
}

export interface ProjectsProps {
  Title: string;
  Description: string;
  Class: string;
  Demo: string;
  Github: string;
  Image: StaticImageData;
  Technologies: string[];
}

export interface FilterProjectsProps {
  name: string;
  value: string;
}

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

export const Projects: ProjectsProps[] = [
  {
    Title: "Basic Calculator",
    Description:
      "A fully functional calculator application that supports basic arithmetic operations including addition, subtraction, multiplication, and division. Features a clean, responsive design with a modern UI that includes a display screen and a grid of operation buttons. The calculator handles decimal numbers and includes error handling for invalid operations.",
    Class: "JS",
    Demo: "https://simple-calculator-azure-ten.vercel.app/",
    Github: "https://github.com/aliMohamed2345/simple-calculator",
    Image: Calculator,
    Technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    Title: "First Template",
    Description:
      "A responsive landing page template showcasing modern web design principles. Features a hero section with a compelling call-to-action, service highlights, and a clean navigation menu. The template demonstrates effective use of CSS Grid and Flexbox for layout management, with smooth animations and transitions for enhanced user experience.",
    Class: "HTML|CSS",
    Demo: "https://first-template-five.vercel.app/",
    Github: "https://github.com/aliMohamed2345/first-template",
    Image: FirstTemplate,
    Technologies: ["HTML", "CSS"],
  },
  {
    Title: "Second Template",
    Description:
      "An elegant portfolio template designed for creative professionals. Includes sections for showcasing work, skills, and contact information. The template features a modern, minimalist design with attention to typography and spacing. Implements responsive design principles to ensure optimal viewing across all device sizes.",
    Class: "HTML|CSS",
    Demo: "https://second-template-lyart.vercel.app/",
    Github: "https://github.com/aliMohamed2345/second-template",
    Image: SecondTemplate,
    Technologies: ["HTML", "CSS"],
  },
  {
    Title: "Tic Tac Toe Game",
    Description:
      "An interactive Tic Tac Toe game with a modern interface and game logic implemented in JavaScript. Features include player turn indicators, win detection, and a reset button. The game maintains state between moves and provides visual feedback for player actions. Includes responsive design for playability across different devices.",
    Class: "JS",
    Demo: "https://tic-tac-toe-game-eta-nine.vercel.app/",
    Github: "https://github.com/aliMohamed2345/tic-tac-toe-Game-",
    Image: TicTacToeGame,
    Technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    Title: "Login Page",
    Description:
      "A modern, responsive login page with form validation and user feedback. Features include email and password input fields with proper validation, remember me functionality, and social login options. The design incorporates modern UI elements with smooth transitions and error handling for invalid inputs.",
    Class: "HTML|CSS",
    Demo: "https://login-page-tau-five.vercel.app/",
    Github: "https://github.com/aliMohamed2345/login-page-",
    Image: LoginPage,
    Technologies: ["HTML", "CSS"],
  },
  {
    Title: "Basic Translator",
    Description:
      "A language translation application that allows users to translate text between different languages. Features include support for multiple languages, real-time translation, and a clean interface for input and output. The app provides instant feedback and maintains translation history for user convenience.",
    Class: "JS",
    Demo: "https://basic-translator-3rci47y0x-alimohamed2345s-projects.vercel.app/",
    Github: "https://github.com/aliMohamed2345/basic-translator-app",
    Image: Translator,
    Technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    Title: "To Do List",
    Description:
      "A feature-rich task management application that allows users to create, edit, and delete tasks. Includes functionality for task prioritization, due dates, and task categories. Features local storage integration for data persistence, drag-and-drop task reordering, and a clean, intuitive interface for task management.",
    Class: "JS",
    Demo: "https://to-do-list-app-one-inky.vercel.app/",
    Github: "https://github.com/aliMohamed2345/To-Do-List-app",
    Image: ToDoList,
    Technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    Title: "Color Flipper",
    Description:
      "An interactive color generator application that allows users to generate and copy random colors. Features include hex code display, color history, and the ability to save favorite colors. The app provides a visual representation of colors with smooth transitions and includes accessibility features for color-blind users.",
    Class: "JS",
    Demo: "https://color-flipper-delta-teal.vercel.app/",
    Github: "https://github.com/aliMohamed2345/Color-Flipper",
    Image: ColorFlipper,
    Technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    Title: "Stop Watch",
    Description:
      "A precise stopwatch application with start, pause, and reset functionality. Features include lap time recording, millisecond precision, and a clean, easy-to-read display. The app includes a history of recorded times and the ability to export timing data.",
    Class: "JS",
    Demo: "https://stop-watch-sigma-five.vercel.app/",
    Github: "https://github.com/aliMohamed2345/Stop-Watch-",
    Image: StopWatch,
    Technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    Title: "ClipBoard Landing Page",
    Description:
      "A professional landing page for a clipboard application, showcasing its features and benefits. The design includes sections for product highlights, testimonials, and call-to-action buttons. Features responsive design, smooth animations, and optimized performance for various devices.",
    Class: "HTML|CSS",
    Demo: "https://clipboard-landing-page-front-end-mentor-two.vercel.app/",
    Github:
      "https://github.com/aliMohamed2345/Clipboard-Landing-Page-front-end-mentor-",
    Image: ClipBoardLandingPage,
    Technologies: ["HTML", "CSS"],
  },
  {
    Title: "Social Links Profile",
    Description:
      "A modern social media profile page that aggregates and displays social media links in a clean, organized manner. Features include customizable link cards, social media icons, and a professional profile section. The design is optimized for sharing and includes hover effects for better user interaction.",
    Class: "HTML|CSS",
    Demo: "https://social-links-profile-front-end-mentor-1.vercel.app/",
    Github:
      "https://github.com/aliMohamed2345/Social-Links-Profile-front-end-mentor-",
    Image: SocialLinksProfile,
    Technologies: ["HTML", "CSS"],
  },
  {
    Title: "Quiz Game",
    Description:
      "An interactive quiz application built with React and TypeScript that offers a variety of questions across different categories. Features include score tracking, timer functionality, and immediate feedback on answers. The app includes a results summary, progress tracking, and the ability to retry questions.",
    Class: "React",
    Demo: "https://quiz-game--theta.vercel.app/",
    Github: "https://github.com/aliMohamed2345/Quiz_Game",
    Image: QuizGame,
    Technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    Title: "Fazkerr App",
    Description:
      "A comprehensive task management application built with React and Redux. Features include task creation, categorization, priority levels, and deadline management. The app includes user authentication, data persistence, and real-time updates. Implements a modern UI with drag-and-drop functionality and responsive design.",
    Class: "React",
    Demo: "https://fazaker-app-gm8y.vercel.app/",
    Github: "https://github.com/aliMohamed2345/fazaker-App",
    Image: Fzakerr,
    Technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"],
  },
  {
    Title: "Pixels App",
    Description:
      "A creative pixel art application that allows users to create and edit pixel-based artwork. Features include a color palette, different brush sizes, and the ability to save and export artwork. The app includes undo/redo functionality, layer support, and various drawing tools for creating detailed pixel art.",
    Class: "React",
    Demo: "https://pixels-application.vercel.app/",
    Github: "https://github.com/aliMohamed2345/Pixels-App",
    Image: Pixels,
    Technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"],
  },
  {
    Title: "Movie-App",
    Description:
      "A comprehensive movie discovery application that allows users to browse, search, and get details about movies. Features include movie recommendations, detailed movie information, cast details, and user ratings. The app includes a responsive design, search functionality, and integration with a movie database API.",
    Class: "React",
    Demo: "https://movie-app-three-kohl.vercel.app/movie",
    Github: "https://github.com/aliMohamed2345/Movie-App",
    Image: Movie,
    Technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"],
  },
  {
    Title: "News-App",
    Description:
      "a comprehensive news discovery platform designed to provide users with a seamless and engaging way to explore, browse, and stay updated with the latest news.",
    Class: "React",
    Demo: "https://news-app-blush-alpha.vercel.app/",
    Github: "https://github.com/aliMohamed2345/news-app",
    Image: News,
    Technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"],
  },
];

export const FilterProjects: FilterProjectsProps[] = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "HTML|CSS",
    value: "html|css",
  },
  {
    name: "JavaScript",
    value: "js",
  },
  {
    name: "React",
    value: "react",
  },
];
