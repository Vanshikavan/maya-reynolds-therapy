import type { Metadata } from "next";
import { fontClassNames } from "@/lib/fonts";
import { maya } from "@/content/maya";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(maya.meta.url),
  title: maya.meta.title,
  description: maya.meta.description,
  keywords: maya.meta.keywords,
  openGraph: {
    title: maya.meta.title,
    description: maya.meta.description,
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/office-windows.jpg", width: 1500, height: 1125 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontClassNames}>
      <body>{children}</body>
    </html>
  );
}
