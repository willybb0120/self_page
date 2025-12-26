import { profileData } from "@/data/profile";
import { Sidebar } from "@/components/Sidebar";
import { AboutSection } from "@/components/AboutSection";
import { ProjectList } from "@/components/ProjectList";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-teal-300 selection:text-teal-900">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* 左側固定欄 */}
          <Sidebar profile={profileData} />

          {/* 右側內容欄 */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <AboutSection about={profileData.about} />
            <ProjectList projects={profileData.projects} />
            
            <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
               <p className="text-muted-foreground text-sm">
                  {/* Contact placeholder, can be expanded later */}
                  Designed loosely on Brittany Chiang's portfolio. Built with Next.js & Tailwind CSS.
               </p>
             </section>
          </main>

        </div>
      </div>
    </div>
  );
}
