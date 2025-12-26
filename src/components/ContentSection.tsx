import { InfoCard } from "@/components/ui/InfoCard";

export interface ContentItem {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  subtitle?: string;
}

interface ContentSectionProps {
  title: string;
  id: string;
  items: ContentItem[];
}

export function ContentSection({ title, id, items }: ContentSectionProps) {
  return (
    <section id={id} className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sticky lg:top-0 lg:-mx-24 lg:w-auto lg:px-24 lg:py-5 lg:backdrop-blur">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white">{title}</h2>
      </div>
      <div className="group/list">
        {items.map((item, index) => (
          <InfoCard
            key={index}
            title={item.title}
            description={item.description}
            tags={item.tags}
            link={item.link}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </section>
  );
}
