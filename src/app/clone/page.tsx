import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { original } from "@/content/original";

export const metadata: Metadata = {
  title: original.meta.title,
  description: original.meta.description,
  robots: { index: false, follow: false },
};

/** Part 1 — layout clone of the original template, rendered with its own palette. */
export default function ClonePage() {
  return <HomePage content={original} theme="original" />;
}
