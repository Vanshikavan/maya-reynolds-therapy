"use client";

import { useEffect, useState } from "react";
import type { SiteContent } from "@/content/types";

export default function Header({
  brand,
  nav,
  homeHref = "#top",
}: {
  brand: SiteContent["brand"];
  nav: SiteContent["nav"];
  homeHref?: string;
}) {
  const [open, setOpen] = useState(false);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header id="top" className="relative z-40 bg-cream">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-gutter py-6 lg:py-8">
        {/* Logo */}
        <a href={homeHref} className="block leading-none" aria-label={`${brand.name} — home`}>
          <span className="block font-heading text-[2rem] leading-none text-ink lg:text-[2.35rem]">
            {brand.name}
          </span>
          <span className="mt-1.5 block text-[0.62rem] font-normal uppercase tracking-[0.3em] text-secondary lg:text-[0.68rem]">
            {brand.tagline}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.items.map((item) => (
            <div key={item.label} className="group relative">
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
              {item.children && (
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[15rem] border border-line bg-white py-2 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]">
                    {item.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        className="block px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.14em] text-ink transition-colors hover:bg-cream"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a href={nav.cta.href} className="btn-pill ml-2 !py-2.5 !px-6 !text-[0.72rem]">
            {nav.cta.label}
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[7px] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-7 bg-ink transition-transform duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-7 bg-ink transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-cream px-gutter pt-28 transition-opacity duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile">
          {nav.items.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-heading text-3xl text-ink"
              >
                {item.label}
              </a>
              {item.children && (
                <div className="mt-3 flex flex-col gap-2 pl-4">
                  {item.children.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="text-[0.72rem] uppercase tracking-[0.14em] text-text"
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href={nav.cta.href}
            onClick={() => setOpen(false)}
            className="btn-pill mt-4 self-start"
          >
            {nav.cta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
