// src/components/home/OurInsights.jsx
import React, { useEffect, useRef } from "react";

const BRAND = "#456682";
const ACCENT = "#D4AF37";

const POSTS = [
  {
    img: "/Insight1.png",
    title: "Digital Gold Explained — All you need to know!",
    excerpt:
      "When technology has changed how we shop, why should gold be left behind?",
    href: "#",
  },
  {
    img: "/Insight2.png",
    title: "Everything You Need To Know About Gold  Products",
    excerpt:
      "Gold isn’t only for jewellery — it’s changing how investing works too.",
    href: "#",
  },
  {
    img: "/Insight3.png",
    title: "Busting Some Myths About Gold Investments",
    excerpt:
      "You don’t need to be super wealthy to begin — even with ₹10 you can start.",
    href: "#",
  },
  {
    img: "/Insight4.png",
    title: "Tracking Gold Trends — What to watch next",
    excerpt:
      "Performance, cycles, and signals that matter for smarter, steadier decisions.",
    href: "#",
  },
];

export default function OurInsights() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const cards = root.querySelectorAll("[data-card]");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("opacity-0", "translate-y-4");
            e.target.classList.add("opacity-100", "translate-y-0");
          }
        }),
      { threshold: 0.18 }
    );
    cards.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* keyframes for subtle gradient shimmer under header */}
      <style>{`
        @keyframes insights-underline {
          0% { transform: translateX(-20%); opacity: .25; }
          50% { transform: translateX(0%); opacity: .6; }
          100% { transform: translateX(20%); opacity: .25; }
        }
      `}</style>

      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold tracking-tight" style={{ color: BRAND }}>
          Our insights
        </h2>
        <span
          className="mx-auto mt-2 block h-1 w-24 rounded-full"
          style={{
            background:
              `linear-gradient(90deg, ${ACCENT} 0%, ${BRAND} 100%)`,
            animation: "insights-underline 6s ease-in-out infinite",
          }}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {POSTS.map((p, i) => (
          <article
            key={i}
            data-card
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm ring-1 ring-black/5 transition-all duration-500 ease-out hover:shadow-lg opacity-0 translate-y-4"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {/* Image */}
            <a href={p.href} className="block">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:-rotate-[0.8deg]"
                  loading="lazy"
                />
              </div>
            </a>

            {/* Body */}
            <div className="p-5">
              <a href={p.href} className="block">
                <h3 className="text-[18px] font-semibold leading-snug" style={{ color: BRAND }}>
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-700">
                  {p.excerpt}
                </p>
              </a>

              <a
                href={p.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: BRAND }}
              >
                Continue reading
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* subtle corner glow on hover */}
            <span
              className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rotate-45 rounded-full opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-40"
              style={{ background: ACCENT }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
