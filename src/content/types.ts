import type { ReactNode } from "react";

export type Img = { src: string; alt: string };

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export type Card = {
  title: string;
  body: string;
  img?: Img;
  href?: string;
  cta?: string;
};

export type Faq = { q: string; a: string };

export type SiteContent = {
  meta: {
    title: string;
    description: string;
    url: string;
    keywords: string[];
  };
  brand: { name: string; tagline: string };
  nav: { items: NavItem[]; cta: { label: string; href: string } };

  hero: {
    eyebrow: string;
    heading: ReactNode;
    sub: string;
    cta: { label: string; href: string };
    imgMain: Img;
    imgSide: Img;
  };

  intro: {
    heading: ReactNode;
    lead: string;
    left: string;
    right: string;
    img: Img;
    /** optional Tailwind object-position class for the intro photo */
    imgPosition?: string;
  };

  help: {
    heading: ReactNode;
    cards: Card[];
  };

  banner: { heading: ReactNode; img: Img };

  expertise: { heading: ReactNode; items: string[] };

  approach: {
    eyebrow: string;
    heading: ReactNode;
    lead: string;
    left: string;
    right: string;
    cta: { label: string; href: string };
    img: Img;
  };

  statement: { heading: ReactNode; img: Img };

  specialties: { heading: ReactNode; cards: Card[] };

  /** New custom section — only present on the redesign. */
  office?: {
    eyebrow: string;
    heading: ReactNode;
    body: string[];
    details: { label: string; value: string }[];
    images: Img[];
  };

  /** FAQ — only present on the redesign. */
  faq?: { heading: ReactNode; items: Faq[] };

  cta: {
    eyebrow: string;
    heading: ReactNode;
    body: string[];
    button: { label: string; href: string };
    imgLeft: Img;
    imgRight: Img;
  };

  footer: {
    blurb: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    contact: { lines: string[]; note: string };
    legal: { label: string; href: string }[];
    credit: string;
  };
};
