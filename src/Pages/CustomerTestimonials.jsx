// src/components/partner/CustomerTestimonials.jsx
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const BRAND = "#456682";      // base
const BRAND_DARK = "#2E4A60"; // deeper stop for gradient
const ACCENT = "#D4AF37";     // gold

// Partners array: only two items, repeated later
const TESTIMONIALS = [
  {
    img: "/AdminLogo2.svg",
    name: "Paul Gold",
    title: "Partner",
    text:
      "Working with Paul Gold has been seamless—fast integrations, transparent pricing, and dependable support across every engagement.",
  },
  {
    img: "/Mayaa_logo.svg",
    name: "Mayaa",
    title: "Partner",
    text:
      "Mayaa brings a digital‑first approach with secure, scalable flows. Collaboration has been smooth and support is amazing and reliable.",
  },
];

function Card({ img, name, title, text, idx }) {
  const isMayaa = name.toLowerCase().includes("mayaa");

  return (
    <div
      className="relative mx-3 w-[320px] shrink-0 rounded-3xl p-5 md:w-[520px]"
      style={{
        background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 60%)`,
      }}
    >
      {/* Long, subtle gradient sweep overlay for motion */}
      <span
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-35"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.10))",
          mixBlendMode: "overlay",
          animation: "bg-sweep 12s ease-in-out infinite",
          animationDelay: `${idx * 0.2}s`,
        }}
      />

      <div className="relative flex items-center gap-3">
        {/* Avatar container */}
        <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-white/60 shadow flex items-center justify-center bg-white/10">
          <img
            src={img}
            alt={name}
            className={isMayaa ? "h-12 w-12 object-contain" : "h-full w-full object-cover"}
            style={isMayaa ? { filter: "invert(1) brightness(2)" } : undefined}
            loading="lazy"
            width={56}
            height={56}
          />
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-xl font-semibold" style={{ color: ACCENT }}>
            {name}
          </h3>
          <p className="text-sm" style={{ color: ACCENT }}>
            {title}
          </p>
        </div>
      </div>

      <p className="relative mt-4 text-base leading-relaxed" style={{ color: "#ffffff" }}>
        {text}
      </p>

      <span className="relative mt-4 block h-1 w-16 rounded-full" style={{ backgroundColor: ACCENT }} />
    </div>
  );
}

export default function CustomerTestimonials() {
  const options = { loop: true, align: "start", dragFree: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  useEffect(() => emblaApi?.reInit(), [emblaApi]);

  // Repeat just these two partners to create a long track
  const slides = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Gradient sweep keyframes */}
      <style>{`
        @keyframes bg-sweep {
          0%   { transform: translate3d(0,0,0); opacity: 0.35; }
          50%  { transform: translate3d(0,-1px,0); opacity: 0.55; }
          100% { transform: translate3d(0,0,0); opacity: 0.35; }
        }
      `}</style>

      <div className="mb-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight" style={{ color: BRAND }}>
          Word from our partners
        </h2>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent" />

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((t, i) => (
              <div className="embla__slide shrink-0" key={i}>
                <Card {...t} idx={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
