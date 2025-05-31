"use client";
import Link from "next/link";
import { navItems } from "../data";
import { useState } from "react";
import Theme from "./Theme";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/20 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href={"/"}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Ali Mohamed Ali
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className={`text-sm font-bold transition-colors duration-300 hover:text-primary text-muted-foreground `}
              >
                {item.name}
              </Link>
            ))}
            <Theme />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <Theme />
            {/* <Button */}
            {/* variant="ghost" */}
            {/* size="icon" */}
            {/* onClick={() => setIsOpen(!isOpen)} */}
            {/* className="text-gray-700 dark:text-gray-300" */}
            {/* > */}
            {/* {isOpen ? <X size={24} /> : <Menu size={24} />} */}
            {/* </Button> */}
            <button onClick={() => setIsOpen(true)}>tabs</button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-700/20">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
