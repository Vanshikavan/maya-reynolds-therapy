import type { SiteContent } from "@/content/types";
import { Photo, Section } from "@/components/ui";

/** Three-column "who we help" grid with a heading offset to the left. */
export default function Help({ help, id }: { help: SiteContent["help"]; id?: string }) {
  return (
    <Section id={id} tone="white" className="py-20 lg:py-28">
      <h2 data-reveal>{help.heading}</h2>
      <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-6 lg:ml-[10%] lg:mt-14 lg:gap-6">
        {help.cards.map((c) => (
          <article key={c.title} data-reveal>
            {c.img && (
              <Photo img={c.img} sizes="(min-width: 768px) 28vw, 100vw" className="aspect-[7/8] w-full" />
            )}
            <h4 className="mt-8">{c.title}</h4>
            <p className="mt-4 text-[0.95rem]">{c.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
