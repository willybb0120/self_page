"use client";

import NextLink from "next/link";
import Image from "next/image";
import { ProfileData } from "@/data/profile";
import { Github, Mail, Instagram, Phone } from "lucide-react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { toSlug } from "@/lib/utils";

interface SidebarProps {
  profile: ProfileData;
}

export function Sidebar({ profile }: SidebarProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-12 lg:overflow-y-auto">
      <div>
        {/* Avatar */}
        <div className="mb-8 block h-32 w-32 overflow-hidden rounded-full border-2 border-zinc-800 bg-zinc-900 shadow-xl relative">
          <Image
            src="/images/me.jpg"
            alt={`${profile.name} avatar`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 128px, 128px"
          />
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          <NextLink href="/">{profile.name}</NextLink>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-white sm:text-xl">
          {profile.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
          {profile.headline}
        </p>

        {/* Navigation */}
        <nav className="nav hidden lg:block mt-12" aria-label="In-page jump links">
          <ul className="w-max">
            {profile.navLinks.map((item) => {
              const sectionId = toSlug(item);
              const isActive = activeSection === sectionId;

              return (
                <li key={item}>
                  <ScrollLink
                    to={sectionId}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={() => setActiveSection(sectionId)}
                    className={`group flex items-center py-3 cursor-pointer ${isActive ? "active" : ""}`}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                        isActive
                          ? "w-16 bg-white"
                          : "w-8 bg-zinc-600 group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white"
                      }`}
                    ></span>
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest ${
                        isActive
                          ? "text-white"
                          : "text-zinc-500 group-hover:text-white group-focus-visible:text-white"
                      }`}
                    >
                      {item}
                    </span>
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social Links */}
      <div className="mt-12 lg:mt-0">
        <h3 className="mb-2 ml-1 text-xs font-bold uppercase tracking-widest text-zinc-500">Contact</h3>
        <ul className="ml-1 flex items-center gap-5" aria-label="Social media">
          <li className="text-zinc-400 hover:text-white transition-colors cursor-pointer" title="GitHub"><Github size={20} /></li>
          <li className="text-zinc-400 hover:text-white transition-colors cursor-pointer" title="Email"><Mail size={20} /></li>
          <li className="text-zinc-400 hover:text-white transition-colors cursor-pointer" title="Instagram"><Instagram size={20} /></li>
          <li className="text-zinc-400 hover:text-white transition-colors cursor-pointer" title="Phone"><Phone size={20} /></li>
        </ul>
      </div>
    </header>
  );
}
