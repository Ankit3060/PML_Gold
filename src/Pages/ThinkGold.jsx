// src/components/home/ThinkGold.jsx
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const BRAND = "#456682";
const ACCENT = "#D4AF37";

const CARDS = [
  {
    icon: "/think1.svg",
    title: "Digital Gold Savings",
    blurb: "One‑tap, API‑ready gold purchase with secure vaulting.",
    href: "/products/savings",
    cta: "Learn more",
  },
  {
    icon: "/think2.svg",
    title: "Corporate Gifting",
    blurb: "Delight teams and customers with instant gold gifts.",
    href: "/products/gifting",
    cta: "Learn more",
  },
  {
    icon: "/think1.svg",
    title: "Convert to Coins & Bars",
    blurb: "Turn digital holdings into 24K coins and bars on demand.",
    href: "/products/convert",
    cta: "Learn more",
  },
];

export default function ThinkGold() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <style>{`
        @keyframes tg-sweep {
          0% { transform: translateY(6px); opacity: .85; }
          50% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(6px); opacity: .85; }
        }
      `}</style>

      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold tracking-tight" style={{ color: BRAND }}>
          Think Gold — Choose PaulGold
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((c, i) => (
          <article
            key={i}
            className="group relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg"
            style={{
              animation: "tg-sweep 3.8s ease-in-out infinite",
              animationDelay: `${i * 0.15}s`,
            }}
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ring-1 ring-black/5"
                   style={{ backgroundColor: `${BRAND}12` }}>
                {c.icon ? (
                  <img src={c.icon} alt="" className="h-8 w-8 object-contain" />
                ) : (
                  <span className="h-8 w-8 rounded bg-white" />
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold" style={{ color: BRAND }}>
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{c.blurb}</p>

                <a
                  href={c.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium"
                  style={{ color: BRAND }}
                >
                  {c.cta}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* soft gold glow on hover */}
            <span
              className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rotate-45 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40"
              style={{ background: ACCENT }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
