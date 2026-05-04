# Project Context: Personal Portfolio

## Project Information (專案資訊)

- **專案名稱**：Personal Portfolio / Self Page。
- **類型**：Next.js 單頁式個人網站，定位為極簡數位名片。
- **主要使用者**：網站訪客、招聘者、合作對象。
- **維護策略**：Maintenance-free 優先，內容集中於 `src/data/profile.ts`，避免日後改文字時需要理解整個 JSX 結構。
- **Codex 角色**：協助維護架構、實作功能、檢查可訪問性與視覺一致性；不得把此專案改成展示 AI 能力或複雜互動平台。

## 1. Goal (核心目標)

**目標**：建立一個極簡、風格獨特的個人網站，作為數位名片。
**關鍵字**：Minimalist (極簡), Brittany Chiang Style (雙欄佈局), Maintenance-free (易維護).
**非目標**：不展示 AI 能力，不需要複雜的互動功能或 API 串接。

## 2. Visual Style (視覺風格)

- **Theme**: **Deep Dark Mode** (左右固定分割佈局)。
- **Elements**:
  - 背景色：深色背景。
  - 強調色：Teal (`#2dd4bf`)。
  - 字體：Sans-serif (Inter/Geist)。
  - 特色：圓形頭像、導覽線條動畫、Hover 遮罩特效、Mobile Hamburger Menu。

## 3. Tech Stack (技術架構)

- **Framework**: Next.js (App Router) + TypeScript.
- **Styling**: Tailwind CSS + Shadcn UI.
- **Libs**: `react-scroll` (平滑滾動與監聽), `framer-motion` (未來動畫擴充), `lucide-react` (圖標)。
- **Data Source**: `src/data/profile.ts` (單一真理來源，包含導航配置 `navLinks`)。

## 4. Current Architecture (架構現狀)

- **頁面**: 單頁式設計 (`src/app/page.tsx`)。
- **組件系統**:
  - `ContentSection`: 通用列表渲染組件 (Projects, Books, etc.)。
  - `InfoCard`: 通用卡片組件，支援無障礙屬性 (a11y)。
  - `MobileNav`: 獨立的手機版漢堡選單組件。
  - `Sidebar`: 電腦版側邊欄，包含 `react-scroll` 整合的 Scroll Spy 導航。
- **狀態**: 已完成架構重構 (Generic Components)，實現 Scroll Spy 與響應式導航。

## 5. Next Steps (待辦事項)

- **SEO Optimization**: 實作 Metadata, Open Graph, JSON-LD (優先級高)。
- **Dynamic Section Rendering**: 考慮將 `page.tsx` 重構為全動態渲染，以提升可維護性。
- **Animations**: 引入 Framer Motion 實現進場動畫。
- **Features**: 考慮加入 PDF 履歷下載與聯絡表單。

## 6. Development Rules (開發規範)

- **Data-Driven**: 禁止在 JSX 中硬寫內容。所有文字內容與導航結構必須存放於 `src/data/profile.ts`。
- **Modularity**: 嚴格遵守單一職責原則 (SRP)。組件應保持小巧且功能單一 (如 `InfoCard`)。
- **Type Safety**: 減少硬編碼 ID，使用 `toSlug` 工具函數確保命名一致性。
- **Accessibility**: 確保所有互動元素具備 `aria-label` 或 `sr-only` 描述。
- **Architecture Integrity**: 任何重大改動前需先審視架構，確保符合專業工程規範。
- **Environment**: 嚴格使用 Tailwind CSS v3 與 Shadcn UI。
- **Visual Consistency**: 視覺調整應嚴格遵循圖片參考的「佈局比例」與「精緻度」。
- **Documentation**: 更新 `AGENTS.md` 時，僅能增修最新狀態與規則，**嚴禁刪改核心目標或重要歷史決策**，除非該決策已被完全廢棄。這份文件是與 AI 協作的唯一真理來源 (Single Source of Truth)。

## 7. Codex Workflow (Codex 開發工作流程)

每次開發分四個階段：分支與需求確認、理解需求、實作驗證、收尾交付。

### 階段零：分支與工作區確認

開始任何會修改檔案的工作前，Codex 必須先讀取：

```bash
git status --short --branch
```

分支策略參考 Drinky 專案的工作流程，但需依本專案特性調整：

- **預設不直接污染 `main`**：若任務是新功能、修 bug、SEO、視覺調整或大幅內容整理，應先建議使用 feature/fix/docs branch。
- **分支命名**：
  - 新功能：`feat/功能名稱`
  - 修 bug：`fix/問題名稱`
  - 文件：`docs/文件名稱`
  - 內容整理：`content/內容名稱`
- **例外**：若只是小幅文字修正、使用者明確要求直接改目前 branch，或目前已有使用者指定的工作分支，則可留在目前 branch，但必須先說明目前 branch 與工作區狀態。
- **保護使用者變更**：若工作區已有未提交變更，Codex 必須先辨識哪些檔案受影響，避免覆蓋或回復不是自己造成的改動。

除非使用者明確要求，Codex 不主動 commit、push、merge、刪 branch 或改寫 git history。

### 階段一：理解需求與保護架構

使用者說明要做什麼後，Codex 必須先確認改動類型：

