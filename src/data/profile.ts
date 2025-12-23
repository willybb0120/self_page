export interface Project {
  title: string;
  description: string;
  link?: string;
  tags: string[];
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface ProfileData {
  name: string;
  role: string;
  bio: string;
  projects: Project[];
  achievements: Achievement[];
  certifications: Certification[];
  books: string[];
}

export const profileData: ProfileData = {
  name: "willybb0120",
  role: "Full Stack Developer / AI Enthusiast",
  bio: "熱衷於探索新技術與 AI 應用的開發者，致力於打造高品質、高擴充性的軟體解決方案。",
  projects: [
    {
      title: "個人介紹網頁",
      description: "使用 Next.js, TypeScript 與 Tailwind CSS 打造的個人品牌官網。",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    }
  ],
  achievements: [],
  certifications: [],
  books: ["Deep Work - Cal Newport", "Clean Code - Robert C. Martin"],
};
