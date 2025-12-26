import { ProfileData } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

interface ProjectListProps {
  projects: ProfileData["projects"];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white">Projects</h2>
      </div>
      <div className="group/list">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">
              Recent
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-white">
                <div>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-white hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>{project.title}</span>
                    <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1" />
                  </a>
                </div>
              </h3>
              <p className="mt-2 text-sm leading-normal text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {project.tags.map((tag) => (
                  <li key={tag} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      {tag}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