- **內容更新**：優先修改 `src/data/profile.ts`，只有資料型別不足時才調整組件。
- **視覺調整**：先檢查 `src/app/globals.css`、Tailwind class、Shadcn UI 元件與現有版面比例，不得引入與 Deep Dark Mode 衝突的風格。
- **新區塊或新功能**：先確認是否能由 `ContentSection`、`InfoCard`、`navLinks` 擴充；不能直接在 `page.tsx` 堆疊一次性 JSX。
- **SEO / Metadata**：優先處理 `src/app/layout.tsx` 與必要的 JSON-LD；所有個人資料仍以 `src/data/profile.ts` 為來源。

重大改動前必須先審視：

- `src/data/profile.ts` 的資料模型是否足夠。
- `src/app/page.tsx` 是否仍維持單頁容器職責。
- `src/components/*` 是否符合單一職責。
- 導航 ID 是否透過 `toSlug` 或既有工具一致產生。
- 若是整理作品集，必須優先從本機 repo、GitHub repo、README、commit history 或既有成果檔案萃取可佐證內容，不得憑空誇大專案成熟度或成果數據。

### 階段二：實作與本地驗證

實作時遵守以下順序：

1. 先更新資料模型或共用工具。
2. 再更新可重用組件。
3. 最後更新頁面組裝與樣式。
4. 完成後執行驗證命令。

常用命令：

```bash
npm run dev
npm run lint
npm run build
```

驗證要求：

- 一般文字或資料更新至少執行 `npm run lint`。
- 涉及 Next.js route、metadata、image、layout、Tailwind class 大量變更時，必須執行 `npm run build`。
- 涉及 responsive navigation、Scroll Spy、MobileNav、hover/animation 時，必須說明桌面與手機版需要檢查的互動點。
- 如果命令因環境限制無法執行，必須在回覆中明確說明未驗證項目與原因。
- 若需要讓使用者實際檢查畫面，Codex 應啟動 `npm run dev` 並提供本機網址；若只是資料或文字整理，通常不需要啟動 dev server。

### 階段三：收尾交付

交付前 Codex 必須確認：

- 沒有把內容硬寫回 JSX。
- 沒有破壞 Deep Dark Mode、Teal accent、雙欄固定分割布局。
- 沒有新增不必要的 API、server action、資料庫或後端依賴。
- 沒有引入 Tailwind CSS v4 或偏離 Shadcn UI 的樣式系統。
- 所有新增互動元素都有 `aria-label`、`sr-only` 或合理的語意標籤。
- 變更摘要要簡潔說明「改了什麼、驗證了什麼、還有什麼風險」。
- 若使用者確認要合併分支，才可依序進行 merge/squash、必要文件更新、commit、刪除工作分支與 push；任何一步都不得在未確認前自動執行。
- 若本次變更新增重要架構規則、資料來源規則或驗證流程，必須同步更新 `AGENTS.md`。

## 8. Git Rules (Git 操作規則)

- Codex 可以讀取 `git status`、`git diff`、`git log` 來理解目前狀態。
- 不得使用 `git reset --hard`、`git checkout --` 或刪除使用者變更，除非使用者明確要求。
- 如果工作區已有使用者未提交變更，Codex 必須避免覆蓋，並在必要時說明哪些檔案已有變更。
- 除非使用者要求，不主動 commit、push、建立 branch 或改寫 git history。
- 若使用者要求建立 branch，命名建議：
  - 新功能：`feat/功能名稱`
  - 修 bug：`fix/問題名稱`
  - 文件：`docs/文件名稱`

## 9. File Ownership (檔案責任邊界)

- `src/data/profile.ts`：個人資料、導覽、專案、書籍、聯絡資訊的單一真理來源。
- `src/app/page.tsx`：只負責頁面結構與 section 組裝，不承載大量內容。
- `src/app/layout.tsx`：Metadata、Open Graph、全站外層設定。
- `src/app/globals.css`：全域 theme、背景、selection、scrollbar、基礎排版。
- `src/components/Sidebar.tsx`：桌面導覽、Scroll Spy、固定側欄。
- `src/components/MobileNav.tsx`：手機漢堡選單與可訪問性狀態。
- `src/components/ContentSection.tsx`：資料驅動的通用 section 渲染。
- `src/components/ui/InfoCard.tsx`：通用卡片，不應放入特定業務內容。
- `src/lib/utils.ts`：`cn`、`toSlug` 等共用工具。

## 10. Design Constraints (設計約束)

- 視覺方向必須維持極簡、成熟、低噪音。
- 允許精緻 hover、遮罩、線條動畫與進場動畫，但不得讓互動成為主角。
- 強調色固定以 Teal `#2dd4bf` 為主，不新增過多品牌色。
- 字體維持 Sans-serif，優先沿用 Inter / Geist 方向。
- Mobile First 不代表改成單欄普通模板；手機版仍需保持清楚層級與品牌感。
- 動畫若使用 Framer Motion，必須有明確目的：進場節奏、導覽狀態、內容聚焦；不得加裝飾性炫技動畫。

## 11. Documentation Rules (文件規則)

- `AGENTS.md` 是與 AI 協作的主要約束檔。
- 若新增重要架構決策、資料來源規則、驗證流程，必須同步更新本檔。
- 更新本檔時只能增修最新狀態與規則，不得刪除核心目標、視覺方向、資料驅動原則或重要歷史決策。
- 若某決策已被完全廢棄，必須明確寫出替代決策與原因，而不是靜默刪除。
