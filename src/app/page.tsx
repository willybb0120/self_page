import { profileData } from "@/data/profile";
import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans pb-20">
      
      <HeroSection profile={profileData} />

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 font-mono text-primary">
          <span className="opacity-50">01.</span> 精選專案
        </h2>
        <div className="grid gap-6">
          {profileData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Books Section */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 font-mono text-primary">
          <span className="opacity-50">02.</span> 書籍推薦
        </h2>
        <div className="flex flex-wrap gap-4">
          {profileData.books.map((book, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-card border border-border rounded-md text-sm font-mono text-primary-foreground"
            >
              {book}
            </div>
          ))}
        </div>
      </section>

      <ContactSection />

      <footer className="max-w-4xl mx-auto mt-20 px-6 text-muted-foreground text-sm border-t border-border pt-8 font-mono text-center">
        <p>git commit -m "update portfolio" © {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}