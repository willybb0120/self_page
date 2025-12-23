import { profileData } from "@/data/profile";
import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* 模組化後的 Hero 區塊 */}
      <HeroSection profile={profileData} />

      {/* 專案列表區塊 */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8">精選專案</h2>
        <div className="grid gap-6">
          {profileData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* 書籍區塊 (未來可繼續拆分) */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8">正在閱讀或推薦的書籍</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
          {profileData.books.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </section>

      <footer className="max-w-4xl mx-auto py-20 px-6 text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} {profileData.name}. Built with Next.js & AI.
      </footer>
    </main>
  );
}
