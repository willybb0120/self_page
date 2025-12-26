import { profileData } from "@/data/profile";
import { Sidebar } from "@/components/Sidebar";
import { AboutSection } from "@/components/AboutSection";
import { ContentSection } from "@/components/ContentSection";
import { MobileNav } from "@/components/MobileNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-teal-300 selection:text-teal-900">
      <MobileNav navLinks={profileData.navLinks} />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* 左側固定欄 */}
          <Sidebar profile={profileData} />

          {/* 右側內容欄 */}
          <main id="content" className="pt-12 lg:w-1/2 lg:py-24">
            <AboutSection about={profileData.about} />
            
            <ContentSection 
              title="Projects" 
              id="projects" 
              items={profileData.projects} 
            />
            
            <ContentSection 
              title="Side Projects" 
              id="side-projects" 
              items={profileData.sideProjects} 
            />

            <ContentSection 
              title="Certificates" 
              id="certificates" 
              items={profileData.certificates} 
            />

            <ContentSection 
              title="Activities" 
              id="activities" 
              items={profileData.activities} 
            />

            <ContentSection 
              title="Books" 
              id="books" 
              items={profileData.books} 
            />
            
            <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 pb-96">
               {/* Contact content goes here */}
             </section>

             <footer className="pb-0 mb-0 text-muted-foreground text-sm">
                <p>
                  Designed loosely on Brittany Chiang&apos;s portfolio. Built with Next.js &amp; Tailwind CSS.
                </p>
             </footer>
          </main>

        </div>
      </div>
    </div>
  );
}
