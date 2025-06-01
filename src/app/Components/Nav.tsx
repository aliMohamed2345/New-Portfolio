"use client";
import Link from "next/link";
import { navItems } from "../data";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Theme from "./Theme";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/20 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-2 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href={"/"}
            className="sm:text-2xl text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
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
          <div className="md:hidden flex items-center gap-2 ">
            <Theme />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-full bg-background backdrop-blur-md border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full h-full">
                {/* Close Icon */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    isOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-0"
                  }`}
                >
                  <IoMdClose
                    className="text-2xl text-background-foreground transform transition-transform duration-500"
                  />
                </div>
                
                {/* Menu Icon */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    isOpen
                      ? "opacity-0 rotate-90 scale-0"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                >
                  <IoMdMenu
                    className="text-2xl text-background-foreground transform transition-transform duration-500"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4  backdrop-blur-md border-t border-border">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="block w-full text-left py-2 hover:text-primary-foreground rounded-md hover:bg-primary transition-all pl-2"
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
