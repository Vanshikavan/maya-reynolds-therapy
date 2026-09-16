import type { SiteContent } from "@/content/types";
import { Eyebrow, LineButton, Photo, Section } from "@/components/ui";

export default function Hero({ hero }: { hero: SiteContent["hero"] }) {
  return (
    <Section tone="cream" className="pt-4 pb-16 lg:pb-24" innerClassName="lg:!pr-0">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
        {/* Text — on desktop sits right of the tall image */}
        <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-6 lg:pt-6 lg:pr-[3vw]">
          <Eyebrow className="max-w-[22rem]" data-reveal>
            {hero.eyebrow}
          </Eyebrow>
          <h1 className="mt-10 lg:mt-[7.5rem]" data-reveal>
            {hero.heading}
          </h1>
          <p className="mt-6 max-w-xl" data-reveal>
            {hero.sub}
          </p>
          <div className="mt-6" data-reveal>
            <LineButton href={hero.cta.href}>{hero.cta.label}</LineButton>
          </div>
        </div>

        {/* Main image — flush to the left edge */}
        <div className="order-2 lg:order-1 lg:col-span-4 lg:col-start-1 -ml-gutter lg:mt-4">
          <div className="-mr-gutter flex items-start gap-4 lg:mr-0 lg:block">
            <Photo
              img={hero.imgMain}
              priority
              sizes="(min-width: 1024px) 34vw, 75vw"
              className="aspect-[6/7] w-[68%] lg:w-[94%] lg:aspect-[43/50]"
            />
            {/* On mobile the second image sits beside the first, like the original */}
            <Photo
              img={hero.imgSide}
              sizes="30vw"
              className="mt-10 aspect-[2/3] flex-1 lg:hidden"
            />
          </div>
        </div>

        {/* Side sliver image — flush to the right edge on desktop */}
        <div className="hidden lg:order-3 lg:col-span-1 lg:col-start-12 lg:block lg:pt-[11rem]">
          <Photo img={hero.imgSide} sizes="10vw" className="h-[24rem] w-full" />
        </div>
      </div>
    </Section>
  );
}
