import type { SiteContent } from "@/content/types";
import { LineButton, Section } from "@/components/ui";

/** Heading left, 2×2 grid of text cards with "learn more" links. */
export default function Specialties({
  specialties,
  id,
}: {
  specialties: SiteContent["specialties"];
  id?: string;
}) {
  return (
    <Section id={id} tone="white" className="py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <h3 className="lg:col-span-3" data-reveal>
          {specialties.heading}
        </h3>
        <div className="grid gap-y-14 md:grid-cols-2 md:gap-x-12 lg:col-span-8 lg:col-start-5 lg:gap-y-20">
          {specialties.cards.map((c) => (
            <article key={c.title} data-reveal>
              <h4>{c.title}</h4>
              <p className="mt-5 text-[0.95rem]">{c.body}</p>
              {c.cta && c.href && (
                <div className="mt-4">
                  <LineButton href={c.href}>{c.cta}</LineButton>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
