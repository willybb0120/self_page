import { ProfileData } from "@/data/profile";

interface AboutSectionProps {
  about: ProfileData["about"];
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sticky lg:top-0 lg:-mx-24 lg:w-auto lg:px-24 lg:py-5 lg:backdrop-blur">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white">About</h2>
      </div>
      <div className="text-muted-foreground leading-relaxed space-y-4">
        {about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
