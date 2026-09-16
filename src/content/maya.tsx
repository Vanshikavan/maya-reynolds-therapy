import type { SiteContent } from "./types";

/**
 * Part 2 — all homepage copy for Dr. Maya Reynolds, PsyD.
 * Single source of truth: her profile (licensed clinical psychologist,
 * Santa Monica CA, adults with anxiety / panic / trauma / burnout,
 * CBT + EMDR + mindfulness + body-oriented work, in-person + telehealth).
 */
export const maya: SiteContent = {
  meta: {
    title: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
    description:
      "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist in Santa Monica, CA offering therapy for anxiety, panic, trauma, and burnout. In-person sessions in Santa Monica and secure telehealth across California.",
    url: "https://maya-reynolds-therapy.vercel.app",
    keywords: [
      "therapist Santa Monica",
      "anxiety therapy Santa Monica",
      "trauma therapist Santa Monica",
      "EMDR therapy Santa Monica",
      "burnout therapy Los Angeles",
      "clinical psychologist Santa Monica CA",
      "online therapy California",
    ],
  },
  brand: { name: "Dr. Maya Reynolds", tagline: "PsyD · Clinical Psychologist" },
  nav: {
    items: [
      { label: "About", href: "#about" },
      {
        label: "Services",
        href: "#services",
        children: [
          { label: "Anxiety & Panic", href: "#services" },
          { label: "Trauma & EMDR", href: "#services" },
          { label: "Burnout & Perfectionism", href: "#services" },
        ],
      },
      {
        label: "Approach",
        href: "#approach",
        children: [
          { label: "CBT", href: "#approach" },
          { label: "EMDR", href: "#approach" },
          { label: "Mindfulness-Based Practices", href: "#approach" },
          { label: "Body-Oriented Techniques", href: "#approach" },
        ],
      },
      { label: "Office", href: "#office" },
      { label: "FAQs", href: "#faqs" },
    ],
    cta: { label: "Contact", href: "#contact" },
  },

  hero: {
    eyebrow: "In-person therapy in Santa Monica & online across California",
    heading: (
      <>
        Therapy in Santa Monica for anxiety, trauma &amp; burnout—so you can finally{" "}
        <span className="script">exhale</span>.
      </>
    ),
    sub: "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist helping high-achieving adults move through anxiety, panic, trauma, and burnout—in person in Santa Monica or through secure telehealth anywhere in California.",
    cta: { label: "Request a consultation", href: "#contact" },
    imgMain: {
      src: "/images/hero-shoreline.jpg",
      alt: "A woman looking out over the ocean in soft golden light",
    },
    imgSide: {
      src: "/images/hero-water.jpg",
      alt: "Calm water at dawn in muted blue tones",
    },
  },

  intro: {
    heading: <>You look fine on the outside. Inside, you’re running on empty.</>,
    lead: "You don’t have to keep white-knuckling your way through the week.",
    left:
      "Many of the people I work with are thoughtful, self-aware, and successful—and quietly struggling with constant worry, tension in their body, trouble sleeping, or a sense that they’re always bracing for something to go wrong. Others are carrying earlier life experiences that still shape their relationships, confidence, and sense of safety.",
    right:
      "Therapy with me is a place to slow down and understand what’s actually happening—emotionally and physically—and to build practical tools that hold up in real life. From my Santa Monica office, or over secure telehealth anywhere in California, I offer structured, evidence-based care that still leaves room for depth and reflection.",
    img: {
      src: "/images/santa-monica-palms.jpg",
      alt: "Tall palm trees along a sunny Santa Monica beach path",
    },
    imgPosition: "object-[50%_85%]",
  },

  help: {
    heading: (
      <>
        How I can <span className="script">help</span>
      </>
    ),
    cards: [
      {
        title: "Anxiety & Panic",
        body:
          "Racing thoughts, a tight chest, nights spent overthinking. Using CBT and mindfulness-based practices, we’ll work to understand your anxiety, settle your nervous system, and quiet the constant worry—so you can feel steady again.",
        img: {
          src: "/images/service-anxiety.jpg",
          alt: "A woman journaling quietly beside a bright window",
        },
      },
      {
        title: "Trauma & EMDR",
        body:
          "Whether it’s a single event or long-standing patterns rooted in childhood, relationships, or chronic stress, trauma work here is paced carefully. With EMDR and body-oriented techniques, we focus on safety, stabilization, and feeling regulated in daily life—not just in session.",
        img: {
          src: "/images/service-trauma.jpg",
          alt: "A woman sitting calmly on warm sand facing the ocean",
        },
      },
      {
        title: "Burnout & Perfectionism",
        body:
          "For entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through. Together we’ll ease the internal pressure, loosen perfectionism’s grip, and build more sustainable ways of living and working.",
        img: {
          src: "/images/service-burnout.jpg",
          alt: "A person working on a laptop beside a large window in soft light",
        },
      },
    ],
  },

  banner: {
    heading: (
      <>
        You don’t have to be in crisis to deserve support.{" "}
        <em>Feeling “functional” and feeling well are not the same thing.</em>
      </>
    ),
    img: {
      src: "/images/banner-boardwalk.jpg",
      alt: "A wooden boardwalk lined with palm trees at sunset on the Southern California coast",
    },
  },

  expertise: {
    heading: (
      <>
        Areas of <span className="script">focus</span>
      </>
    ),
    items: [
      "Anxiety",
      "Panic attacks",
      "Trauma & PTSD",
      "Complex trauma",
      "Burnout",
      "Perfectionism",
      "Chronic stress",
      "Overthinking",
      "Sleep difficulties",
      "Childhood experiences",
      "Relationship patterns",
      "…and more.",
    ],
  },

  approach: {
    eyebrow: "Meet Dr. Reynolds",
    heading: <>Warm, collaborative, and grounded.</>,
    lead:
      "I’m Dr. Maya Reynolds, a licensed clinical psychologist based in Santa Monica, California.",
    left:
      "I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences—often people who are high-achieving and self-aware, yet internally exhausted, stuck in overthinking, or emotionally on edge. Sessions with me are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to address both the emotional and the physiological sides of what you’re experiencing.",
    right:
      "Trauma work is an important part of my practice, and I pace it carefully, with an emphasis on safety and stabilization. I also frequently support entrepreneurs, creatives, and professionals navigating burnout, perfectionism, and high internal pressure. I believe therapy works best when you feel respected, understood, and actively involved. My goal isn’t just symptom relief—it’s helping you develop insight, resilience, and a stronger relationship with yourself over time.",
    cta: { label: "Work with me", href: "#contact" },
    img: {
      src: "/images/maya-reynolds.jpg",
      alt: "Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica",
    },
  },

  statement: {
    heading: (
      <>
        More than symptom relief: insight, resilience <span className="script">&amp;</span> a
        stronger relationship with yourself.
      </>
    ),
    img: {
      src: "/images/writing-brick.jpg",
      alt: "A woman writing in a notebook beside an exposed brick wall",
    },
  },

  specialties: {
    heading: (
      <>
        How we’ll <span className="script">work</span> together
      </>
    ),
    cards: [
      {
        title: "CBT",
        body:
          "Cognitive-behavioral therapy helps you notice the thought patterns that feed anxiety and worry, and gives you practical, structured tools to shift them—so progress shows up between sessions, not only during them.",
        cta: "Learn more",
        href: "#faqs",
      },
      {
        title: "EMDR",
        body:
          "Eye Movement Desensitization and Reprocessing helps the brain reprocess painful memories so they lose their charge. It’s central to my trauma work in Santa Monica, and always paced with safety and stabilization first.",
        cta: "Learn more",
        href: "#faqs",
      },
      {
        title: "Mindfulness-Based Practices",
        body:
          "Simple, evidence-based practices for slowing down, noticing what’s happening inside, and responding rather than reacting—especially helpful for overthinking, perfectionism, and burnout.",
        cta: "Learn more",
        href: "#faqs",
      },
      {
        title: "Body-Oriented Techniques",
        body:
          "Anxiety and trauma live in the body as much as the mind. Somatic, body-oriented approaches help release chronic tension and difficulty sleeping, so you feel more regulated and at ease in daily life.",
        cta: "Learn more",
        href: "#faqs",
      },
    ],
  },

  cta: {
    eyebrow: "Take the first step",
    heading: (
      <>
        Ready to feel more like <span className="script">yourself</span> again?
      </>
    ),
    body: [
      "Reaching out is often the hardest part—and you don’t need to have it all figured out first. If you’re looking for a therapist in Santa Monica who combines practical tools with depth-oriented work, and who understands the realities of living and working in a fast-paced environment, I’d be glad to talk.",
      "Click below to request a consultation, in person or online.",
    ],
    button: { label: "Request a consultation", href: "mailto:hello@mayareynoldstherapy.com?subject=Consultation%20request" },
    imgLeft: {
      src: "/images/cta-plants.jpg",
      alt: "Green plants on a wooden table in a sunlit room",
    },
    imgRight: {
      src: "/images/cta-sea.jpg",
      alt: "A soft gradient of sea and sky at dusk",
    },
  },

  footer: {
    blurb:
      "Therapy for anxiety, panic, trauma, and burnout—for adults who want practical tools and real depth. In person in Santa Monica, CA, and online across California.",
    columns: [
      {
        title: "Navigate",
        links: [
          { label: "Home", href: "#top" },
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Our Office", href: "#office" },
          { label: "FAQs", href: "#faqs" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Specialties",
        links: [
          { label: "Anxiety & Panic", href: "#services" },
          { label: "Trauma & EMDR", href: "#services" },
          { label: "Burnout & Perfectionism", href: "#services" },
          { label: "CBT", href: "#approach" },
          { label: "Mindfulness-Based Therapy", href: "#approach" },
          { label: "Body-Oriented Therapy", href: "#approach" },
        ],
      },
    ],
    contact: {
      lines: [
        "Dr. Maya Reynolds, PsyD",
        "Licensed Clinical Psychologist",
        "123th Street 45 W",
        "Santa Monica, CA 90401",
        "In-person & telehealth sessions",
      ],
      note: "Serving Santa Monica and the Los Angeles Westside, with telehealth for clients throughout California",
    },
    legal: [
      { label: "Terms", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
    credit: "© 2026 Dr. Maya Reynolds, PsyD. All rights reserved.",
  },
};
