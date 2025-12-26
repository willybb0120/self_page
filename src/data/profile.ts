export interface Project {
  title: string;
  description: string;
  link?: string;
  tags: string[];
  subtitle?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  headline: string;
  about: string[]; // 支援多段落
  projects: Project[];
  sideProjects: Project[];
  certificates: Project[];
  activities: Project[];
  books: Project[];
  navLinks: string[];
}

export const profileData: ProfileData = {
  name: "willybb0120",
  title: "Product Designer & Frontend Developer",
  headline: "I build accessible, pixel-perfect, and performant web experiences.",
  about: [
    "Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, and a huge corporation.",
    "My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients."
  ],
  navLinks: ["About", "Projects", "Side Projects", "Certificates", "Activities", "Books"],
  projects: [
    {
      title: "個人介紹網頁 (Portfolio)",
      description: "使用 Next.js, TypeScript 與 Tailwind CSS 打造的極簡風格個人品牌官網，採用 Brittany Chiang 設計風格。",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      subtitle: "Recent"
    },
    {
      title: "AI 輔助開發工具",
      description: "一個整合 Gemini API 的 CLI 工具，能自動化審查代碼與生成文件。",
      tags: ["Python", "Gemini API", "CLI"],
      subtitle: "Recent"
    }
  ],
  sideProjects: [
    {
      title: "記帳小幫手 Bot",
      description: "一個基於 Line Bot API 的記帳機器人，能透過自然語言記錄每日花費。",
      tags: ["Node.js", "Line API", "MongoDB"],
      subtitle: "Side Project"
    }
  ],
  certificates: [
    {
      title: "Google Cloud Professional Architect",
      description: "獲得 Google Cloud 認證，具備設計與管理雲端架構的能力。",
      tags: ["GCP", "Cloud", "Architecture"],
      subtitle: "2024"
    }
  ],
  activities: [
    {
      title: "COSCUP 2024",
      description: "參與開源人年會，分享關於 AI 輔助開發的實務經驗。",
      tags: ["Speaker", "Open Source", "AI"],
      subtitle: "2024"
    }
  ],
  books: [
    {
      title: "Clean Code",
      description: "軟體工程師必讀經典，學習如何撰寫易於維護與閱讀的程式碼。",
      tags: ["Software Engineering", "Best Practices"],
      subtitle: "Robert C. Martin"
    }
  ]
};