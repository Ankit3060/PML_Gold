// src/components/partner/Awards.jsx
import React from "react";

const BRAND = "#456682";
const ACCENT = "#D4AF37";

const AWARDS = [
  { src: "/Award_4.png", title: "Excellence Award", blurb: "Recognized for outstanding bullion services and customer trust." },
  { src: "/Award_4.png", title: "Innovation Award", blurb: "Honored for digital-first gold and silver solutions worldwide recognition." },
  { src: "/Award_4.png", title: "Quality Certification", blurb: "Certified for quality processes and operational rigor excellence standards." },
];

// Tailwind utility via inline style tag (scoped) for continuous float animation
const FloatStyles = () => (
  <style>{`
    @keyframes awards-float {
      0%   { transform: translateY(8px); opacity: 0.75; }
      50%  { transform: translateY(0);   opacity: 1;    }
      100% { transform: translateY(8px); opacity: 0.75; }
    }
  `}</style>
);

export default function Awards() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <FloatStyles />

      {/* Heading */}
      <div className="mb-2 text-center">
        <h2 className="text-3xl font-semibold tracking-tight" style={{ color: BRAND }}>
          Awards & certifications
        </h2>
      </div>
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base" style={{ color: BRAND }}>
        Recognitions that reflect our commitment to trust, quality, and innovation
      </p>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {AWARDS.map((a, i) => (
          <div
            key={i}
            className="relative rounded-2xl border border-white/20 bg-white/90 shadow-sm ring-1 ring-black/5 backdrop-blur hover:shadow-lg"
            style={{
              animation: "awards-float 3.2s ease-in-out infinite",
              animationDelay: `${i * 0.15}s`, // slight stagger
            }}
          >
            {/* Top band accent to echo your UI */}
            <div className="h-16 rounded-t-2xl" style={{ backgroundColor: `${BRAND}14` }} />

            {/* Floating circular badge overlapping the band */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white ring-1 ring-black/5 shadow-md">
                <img
                  src={a.src}
                  alt={a.title}
                  className="h-full w-full rounded-full object-cover transition-transform duration-300 ease-out"
                  style={{ imageRendering: "crisp-edges", WebkitOptimizeContrast: "1" }}
                />
                {/* soft gold glow */}
                <span
                  className="pointer-events-none absolute inset-0 rounded-full opacity-20"
                  style={{ boxShadow: `0 0 24px ${ACCENT}` }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="px-5 pb-6 pt-10 sm:px-6">
              <h3 className="text-lg font-semibold sm:text-xl" style={{ color: ACCENT }}>
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{a.blurb}</p>

              <div
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium transition-transform duration-300 hover:translate-x-0.5"
                style={{ color: BRAND }}
              >
                View details
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
