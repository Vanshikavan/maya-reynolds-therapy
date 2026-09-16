import Image from "next/image";
import type { HTMLAttributes, ReactNode } from "react";
import type { Img } from "@/content/types";

type Tone = "cream" | "white" | "sand" | "ink";

const tones: Record<Tone, string> = {
  cream: "bg-cream",
  white: "bg-white",
  sand: "bg-sand",
  ink: "bg-ink text-on-dark",
};

/** Full-bleed section with the page gutter and an inner max width. */
export function Section({
  id,
  tone = "cream",
  className = "",
  innerClassName = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative ${tones[tone]} ${className}`}>
      <div className={`mx-auto max-w-[1800px] px-gutter ${innerClassName}`}>{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  className = "",
  ...rest
}: { children: ReactNode; className?: string } & HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`eyebrow ${className}`} {...rest}>
      {children}
    </p>
  );
}

export function LineButton({
  href,
  children,
  onDark = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <a href={href} className={`btn-line ${onDark ? "on-dark" : ""} ${className}`}>
      {children}
    </a>
  );
}

export function PillButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={`btn-pill ${className}`}>
      {children}
    </a>
  );
}

/** Cover image in a box whose shape is set by the parent's classes. */
export function Photo({
  img,
  className = "",
  imgClassName = "",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
}: {
  img: Img;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imgClassName}`}
      />
    </div>
  );
}
