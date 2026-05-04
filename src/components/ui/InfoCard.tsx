import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface InfoCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  subtitle?: string; // e.g. "Recent" or "2024 - Present"
  highlights?: string[]; // 雖然詳情頁會用到，但這裡保留介面相容性，暫不顯示
}

export function InfoCard({ title, description, tags, link, subtitle }: InfoCardProps) {
  // 判斷是否為內部連結 (以 / 開頭)
  const isInternal = link?.startsWith("/");
  const isExternal = link && !isInternal;

  const CardContent = (
    <>
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      
      {/* Subtitle / Metadata */}
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">
        {subtitle || "Recent"}
      </header>
      
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-white">
          <div>
            <span className="inline-flex items-baseline font-medium leading-tight text-white hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {title}
                {isExternal && (
                  <span className="inline-block">
                    <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1" />
                  </span>
                )}
                {isInternal && (
                  <span className="inline-block ml-1 text-xs opacity-70 group-hover/link:translate-x-1 transition-transform">
                    →
                  </span>
                )}
              </span>
            </span>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal text-muted-foreground">
          {description}
        </p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {tags.map((tag) => (
            <li key={tag} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                {tag}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <div className="group relative grid mb-12 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      {link ? (
        isInternal ? (
          <Link href={link} className="contents">
            {CardContent}
          </Link>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="contents"
            aria-label={`${title} (opens in a new tab)`}
          >
            {CardContent}
          </a>
        )
      ) : (
        <div className="contents">{CardContent}</div>
      )}
    </div>
  );
}
