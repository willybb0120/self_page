"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { ProfileData } from "@/data/profile";

interface MobileNavProps {
  navLinks: ProfileData["navLinks"];
}

export function MobileNav({ navLinks }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-4 z-[100] p-2 text-zinc-400 transition-colors hover:text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Menu */}
      <div
        className={`fixed right-0 top-0 z-[95] h-full w-3/4 max-w-xs transform bg-zinc-900 p-8 shadow-2xl transition-transform duration-300 ease-in-out border-l border-zinc-800 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="mt-20 flex flex-col space-y-6">
          {navLinks.map((item) => {
            const sectionId = item.toLowerCase().replace(/\s+/g, '-');
            return (
              <ScrollLink
                key={item}
                to={sectionId}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-lg font-medium tracking-wide text-zinc-400 hover:text-white"
                activeClass="!text-teal-300"
              >
                {item}
              </ScrollLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
