import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 將字串轉換為一致的 kebab-case ID (例如: "Side Projects" -> "side-projects")
 */
export function toSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // 空格換成 -
    .replace(/[^\w-]+/g, '')  // 移除特殊字元
}
