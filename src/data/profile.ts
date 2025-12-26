export interface Project {
  title: string;
  description: string;
  link?: string;
  tags: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  headline: string;
  about: string[]; // 支援多段落
  projects: Project[];
}

export const profileData: ProfileData = {
  name: "willybb0120",
  title: "Product Designer & Frontend Developer",
  headline: "I build accessible, pixel-perfect, and performant web experiences.",
  about: [
    "Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, and a huge corporation.",
    "My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients."
  ],
  projects: [
    {
      title: "個人介紹網頁 (Portfolio)",
      description: "使用 Next.js, TypeScript 與 Tailwind CSS 打造的極簡風格個人品牌官網，採用 Brittany Chiang 設計風格。",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    },
    {
      title: "AI 輔助開發工具",
      description: "一個整合 Gemini API 的 CLI 工具，能自動化審查代碼與生成文件。",
      tags: ["Python", "Gemini API", "CLI"],
    }
  ],
};