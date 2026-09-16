import type { SiteContent } from "@/content/types";

export default function Footer({
  brand,
  footer,
}: {
  brand: SiteContent["brand"];
  footer: SiteContent["footer"];
}) {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1800px] px-gutter pb-20 pt-16 lg:pb-24 lg:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand + blurb */}
          <div className="lg:col-span-4">
            <p className="font-heading text-[2.4rem] leading-none text-ink lg:text-[2.8rem]">
              {brand.name}
            </p>
            <p className="mt-2 text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
              {brand.tagline}
            </p>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-[1.9]">{footer.blurb}</p>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="eyebrow mb-4">{col.title}</p>
              <ul className="space-y-1.5 text-[0.95rem]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="transition-colors hover:text-ink">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-3 lg:col-start-10">
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-1.5 text-[0.95rem]">
              {footer.contact.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="mt-5 text-[0.95rem] italic leading-[1.9]">{footer.contact.note}</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-primary text-on-dark">
        <div className="mx-auto flex max-w-[1800px] flex-wrap items-center gap-x-2 gap-y-1 px-gutter py-4 text-[0.82rem]">
          {footer.legal.map((l, i) => (
            <span key={l.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>|</span>}
              <a href={l.href} className="hover:underline">
                {l.label}
              </a>
            </span>
          ))}
          <span aria-hidden>|</span>
          <span>{footer.credit}</span>
        </div>
      </div>
    </footer>
  );
}
