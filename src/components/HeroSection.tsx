import { ProfileData } from "@/data/profile";

interface HeroSectionProps {
  profile: ProfileData;
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">
        Hello, I'm <span className="text-blue-600">{profile.name}</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8">{profile.role}</p>
      <p className="max-w-2xl text-lg leading-relaxed text-gray-700">
        {profile.bio}
      </p>
    </section>
  );
}
