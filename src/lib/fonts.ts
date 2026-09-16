import { Cormorant_Garamond, Mulish, Corinthia } from "next/font/google";

// Heading serif — closest open alternative to the original's Beaufort Pro.
export const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--ff-heading",
  display: "swap",
});

// Body sans — Mulish is the current name of "Muli", which the original uses.
export const body = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--ff-body",
  display: "swap",
});

// Thin monoline script for the single highlighted word in headings.
export const script = Corinthia({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--ff-script",
  display: "swap",
});

export const fontClassNames = `${heading.variable} ${body.variable} ${script.variable}`;
