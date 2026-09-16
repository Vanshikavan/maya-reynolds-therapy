import type { SiteContent } from "@/content/types";
import { Photo, Section } from "@/components/ui";

export default function Intro({ intro }: { intro: SiteContent["intro"] }) {
  return (
    <Section tone="cream" className="pb-20 pt-4 lg:pb-32 lg:pt-10" innerClassName="lg:!pr-0">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-7">
          <h2 className="max-w-2xl" data-reveal>
            {intro.heading}
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:mt-16 lg:gap-12">
            <div data-reveal>
              <p className="eyebrow mb-5">{intro.lead}</p>
              <p>{intro.left}</p>
            </div>
            {/* Below lg the image sits between the two paragraphs, as on the original mobile layout */}
            <Photo
              img={intro.img}
              sizes="100vw"
              className="aspect-[4/3] w-full md:col-span-2 lg:hidden"
              imgClassName={intro.imgPosition ?? ""}
            />
            <p data-reveal>{intro.right}</p>
          </div>
        </div>
        {/* Desktop: image bleeds to the right edge */}
        <div className="hidden lg:col-span-4 lg:col-start-9 lg:block lg:pt-2">
          <Photo
            img={intro.img}
            sizes="34vw"
            className="aspect-[5/6] w-full"
            imgClassName={intro.imgPosition ?? ""}
          />
        </div>
      </div>
    </Section>
  );
}
