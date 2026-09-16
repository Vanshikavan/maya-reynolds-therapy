import type { SiteContent } from "./types";

/**
 * Part 1 — copy and imagery of the original Conejo Valley Family Counseling
 * homepage, used by the /clone route to verify layout fidelity.
 * Images are served from the original Squarespace CDN.
 */
const cdn =
  "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10";

export const original: SiteContent = {
  meta: {
    title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling (Clone)",
    description:
      "Layout clone of the Conejo Valley Family Counseling homepage, built with Next.js and Tailwind CSS.",
    url: "/clone",
    keywords: ["counseling", "Newbury Park"],
  },
  brand: { name: "Conejo Valley", tagline: "Family Counseling" },
  nav: {
    items: [
      { label: "About", href: "#" },
      {
        label: "Our Team",
        href: "#",
        children: [
          { label: "Jennifer Anderson, LMFT", href: "#" },
          { label: "Candace Bletscher, AMFT", href: "#" },
          { label: "Heather Williams-Baumgart, AMFT", href: "#" },
          { label: "Samantha Johnson, AMFT", href: "#" },
        ],
      },
      {
        label: "Specialties",
        href: "#",
        children: [
          { label: "Dissociation", href: "#" },
          { label: "Trauma", href: "#" },
          { label: "Special Needs Parenting", href: "#" },
          { label: "Couples", href: "#" },
          { label: "Children & Teens", href: "#" },
          { label: "Anxiety & Depression", href: "#" },
        ],
      },
      {
        label: "Methods",
        href: "#",
        children: [
          { label: "EMDR", href: "#" },
          { label: "Brainspotting", href: "#" },
          { label: "Somatic Therapy", href: "#" },
          { label: "Parts Work Therapy", href: "#" },
        ],
      },
      { label: "FAQs", href: "#" },
    ],
    cta: { label: "Contact", href: "#" },
  },

  hero: {
    eyebrow: "Online & in-person counseling in Newbury Park & across CA",
    heading: (
      <>
        Rebuild your foundation on solid ground and finally begin to{" "}
        <span className="script">thrive</span>.
      </>
    ),
    sub: "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.",
    cta: { label: "Book an appointment", href: "#" },
    imgMain: {
      src: `${cdn}/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg`,
      alt: "Family walking together on the beach",
    },
    imgSide: {
      src: `${cdn}/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg`,
      alt: "Soft ocean waves on the shore",
    },
  },

  intro: {
    heading: <>You’re holding onto hope that life can be better than it is right now.</>,
    lead: "At Conejo Valley Family Counseling we want to make that hope a reality.",
    left:
      "Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.",
    right:
      "First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.",
    img: {
      src: `${cdn}/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg`,
      alt: "Sandy beach with gentle ocean waves and a cloudy sky",
    },
  },

  help: {
    heading: (
      <>
        Who we <span className="script">help</span>
      </>
    ),
    cards: [
      {
        title: "Adults",
        body:
          "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
        img: {
          src: `${cdn}/066f60e6-1354-4d47-a586-ab3f2f2ba612/Jennifer+A+-+Images+%288%29.jpg`,
          alt: "Two people sitting on a log at the beach",
        },
      },
      {
        title: "Couples",
        body:
          "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
        img: {
          src: `${cdn}/d0157712-388c-4800-aada-c78db97ee966/Jennifer+A+-+Images+%289%29.jpg`,
          alt: "A couple embracing on the beach",
        },
      },
      {
        title: "Children & Teens",
        body:
          "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
        img: {
          src: `${cdn}/d5d62bf4-34a7-4bf4-bf00-e1169863ace7/Jennifer+A+-+Images+%2810%29.jpg`,
          alt: "A boy carrying a girl on a beach",
        },
      },
    ],
  },

  banner: {
    heading: (
      <>
        You deserve a place where your story is heard, valued, and understood.{" "}
        <em>Nothing will be too heavy for us to carry together.</em>
      </>
    ),
    img: {
      src: `${cdn}/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png`,
      alt: "Children running along a wide sandy beach",
    },
  },

  expertise: {
    heading: (
      <>
        Our areas of <span className="script">expertise</span>
      </>
    ),
    items: [
      "Dissociation",
      "Trauma",
      "Family conflict",
      "Special needs parenting",
      "Depression",
      "Marriage",
      "Anxiety",
      "Relationships",
      "Children",
      "Teens",
      "Intimacy & connection",
      "…and more.",
    ],
  },

  approach: {
    eyebrow: "How we work",
    heading: <>We’re here to make a difference.</>,
    lead:
      "The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.",
    left:
      "Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.",
    right:
      "Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.",
    cta: { label: "Learn more about us", href: "#" },
    img: {
      src: `${cdn}/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg`,
      alt: "A woman and a child dancing on a sandy beach at sunset",
    },
  },

  statement: {
    heading: (
      <>
        Honoring where you’ve been <span className="script">&amp;</span> helping shape where
        you’re headed.
      </>
    ),
    img: {
      src: `${cdn}/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg`,
      alt: "Family of four holding hands facing the ocean at sunset",
    },
  },

  specialties: {
    heading: (
      <>
        Our <span className="script">specialties</span> include…
      </>
    ),
    cards: [
      {
        title: "Trauma",
        body:
          "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
        cta: "Learn more",
        href: "#",
      },
      {
        title: "EMDR",
        body:
          "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
        cta: "Learn more",
        href: "#",
      },
      {
        title: "Dissociation",
        body:
          "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
        cta: "Learn more",
        href: "#",
      },
      {
        title: "Special Needs Parenting",
        body:
          "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
        cta: "Learn more",
        href: "#",
      },
    ],
  },

  cta: {
    eyebrow: "Schedule an appointment",
    heading: (
      <>
        Find a therapist who is the right fit for <span className="script">you</span>.
      </>
    ),
    body: [
      "Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.",
      "Click the button below to schedule an appointment.",
    ],
    button: { label: "Book now", href: "#" },
    imgLeft: {
      src: `${cdn}/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg`,
      alt: "A person picking up seashells on a sandy beach",
    },
    imgRight: {
      src: `${cdn}/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg`,
      alt: "A parent pointing at shells on the beach with a child nearby",
    },
  },

  footer: {
    blurb:
      "We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.",
    columns: [
      {
        title: "Navigate",
        links: [
          { label: "Home", href: "#" },
          { label: "About", href: "#" },
          { label: "FAQs", href: "#" },
          { label: "Contact", href: "#" },
        ],
      },
      {
        title: "Our Team",
        links: [
          { label: "Jennifer Anderson", href: "#" },
          { label: "Heather Williams-Baumgart", href: "#" },
          { label: "Autumn Bodily", href: "#" },
          { label: "Candace Bletscher", href: "#" },
          { label: "Samantha Johnson", href: "#" },
          { label: "Andrea Watkins", href: "#" },
          { label: "Rosa Gomez", href: "#" },
          { label: "Chad Flores", href: "#" },
        ],
      },
    ],
    contact: {
      lines: [
        "925 Broadbeck Dr",
        "Suites 200 and 225",
        "Newbury Park, CA 91320",
        "info@conejovalleycounseling.com",
        "805.242.3120",
      ],
      note: "Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley",
    },
    legal: [
      { label: "Terms", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
    credit: "Website by Walker Strategy Co.",
  },
};
