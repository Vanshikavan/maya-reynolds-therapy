import Image from "next/image";
import type { SiteContent } from "@/content/types";

/** Full-width photo banner with a dark tint and a large quote. */
export default function Banner({ banner }: { banner: SiteContent["banner"] }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-on-dark">
      <Image
        src={banner.img.src}
        alt={banner.img.alt}
        fill
        sizes="100vw"
        className="object-cover opacity-60"
      />
      {/* tint uses the primary tone so the banner sits inside the palette */}
      <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" aria-hidden />
      <div className="relative mx-auto flex min-h-[26rem] max-w-[1800px] items-center px-gutter py-24 lg:min-h-[30rem]">
        <h2 className="max-w-3xl !text-on-dark" data-reveal>
          {banner.heading}
        </h2>
      </div>
    </section>
  );
}
