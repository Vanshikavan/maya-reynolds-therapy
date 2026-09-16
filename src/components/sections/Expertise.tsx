import type { SiteContent } from "@/content/types";
import { Section } from "@/components/ui";

/** Heading on the left, two-column uppercase list with hairline dividers. */
export default function Expertise({ expertise }: { expertise: SiteContent["expertise"] }) {
  const half = Math.ceil(expertise.items.length / 2);
  const cols = [expertise.items.slice(0, half), expertise.items.slice(half)];

  return (
    <Section tone="white" className="py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <h3 className="lg:col-span-3" data-reveal>
          {expertise.heading}
        </h3>
        <div className="grid gap-x-12 sm:grid-cols-2 lg:col-span-8 lg:col-start-5" data-reveal>
          {cols.map((col, i) => (
            <ul key={i} className="text-[0.78rem] uppercase tracking-[0.14em] text-ink">
              {col.map((item, j) => {
                const last = i === cols.length - 1 && j === col.length - 1;
                return (
                  <li
                    key={item}
                    className={`py-4 ${last ? "" : "border-b border-line"} ${
                      i === 0 && j === col.length - 1 ? "sm:border-b-0" : ""
                    }`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </Section>
  );
}
