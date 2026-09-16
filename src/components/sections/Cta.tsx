import type { SiteContent } from "@/content/types";
import { Eyebrow, Photo, PillButton, Section } from "@/components/ui";

/** Centered copy with a small photo peeking in bottom-left and a tall one flush right. */
export default function Cta({ cta, id }: { cta: SiteContent["cta"]; id?: string }) {
  return (
    <Section id={id} tone="cream" className="py-20 lg:py-24" innerClassName="lg:!px-0">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-8">
        {/* bottom-left photo, desktop only */}
        <div className="hidden lg:col-span-2 lg:flex lg:items-end lg:pt-40">
          <Photo img={cta.imgLeft} sizes="14vw" className="aspect-[3/5] w-full" />
        </div>

        <div className="lg:col-span-5 lg:col-start-3 lg:pt-6 lg:pl-[3vw]">
          <Eyebrow data-reveal>{cta.eyebrow}</Eyebrow>
          <h2 className="mt-8 lg:mt-12" data-reveal>
            {cta.heading}
          </h2>
          <div className="mt-8 space-y-5" data-reveal>
            {cta.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="mt-8" data-reveal>
            <PillButton href={cta.button.href}>{cta.button.label}</PillButton>
          </div>
        </div>

        <div className="-mr-gutter lg:col-span-4 lg:col-start-9 lg:mr-0">
          <Photo
            img={cta.imgRight}
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="aspect-[4/3] w-full lg:aspect-[7/8]"
          />
        </div>
      </div>
    </Section>
  );
}
