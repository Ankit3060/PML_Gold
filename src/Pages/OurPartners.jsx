// src/components/partner/OurPartners.jsx
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const BRAND = "#456682";
const ACCENT = "#D4AF37";

const PARTNERS = [
  {
    logo: "/AdminLogo2.svg", // public/AdminLogo.png
    name: "Paul Gold",
    description:
      "Trusted bullion partner offering premium-grade gold products and transparent pricing.",
  },
  {
    logo: "/Mayaa_logo.svg", // public/mayaa_logo.png
    name: "Mayaa",
    description:
      "Digital-first finance and payments partner enabling fast, secure value movement.",
  },
];

function Card({ logo, name, description }) {
  const isMayaa = /mayaa/i.test(name);
  const isAdmin = /admin|paul gold/i.test(name);

  return (
    <div
      className="relative mx-3 w-[280px] rounded-2xl border border-white/25 p-4 shadow-sm ring-1 ring-black/5 backdrop-blur transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-md md:w-[320px]"
      style={{ backgroundColor: BRAND }}
    >
      <div className="flex items-center gap-3">
  {isAdmin ? (
    // Admin/Paul Gold: in container, natural colors
    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/20">
      <img src={logo} alt={name} className="h-10 w-10 object-contain" />
    </div>
  ) : (
    // Mayaa (or other): in container, render in white
    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/20">
      <img
        src={logo}
        alt={name}
        className="h-10 w-10 object-contain"
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </div>
  )}

  <h3 className="text-base font-semibold" style={{ color: ACCENT }}>
    {name}
  </h3>
</div>

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed" style={{ color: "#ffffff" }}>
        {description}
      </p>

      <span
        className="pointer-events-none mt-3 block h-1 w-full rounded-full"
        style={{ backgroundColor: ACCENT }}
      />
    </div>
  );
}

export default function OurPartners() {
  const options = { loop: true, align: "start", dragFree: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  useEffect(() => emblaApi?.reInit(), [emblaApi]);

  // Duplicate to enrich track for dragFree + loop
  const slides = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-2 text-center">
        <h2 className="text-3xl font-semibold tracking-tight" style={{ color: BRAND }}>
          Our partners
        </h2>
      </div>
      <p className="mx-auto mb-8 max-w-2xl text-center text-sm sm:text-base" style={{ color: BRAND }}>
        Building reliable ecosystems with brands that value trust and performance
      </p>

      <div className="relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent" />

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((p, i) => (
              <div className="embla__slide shrink-0" key={i}>
                <Card {...p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
