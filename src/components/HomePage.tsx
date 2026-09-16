import type { SiteContent } from "@/content/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Help from "@/components/sections/Help";
import Banner from "@/components/sections/Banner";
import Expertise from "@/components/sections/Expertise";
import Approach from "@/components/sections/Approach";
import Statement from "@/components/sections/Statement";
import Specialties from "@/components/sections/Specialties";
import Cta from "@/components/sections/Cta";

/**
 * The homepage layout, in the original template's section order.
 * `content` decides the copy, images and (via the theme wrapper) the palette.
 */
export default function HomePage({
  content,
  theme,
}: {
  content: SiteContent;
  theme?: "original";
}) {
  return (
    <div data-theme={theme} className="bg-cream text-text">
      <Reveal />
      <Header brand={content.brand} nav={content.nav} />
      <main>
        <Hero hero={content.hero} />
        <Intro intro={content.intro} />
        <Help help={content.help} id="services" />
        <Banner banner={content.banner} />
        <Expertise expertise={content.expertise} />
        <Approach approach={content.approach} id="about" />
        <Statement statement={content.statement} />
        <Specialties specialties={content.specialties} id="approach" />
        <Cta cta={content.cta} id="contact" />
      </main>
      <Footer brand={content.brand} footer={content.footer} />
    </div>
  );
}
