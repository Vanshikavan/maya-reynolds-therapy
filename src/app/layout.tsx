import type { Metadata } from "next";
import { fontClassNames } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling (Clone)",
  description: "Homepage layout clone built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontClassNames}>
      <body>{children}</body>
    </html>
  );
}
