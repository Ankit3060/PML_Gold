// src/components/home/StartInvestingCTA.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const BRAND = "#456682";
const ACCENT = "#D4AF37";

export default function StartInvestingCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative mx-auto w-full">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl">
        {/* Brand-only gradient band */}
        <div
          className="relative isolate"
          style={{
            background:
              `linear-gradient(135deg, ${BRAND} 0%, ${shade(BRAND, -12)} 40%, ${shade(BRAND, -18)} 100%)`,
          }}
        >
          {/* subtle brand glaze for depth */}
          <span
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              background:
                `radial-gradient(120% 60% at -10% 0%, ${ACCENT}33 0%, transparent 60%)`,
            }}
          />

          {/* gold diagonal accent at bottom */}
          <span
            className="pointer-events-none absolute inset-x-0 bottom-0 block h-[7px] rotate-[-1.2deg]"
            style={{ backgroundColor: ACCENT, transformOrigin: "left bottom" }}
          />

          <div className="px-6 py-12 sm:px-10 lg:px-14">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <h3 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Start investing in gold today
              </h3>

              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="rounded-xl bg-white px-6 py-3 text-base font-semibold 
                shadow-sm ring-1 ring-black/5 transition hover:shadow-md cursor-pointer"
                style={{ color: ACCENT }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 0 3px ${BRAND}33`)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* tiny helper to darken brand for the gradient depth */
function shade(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const r = Math.min(255, Math.max(0, (num >> 16) + amt));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amt));
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amt));
  return `#${(b | (g << 8) | (r << 16)).toString(16).padStart(6, "0")}`;
}
