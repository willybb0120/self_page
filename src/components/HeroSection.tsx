import { ProfileData } from "@/data/profile";

interface HeroSectionProps {
  profile: ProfileData;
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 font-mono">
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">
        <span className="text-blue-500">&gt;</span> Hello, I'm{" "}
        <span className="text-primary">{profile.name}</span>
      </h1>
      <p className="text-xl text-muted-foreground mb-8 border-l-2 border-primary pl-4">
        {profile.role}
      </p>
      <p className="max-w-2xl text-lg leading-relaxed text-foreground opacity-90">
        // {profile.bio}
      </p>
    </section>
  );
}