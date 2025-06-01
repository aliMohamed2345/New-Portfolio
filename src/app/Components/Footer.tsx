import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { navItems } from "../data";

const Footer = () => {
  return (
    <footer className="bg-background text-muted-foreground py-12 transition-colors duration-300">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center sm:text-left">
              Ali Mohamed Ali
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 text-center sm:text-left font-bold">
              Front End Developer passionate about creating beautiful,
              functional web applications with modern technologies
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a
                href="https://github.com/aliMohamed2345"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted/20 rounded-full hover:bg-primary transition-colors duration-300 text-secondary-foreground hover:text-primary-foreground"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ali-mohamed-mansor-204a44296/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted/20 rounded-full hover:bg-primary transition-colors duration-300 text-secondary-foreground hover:text-primary-foreground"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:eloymohamedalimansor@gmail.com"
                className="p-3 bg-muted/20 rounded-full hover:bg-primary transition-colors duration-300 text-secondary-foreground hover:text-primary-foreground"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4 text-secondary-foreground/90">
              Quick Links
            </h4>
            <ul className="space-y-2 text-lg sm:text-xl">
              {navItems.map((navItem, index) => (
                <li key={index}>
                  <a
                    href={navItem.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {navItem.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4 text-secondary-foreground/90">
              Services
            </h4>
            <ul className="space-y-2 text-muted-foreground text-lg sm:text-xl">
              <li>Front End Development</li>
              <li>Web Technologies</li>
              <li>UI/UX Design</li>
              <li>API Development</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center text-sm sm:text-base">
            All the rights reserved to Ali Mohamed Ali ©
            {+new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
