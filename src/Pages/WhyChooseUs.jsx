// src/components/partner/WhyChooseUs.tsx
import React from "react";
import {
  ClockIcon,
  ArrowPathIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const BRAND = "#456682";
const ACCENT = "#D4AF37";

const ITEMS = [
  { icon: ClockIcon, title: "Timely Delivery", text: "Timely delivery of services with full conformity to customer needs & expectations." },
  { icon: ArrowPathIcon, title: "Continual Improvement", text: "Continual improvement in the effectiveness of systems through regular review." },
  { icon: AcademicCapIcon, title: "Training & Development", text: "Training & development of our workforce." },
  { icon: ShieldCheckIcon, title: "ISO 9001:2015 Certified", text: "An ISO 9001:2015–certified company for its quality systems and processes." },
  { icon: CurrencyRupeeIcon, title: "Best Forex Rates", text: "Trustworthy and convenient solutions to your forex needs at the best rates." },
  { icon: PaperAirplaneIcon, title: "Swift TT Procedures", text: "Streamlined, easy-to-do and fast operational procedures for swift telegraphic transfers." },
];

// Local keyframes (same as Awards)
const FloatStyles = () => (
  <style>{`
    @keyframes awards-float {
      0%   { transform: translateY(8px); opacity: 0.75; }
      50%  { transform: translateY(0);   opacity: 1;    }
      100% { transform: translateY(8px); opacity: 0.75; }
    }
  `}</style>
);

export default function WhyChooseUs() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <FloatStyles />

      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight" style={{ color: BRAND }}>
          Why Choose Us ?
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map(({ icon: Icon, title, text }, idx) => (
          <div
            key={idx}
            className="group h-full min-h-[180px] sm:min-h-[200px] rounded-2xl border border-white/20 p-5 shadow-sm transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-lg sm:p-6"
            style={{
              backgroundColor: BRAND,
              animation: "awards-float 3.2s ease-in-out infinite",
              animationDelay: `${idx * 0.12}s`,
            }}
          >
            <div className="flex h-full items-start gap-4">
              {/* Left: Icon chip */}
              <div
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
              >
                <Icon className="h-7 w-7" style={{ color: ACCENT }} />
              </div>

              {/* Right: Title + text */}
              <div className="flex min-h-full flex-1 flex-col">
                <h3 className="text-lg font-semibold sm:text-xl" style={{ color: "#ffffff" }}>
                  <span style={{ color: ACCENT }}>{title}</span>
                </h3>
                <p className="mt-1 text-sm leading-relaxed sm:mt-2" style={{ color: "#ffffff" }}>
                  {text}
                </p>
                <div className="mt-auto" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
