// src/components/home/GoDigital.jsx
import React from "react";
import {
  ShieldCheckIcon,
  ArrowDownOnSquareStackIcon,
  BanknotesIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const BRAND = "#456682";
const ACCENT = "#D4AF37";

const ITEMS = [
  { icon: SparklesIcon, title: "Guaranteed 24K Gold", text: "Buy directly from the manufacturer with assured quality and transparent pricing." },
  { icon: DevicePhoneMobileIcon, title: "Sell anytime from home", text: "Exit whenever needed without visiting a store; proceeds settle directly to account." },
  { icon: BanknotesIcon, title: "Earn income on gold", text: "Lend digital gold to verified borrowers and earn steady monthly returns." },
  { icon: ShieldCheckIcon, title: "Safety guaranteed", text: "Bank‑grade, insured vaulting eliminates theft risk and locker charges." },
  { icon: Squares2X2Icon, title: "Convert to physical gold", text: "Swap digital holdings for coins, bars, or jewellery via trusted partners." },
  { icon: ArrowDownOnSquareStackIcon, title: "Buy as low as ₹10", text: "Start small and scale anytime; invest according to comfort and budget." },
];

export default function GoDigital() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Animated background sweep, very subtle */}
      <style>{`
        @keyframes gd-sweep {
          0%   { transform: translate3d(0,0,0); opacity: .14; }
          50%  { transform: translate3d(0,-1px,0); opacity: .22; }
          100% { transform: translate3d(0,0,0); opacity: .14; }
        }
        @keyframes gd-float {
          0%   { transform: translateY(6px); }
          50%  { transform: translateY(0); }
          100% { transform: translateY(6px); }
        }
      `}</style>

      {/* two layered gradients for depth */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl"
        style={{
          background:
            `radial-gradient(120% 60% at -10% 0%, ${BRAND}15 0%, transparent 60%),
             radial-gradient(120% 60% at 110% 100%, ${ACCENT}15 0%, transparent 70%)`,
          animation: "gd-sweep 11s ease-in-out infinite",
        }}
      />

      <div className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight" style={{ color: BRAND }}>
          Why go digital?
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map(({ icon: Icon, title, text }, i) => (
          <div
            key={i}
            className="flex items-start gap-4"
            style={{
              animation: "gd-float 3.6s ease-in-out infinite",
              animationDelay: `${i * 0.12}s`,
            }}
          >
            {/* Icon chip */}
            <span
              className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-1 ring-black/5"
              style={{ backgroundColor: `${BRAND}12` }}
            >
              <Icon className="h-7 w-7" style={{ color: ACCENT }} />
            </span>

            {/* Copy */}
            <div>
              <h3 className="text-xl font-semibold" style={{ color: BRAND }}>
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
