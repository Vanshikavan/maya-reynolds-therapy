"use client";

import { useState } from "react";
import type { SiteContent } from "@/content/types";
import { Section } from "@/components/ui";

/** Accordion styled like the original's uppercase, hairline-divided lists. */
export default function Faq({ faq, id }: { faq: NonNullable<SiteContent["faq"]>; id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id={id} tone="white" className="py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <h3 className="lg:col-span-3" data-reveal>
          {faq.heading}
        </h3>
        <div className="border-t border-line lg:col-span-8 lg:col-start-5" data-reveal>
          {faq.items.map((item, i) => {
            const open = openIndex === i;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={item.q} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left text-[0.78rem] uppercase tracking-[0.14em] text-ink"
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className={`relative h-4 w-4 shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                  >
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink" />
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink" />
                  </span>
                </button>
                <div
                  id={panelId}
                  className={`grid transition-[grid-template-rows] duration-400 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 text-[0.95rem]">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
