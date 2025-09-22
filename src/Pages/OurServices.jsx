// src/components/partner/OurServices.jsx
import React, { useMemo, useState } from "react";
import {
  BanknotesIcon,
  ArrowsRightLeftIcon,
  ArrowPathRoundedSquareIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

const BRAND = "#456682";
const ACCENT = "#D4AF37";

const GOLD_SERVICES = [
  {
    icon: BanknotesIcon,
    title: "Buy",
    asset: "Gold",
    description:
      "Purchase 24K gold instantly with live pricing and trusted purity for investment or gifting.",
  },
  {
    icon: BanknotesIcon,
    title: "Sell",
    asset: "Gold",
    description:
      "Liquidate holdings at transparent market-linked rates with quick settlement and maximum efficiency.",
  },
  {
    icon: ArrowsRightLeftIcon,
    title: "Transfer",
    asset: "Gold",
    description:
      "Send gold value to family, friends, or accounts in seconds with secure verification.",
  },
  {
    icon: ArrowPathRoundedSquareIcon,
    title: "Conversion",
    asset: "Gold",
    description:
      "Convert digital gold to coins/bars or vice-versa with safe vault handling and security.",
  },
];

const SILVER_SERVICES = [
  {
    icon: BanknotesIcon,
    title: "Buy",
    asset: "Silver",
    description:
      "Own fine silver with competitive pricing and certified weight & purity.",
  },
  {
    icon: BanknotesIcon,
    title: "Sell",
    asset: "Silver",
    description:
      "Exit positions at fair rates with minimal spread and no hidden fees.",
  },
  {
    icon: ArrowsRightLeftIcon,
    title: "Transfer",
    asset: "Silver",
    description:
      "Move silver balance between accounts instantly with audit trails.",
  },
  {
    icon: ArrowPathRoundedSquareIcon,
    title: "Conversion",
    asset: "Silver",
    description:
      "Swap between physical and digital silver seamlessly when needs change.",
  },
];

export default function OurServices() {
  const [tab, setTab] = useState("Gold"); // default open
  const services = useMemo(() => (tab === "Gold" ? GOLD_SERVICES : SILVER_SERVICES), [tab]);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mb-2 text-center">
        <h2 className="text-3xl font-semibold tracking-tight" style={{ color: BRAND }}>
          What we offer?
        </h2>
      </div>
      <p className="mx-auto mb-6 max-w-2xl text-center text-sm sm:text-base" style={{ color: BRAND }}>
        Discover the benefits of partnering with us
      </p>

      {/* Toggle pills */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => setTab("Gold")}
          onMouseEnter={() => setTab("Gold")}
          className={`inline-flex items-center gap-2 rounded-full px-5 py-3 ring-1 transition ${
            tab === "Gold"
              ? "bg-white ring-black/10 shadow-sm"
              : "bg-white/70 ring-black/5 hover:bg-white"
          }`}
          aria-pressed={tab === "Gold"}
        >
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-full"
            style={{ backgroundColor: `${BRAND}14` }}
          >
            <CircleStackIcon className="h-5 w-5" style={{ color: ACCENT }} />
          </span>
          <span className="text-sm font-medium" style={{ color: BRAND }}>Gold</span>
        </button>

        <button
          type="button"
          onClick={() => setTab("Silver")}
          onMouseEnter={() => setTab("Silver")}
          className={`inline-flex items-center gap-2 rounded-full px-5 py-3 ring-1 transition ${
            tab === "Silver"
              ? "bg-white ring-black/10 shadow-sm"
              : "bg-white/70 ring-black/5 hover:bg-white"
          }`}
          aria-pressed={tab === "Silver"}
        >
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-full"
            style={{ backgroundColor: `${BRAND}14` }}
          >
            <CircleStackIcon className="h-5 w-5" style={{ color: ACCENT }} />
          </span>
          <span className="text-sm font-medium" style={{ color: BRAND }}>Silver</span>
        </button>
      </div>

      {/* Grid: 1/2/4 cols (styling preserved) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, asset, description }, i) => (
          <div
            key={`${asset}-${title}-${i}`}
            className="group h-full min-h-[220px] rounded-2xl border border-white/20 bg-white/90 p-5 shadow-sm 
            ring-1 ring-black/5 backdrop-blur transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-lg sm:p-6"
          >
            {/* Accent bar */}
            <span
              className="absolute h-1 w-full rounded-t-2xl"
              style={{ backgroundColor: ACCENT, insetInlineStart: 0, insetBlockStart: 0 }}
            />

            <div className="flex h-full items-start gap-4">
              {/* Icon */}
              <div
                className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${BRAND}1A` }}
              >
                <Icon className="h-7 w-7 transition-colors" style={{ color: BRAND }} />
                <span
                  className="absolute h-12 w-12 rounded-xl opacity-0 transition duration-300 group-hover:opacity-20"
                  style={{ backgroundColor: ACCENT }}
                />
              </div>

              {/* Text */}
              <div className="flex min-h-full flex-1 flex-col">
                <div className="flex items-center gap-2">
                  <CircleStackIcon className="h-5 w-5" style={{ color: ACCENT }} />
                  <span className="text-xs font-medium uppercase tracking-wide" style={{ color: ACCENT }}>
                    {tab}
                  </span>
                </div>

                <h3 className="mt-1 text-lg font-semibold sm:text-xl" style={{ color: BRAND }}>
                  {title}
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-slate-700">{description}</p>

                <div
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium transition-transform duration-300 group-hover:translate-x-0.5"
                  style={{ color: BRAND }}
                >
                  Learn more
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                <div className="mt-auto" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
