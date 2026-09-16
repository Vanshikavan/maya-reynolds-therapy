import type { SiteContent } from "@/content/types";
import { Eyebrow, Photo, Section } from "@/components/ui";

/**
 * Part 3 — new "Our Office" section. Not in the original template.
 * Reuses the site's grid, eyebrow/heading pattern, hairline detail list
 * and photo treatment so it reads as part of the same system.
 */
export default function Office({ office, id }: { office: NonNullable<SiteContent["office"]>; id?: string }) {
  const [primary, secondary] = office.images;

  return (
    <Section id={id} tone="cream" className="py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-10">
        {/* Copy */}
        <div className="lg:col-span-5">
          <Eyebrow data-reveal>{office.eyebrow}</Eyebrow>
          <h2 className="mt-6" data-reveal>
            {office.heading}
          </h2>
          <div className="mt-8 space-y-5 text-[0.95rem]" data-reveal>
            {office.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <dl className="mt-10 border-t border-line" data-reveal>
            {office.details.map((d) => (
              <div
                key={d.label}
                className="grid gap-1 border-b border-line py-4 sm:grid-cols-[7rem_1fr] sm:gap-6"
              >
                <dt className="pt-1 text-[0.72rem] uppercase tracking-[0.14em] text-ink">{d.label}</dt>
                <dd className="text-[0.95rem]">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Photos — wide room shot, second view tucked beneath and pulled right */}
        <div className="grid grid-cols-12 gap-4 self-start lg:col-span-7 lg:col-start-6 lg:gap-6" data-reveal>
          <Photo
            img={primary}
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="col-span-12 aspect-[16/10]"
          />
          <Photo
            img={secondary}
            sizes="(min-width: 1024px) 28vw, 60vw"
            className="col-span-7 col-start-6 aspect-[4/3]"
          />
        </div>
      </div>
    </Section>
  );
}
