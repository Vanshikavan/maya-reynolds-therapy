import type { SiteContent } from "@/content/types";
import { Eyebrow, LineButton, Photo, Section } from "@/components/ui";

/** Warm "sand" band: eyebrow, heading, two text columns and a tall photo bleeding right. */
export default function Approach({ approach, id }: { approach: SiteContent["approach"]; id?: string }) {
  return (
    <Section id={id} tone="sand" className="py-20 lg:py-0" innerClassName="lg:!pr-0">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-8 lg:py-28 lg:pr-[4vw]">
          <Eyebrow data-reveal>{approach.eyebrow}</Eyebrow>
          <h2 className="mt-6" data-reveal>
            {approach.heading}
          </h2>

          {/* Mobile-only photo between heading and body text, as on the original */}
          <Photo
            img={approach.img}
            sizes="100vw"
            className="mt-10 aspect-[4/5] w-full lg:hidden"
            imgClassName="object-top"
          />

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:mt-14 lg:gap-10">
            <div data-reveal>
              <p className="eyebrow mb-5">{approach.lead}</p>
              <p className="text-[0.95rem]">{approach.left}</p>
            </div>
            <p className="text-[0.95rem]" data-reveal>
              {approach.right}
            </p>
          </div>
          <div className="mt-10" data-reveal>
            <LineButton href={approach.cta.href}>{approach.cta.label}</LineButton>
          </div>
        </div>

        <div className="hidden lg:col-span-3 lg:col-start-10 lg:block lg:pt-28">
          <Photo img={approach.img} sizes="26vw" className="aspect-[3/4] w-full" imgClassName="object-top" />
        </div>
      </div>
    </Section>
  );
}
