import HomePage from "@/components/HomePage";
import { maya } from "@/content/maya";

/** LocalBusiness / Psychologist structured data for local SEO. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: "Dr. Maya Reynolds, PsyD",
  description: maya.meta.description,
  url: maya.meta.url,
  image: `${maya.meta.url}/images/maya-reynolds.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "123th Street 45 W",
    addressLocality: "Santa Monica",
    addressRegion: "CA",
    postalCode: "90401",
    addressCountry: "US",
  },
  areaServed: ["Santa Monica, CA", "Los Angeles Westside", "California (telehealth)"],
  medicalSpecialty: "Psychiatric",
  knowsAbout: ["Anxiety", "Panic", "Trauma", "EMDR", "Burnout", "Perfectionism", "CBT"],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage content={maya} />
    </>
  );
}
