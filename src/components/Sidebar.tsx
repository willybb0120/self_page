import Link from "next/link";
import { ProfileData } from "@/data/profile";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface SidebarProps {
  profile: ProfileData;
}

export function Sidebar({ profile }: SidebarProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-12 lg:overflow-y-auto">
      <div>
        {/* Avatar */}
        <div className="mb-8 h-24 w-24 overflow-hidden rounded-full border-2 border-zinc-800 bg-zinc-900 shadow-xl">
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-zinc-900 to-zinc-800 text-[10px] text-zinc-500">
            PHOTO
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          <Link href="/">{profile.name}</Link>
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
            {profile.navLinks.map((item) => (
              <li key={item}>
                <Link className="group flex items-center py-3" href={`#${item.toLowerCase()}`}>
                  <span className="nav-indicator mr-4 h-px w-8 bg-zinc-600 transition-all group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white group-focus-visible:text-white">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social Links */}
      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        <li className="text-zinc-400 hover:text-white transition-colors cursor-pointer"><Github size={20} /></li>
        <li className="text-zinc-400 hover:text-white transition-colors cursor-pointer"><Linkedin size={20} /></li>
        <li className="text-zinc-400 hover:text-white transition-colors cursor-pointer"><Twitter size={20} /></li>
        <li className="text-zinc-400 hover:text-white transition-colors cursor-pointer"><Mail size={20} /></li>
      </ul>
    </header>
  );
}
