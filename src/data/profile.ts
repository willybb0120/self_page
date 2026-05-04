// === 新版專業級資料結構 ===
export interface ProjectDetails {
  // Hero Section
  coverImage?: string;

  // Overview (價值主張)
  problem: string;
  solution: string;
  impact: string;

  // Key Metrics (量化成果)
  metrics: {
    label: string;
    value: string;
    comparison?: string;
  }[];

  // Technical Deep Dive (技術細節)
  methodology: {
    dataset?: string;
    architecture: string[];
    implementation: string[];
    challenges: string[];
  };

  // Results & Validation (驗證層)
  results: {
    images: { src: string; caption: string; type?: "architecture" | "result" | "demo" | "analysis" }[];
    performanceTable?: {
      headers: string[];
      rows: string[][];
    };
    hardware?: {
      lut: string;
      dsp: string;
      bram: string;
      freq: string;
    };
  };

  // Insights & Learnings (反思層)
  insights: string[];

  // Links
  links?: {
    github?: string;
    paper?: string;
    demo?: string;
  };
}

// === 舊版結構（向下相容） ===
export interface Project {
  title: string;
  description: string;
  link?: string;
  tags: string[];
  subtitle?: string;
  highlights?: string[];
  slug?: string;
  details?: ProjectDetails; // 升級為新版結構
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
  title: "Electronic Engineer & FPGA Developer",
  headline: "專注於實作與硬體加速的電子工程師，熱衷於解決實際問題與自動化流程。",
  about: [
    "目前就讀於逢甲大學電子工程學系，專注於實驗室專題研究與硬體系統開發。作為實作導向的工程師，擅長將理論轉化為可運作的系統原型。",
    "我的專業主攻 FPGA 系統設計、神經網路硬體加速器與 VLSI 晶片設計，能夠將複雜的演算法移植到硬體電路中，實現高效能運算。此外，我對 AI Prompt 工程與自動化腳本也有濃厚興趣，習慣觀察日常流程中的痛點，開發工具來解決效率問題。"
  ],
  navLinks: ["About", "Projects", "Side Projects", "Certificates", "Activities", "Books"],
  projects: [
    {
      title: "心臟指數 ANN 預測系統 FPGA 硬體化",
      description: "將軟體端的類神經網路 (ANN) 演算法移植至 FPGA 硬體平台，實現心臟指數的即時預測，展現軟硬體協同設計能力。",
      tags: ["FPGA", "Verilog/VHDL", "ANN", "Biomedical Signal Processing", "Hardware AI"],
      subtitle: "Lab Research | 2025-2026",
      link: "/projects/heart-ci",
      slug: "heart-ci",
      highlights: [
        "超低延遲: 62 μs 端到端推論時間，滿足即時監測需求",
        "資源高效: 僅使用 3.7% LUT, 4.55% DSP，實現雙網路推論",
        "高穩定性: 延遲變異 < 0.5%，無離群值，適合即時系統"
      ],
      details: {
        // Overview (價值主張)
        problem: "傳統醫療監測設備在進行心臟指數預測時，往往依賴軟體運算，導致延遲過高（毫秒級以上），無法滿足即時監控與緊急診斷的需求。此外，高功耗的 CPU 方案不適合應用於穿戴式裝置或邊緣運算場景。",
        solution: "採用 FPGA 硬體加速技術，將雙層 ANN 神經網路（NET1: CO 預測, NET2: CI 預測）移植至 Xilinx Zynq-7020 平台。透過定點數量化（Q8.16）與 Pipeline 架構設計，實現微秒級推論延遲（62 μs），同時將加速器功耗控制在 0.018W。",
        impact: "此系統可應用於穿戴式心臟監測設備或手術室即時監控，為智慧醫療提供低延遲、低功耗的邊緣 AI 解決方案。相較於純軟體方案，硬體加速器在保持高準確度（MAPE < 1%）的前提下，大幅提升即時性與能效比。",

        // Key Metrics (量化成果)
        metrics: [
          { label: "推論延遲", value: "62 μs", comparison: "End-to-End (含 PS-PL 通訊)" },
          { label: "吞吐量", value: "16,129 inf/sec", comparison: "理論上限 16,239 inf/sec" },
          { label: "功耗", value: "0.018 W", comparison: "僅加速器 (系統總功耗 1.558W)" },
          { label: "準確度", value: "MAPE 0.75%", comparison: "vs MATLAB 浮點運算" },
          { label: "資源效率", value: "LUT 3.7%", comparison: "DSP 4.55%, BRAM 1.43%" },
          { label: "能耗/推論", value: "1.12 μJ", comparison: "僅加速器邏輯" }
        ],

        // Technical Deep Dive (技術細節)
        methodology: {
          dataset: "實驗室自行收集的 ECG 衍生特徵資料集，50 筆測試樣本（Warm-up 10 次 + 測試 50 次）。輸入特徵包含心率 (HR)、心搏指數 (SVI)、心輸出量 (CO)。",
          architecture: [
            "雙層神經網路架構: NET1 (2→20→15→10→1) 用於 CO 預測，NET2 (3→25→20→12→1) 用於 CI 預測",
            "定點數量化: Q8.16 格式（25-bit signed），整數部分 8 bits，小數部分 16 bits，精度 1/65536 ≈ 0.0000153",
            "硬體平台: Digilent Zybo Z7-20 (Xilinx Zynq-7020), Dual-core ARM Cortex-A9 @ 667 MHz",
            "時脈設計: PL 邏輯運行於 50 MHz (FCLK_CLK0)，時序餘量 WNS = 5.240 ns"
          ],
          implementation: [
            "Pipeline 設計: 將神經網路推論拆解為多階段流水線，總延遲 3,079 cycles (NET1: 1,187 cycles, NET2: 1,892 cycles)",
            "AXI-Lite 介面: PS-PL 通訊透過 AXI-Lite 協定，開銷僅 5 cycles (< 1%)，幾乎無額外延遲",
            "MAC 運算單元: 採用 DSP48E1 硬體乘法器實現矩陣運算，共使用 10 個 DSP 單元",
            "權重儲存: 使用 2 個 BRAM (36Kb) 儲存神經網路權重與偏置"
          ],
          challenges: [
            "時序收斂問題: 初期使用全組合邏輯導致 Timing Violation，改為引入 Pipeline 與狀態機設計後成功收斂",
            "定點數精度權衡: 在資源節約與運算精度間取得平衡，最終選擇 Q8.16 格式達成 MAPE < 1%",
            "資源優化: 將 Normalization 模組位寬從 64×64 乘法優化為 25×32 乘法，DSP 使用量減少 61.5%"
          ]
        },

        // Results & Validation (驗證層)
        results: {
          images: [
            {
              src: "/images/ci_error_comparison.png",
              caption: "精度驗證：FPGA 硬體輸出與 MATLAB 黃金模型的高度吻合，證明定點數量化的正確性。",
              type: "result"
            },
            {
              src: "/images/fixed_point_16bit_mean_error.png",
              caption: "定點數誤差分析：Q8.16 格式在精度與硬體資源之間取得穩定平衡。",
              type: "analysis"
            }
          ],
          performanceTable: {
            headers: ["測量方式", "延遲", "說明"],
            rows: [
              ["RTL Simulation (50 MHz)", "61.58 μs", "純 PL 硬體邏輯"],
              ["硬體實測", "62 μs", "包含 PS-PL 通訊"],
              ["PS-PL 開銷", "~0.42 μs", "AXI-Lite 讀寫 + 輪詢"],
              ["開銷比例", "~1.007x", "幾乎無額外開銷"]
            ]
          },
          hardware: {
            lut: "1,970 / 53,200 (3.70%)",
            dsp: "10 / 220 (4.55%)",
            bram: "2 / 140 (1.43%)",
            freq: "50 MHz (WNS = 5.240 ns)"
          }
        },

        // Insights & Learnings (反思層)
        insights: [
          "硬體設計思維的轉變：從全組合邏輯到 Pipeline 設計，學會將演算法拆解為多階段時序邏輯，這是 FPGA 設計的核心技能。",
          "定點數量化的工程方法：透過 Fixed-Point Analysis 預先評估不同 Q 格式的誤差分布，避免盲目試錯，此方法可遷移至其他硬體 AI 專案。",
          "SoC 系統整合能力：掌握 PS-PL 協同設計、AXI 協定、IP Integrator 等工具鏈，能夠獨立完成從 RTL 到系統整合的完整流程。",
          "資源優化的實戰經驗：透過位寬優化將 DSP 使用量減少 61.5%，證明在硬體設計中，細節決定成敗。"
        ],

        // Links (預留)
        links: {
          // github: "https://github.com/willybb0120/heart-ci-fpga", // TODO: 整理後上傳
        }
      }
    },
    {
      title: "足部特徵點辨識 FPGA 硬體化",
      description: "利用 FPGA 的平行運算優勢，加速足部影像的特徵點識別運算，應用於邊緣運算 (Edge AI) 場景。",
      tags: ["FPGA", "Image Processing", "Feature Extraction", "Edge AI"],
      subtitle: "Lab Research",
      highlights: [
        "即時性: 實現高 FPS 的即時影像處理",
        "硬體架構: 採用 Pipeline 設計優化資料流"
      ]
    }
  ],
  sideProjects: [
    {
      title: "ESP32 加密貨幣行情顯示器",
      description: "結合嵌入式系統與金融 API，在低成本硬體上實現即時 K 線圖顯示，展現軟硬體整合與使用者體驗設計能力。",
      link: "https://github.com/willybb0120/esp32-crypto-tft-ticker",
      tags: ["ESP32", "C++", "PlatformIO", "Binance API", "Embedded Systems"],
      subtitle: "Side Project | 2025",
      highlights: [
        "即時資料視覺化: 整合 Binance API，即時繪製 K 線圖、市場情緒指標與大戶多空比",
        "極低成本: 整套硬體僅需 $10-15 USD，包含 ESP32 + TFT 螢幕 + 按鈕模組",
        "專業 UX 設計: QR Code WiFi 設定 + Skeleton Screen 載入體驗 + 狀態機架構"
      ]
    },
    {
      title: "個人介紹網頁 (Portfolio)",
      description: "實踐「工程師 2.0」的高效開發模式。不滿足於手寫重複性代碼的低效流程，透過 AI 工具大幅縮短實作時間，將精力集中於架構設計與使用者體驗的打磨。",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini CLI", "Shadcn UI"],
      subtitle: "Side Project",
      highlights: [
        "跨領域技術深耕: 結合電子系背景，將軟體開發視為系統整合，掌握現代化前端架構",
        "AI 驅動的極速開發: 扮演「架構師」角色，利用 AI 快速生成代碼，專注於邏輯審查與決策",
        "極致細節: 堅持手動調校 Shadcn UI 的互動體驗與 RWD 響應式佈局"
      ]
    },
    {
      title: "醫療影像資料自動化爬蟲",
      description: "開發自動化腳本，解決實驗室手動下載大量醫療影像的繁瑣流程，大幅降低重複性人力成本。",
      tags: ["Python", "Selenium", "Web Scraping", "Automation"],
      subtitle: "Side Project",
      highlights: [
        "效率提升: 將原本需花費數小時的人工下載流程，縮短至分鐘級自動完成",
        "實用價值: 成功協助實驗室自動化處理資料抓取任務"
      ]
    },
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
