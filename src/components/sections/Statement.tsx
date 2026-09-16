import type { SiteContent } from "@/content/types";
import { Photo, Section } from "@/components/ui";

/** Photo flush-left, large statement heading bottom-aligned on the right. */
export default function Statement({ statement }: { statement: SiteContent["statement"] }) {
  return (
    <Section tone="white" className="pb-20 pt-4 lg:pb-28 lg:pt-8" innerClassName="lg:!pl-0">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
        <div className="-ml-gutter lg:col-span-6 lg:ml-0">
          <Photo
            img={statement.img}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/3] w-full lg:aspect-[16/11]"
          />
        </div>
        <div className="flex items-end lg:col-span-5 lg:col-start-8 lg:pb-2">
          <h2 data-reveal>{statement.heading}</h2>
        </div>
      </div>
    </Section>
  );
}
