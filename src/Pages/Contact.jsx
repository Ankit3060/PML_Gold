// src/pages/Contact.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeftIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const BRAND = "#456682";
const ACCENT = "#D4AF37";
const HOVER = "#2E4A60"; // change this to any hex to update hover color

const initialState = { name: "", email: "", mobile: "", gender: "" };

export default function Contact() {
  const navigate = useNavigate();
  const bgUrl = useMemo(() => "/contact.png", []);
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const isDisabled = submitted;

  const validate = (v) => {
    const next = {};
    if (!v.name.trim()) next.name = "Please fill the Name.";
    else if (/\d/.test(v.name)) next.name = "Name cannot contain numbers.";
    if (!v.email.trim()) next.email = "Please fill the Email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
      next.email = "Please enter a valid email.";
    if (!v.mobile.trim()) next.mobile = "Please fill the Mobile.";
    else if (!/^[6-9]\d{9}$/.test(v.mobile))
      next.mobile = "Enter a valid 10‑digit Indian mobile.";
    if (!v.gender.trim()) next.gender = "Please select Gender.";
    return next;
  };

  const handleChange = (field) => (e) => {
    const raw = e.target.value;
    const val =
      field === "name"
        ? raw.replace(/\d+/g, "")
        : field === "mobile"
        ? raw.replace(/[^\d]/g, "")
        : raw;

    setValues((s) => ({ ...s, [field]: val }));
    setErrors((prev) => {
      const n = validate({ ...values, [field]: val });
      return { ...prev, [field]: n[field] };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const n = validate(values);
    setErrors(n);
    if (Object.keys(n).length === 0) {
      setSubmitted(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      console.log("contact form submitted", values);
    }
  };

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Scoped styles for button hover color */}
      <style>{`
        .contact-submit {
          background: ${BRAND};
          color: #ffffff;
        }
        .contact-submit:hover:not([disabled]) {
          background: ${HOVER};
        }
      `}</style>

      {showToast && (
        <div className="pointer-events-none fixed left-1/2 top-6 z-50 -translate-x-1/2">
          <div className="pointer-events-auto rounded-md bg-emerald-600 px-4 py-2 text-white shadow-lg shadow-emerald-900/30">
            Form submitted successfully. We will contact shortly.
          </div>
        </div>
      )}

      {/* Card container */}
      <div className="rounded-2xl border border-black/10 bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-black/5 px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center rounded-md p-1.5 text-slate-700 transition hover:bg-slate-100"
            aria-label="Back to Home"
            title="Back"
          >
            <ArrowLeftIcon className="h-6 w-6 cursor-pointer" />
          </button>
          <h1 className="text-xl font-semibold" style={{ color: BRAND }}>
            Contact Us
          </h1>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2 ">
          {/* Left: image + details */}
          <div className="relative min-h-[260px] ">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${bgUrl}')` }}
              aria-hidden="true"
            />
            {/* Stronger overlay for readability */}
            <div className="absolute inset-0 bg-slate-900/35 backdrop-blur-[2px]" />
            {/* Bottom gradient lift */}
            <div
              className="absolute inset-x-0 bottom-0 h-28"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0.00))",
              }}
            />

            <div className="relative z-10 p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-white">
                Write to us
              </h2>

              <div className="mt-3 space-y-2">
                <a
                  href="mailto:care@auxivault.com"
                  className="inline-flex items-center gap-2 text-sm text-white hover:underline"
                >
                  <EnvelopeIcon className="h-5 w-5" style={{ color: ACCENT }} />
                  care@auxivault.com
                </a>
                <a
                  href="mailto:info@auxivault.com"
                  className="block pl-7 text-sm text-white hover:underline"
                >
                  info@auxivault.com
                </a>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-white">
                For Corporate sales
              </h3>
              <a
                href="mailto:corporate.sales@auxivault.com"
                className="mt-2 inline-flex items-center gap-2 text-sm text-white hover:underline"
              >
                <EnvelopeIcon className="h-5 w-5" style={{ color: ACCENT }} />
                corporate.sales@auxivault.com
              </a>

              <h3 className="mt-6 text-lg font-semibold text-white">
                Toll Free
              </h3>
              <a
                href="tel:+18003132928"
                className="mt-2 inline-flex items-center gap-2 text-sm text-white hover:underline"
              >
                <PhoneIcon className="h-5 w-5" style={{ color: ACCENT }} />
                1800-313-2928XX
              </a>
              <p className="pl-7 text-xs text-white/85">
                9AM–8PM IST, Mon–Sat • Accessible from Indian (+91) numbers only
              </p>

              <h3 className="mt-6 text-lg font-semibold text-white">
                Follow us
              </h3>
              <div className="mt-2 flex items-center gap-3 pl-0 text-slate-700">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-black/10 hover:bg-slate-50"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-black/10 hover:bg-slate-50"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-black/10 hover:bg-slate-50"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-black/10 hover:bg-slate-50"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="p-6 sm:p-8">
            <form noValidate onSubmit={onSubmit} className="space-y-5" aria-disabled={isDisabled}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium" style={{ color: BRAND }}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  inputMode="text"
                  autoComplete="name"
                  placeholder="Enter name"
                  value={values.name}
                  onChange={handleChange("name")}
                  disabled={isDisabled}
                  className={`mt-1 block w-full rounded-lg border bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none transition
                    ${
                      errors.name
                        ? "border-red-500 ring-2 ring-red-100"
                        : "border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                    }
                    disabled:cursor-not-allowed disabled:bg-slate-100`}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-600" role="alert" aria-live="polite">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium" style={{ color: BRAND }}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="Enter email address"
                  value={values.email}
                  onChange={handleChange("email")}
                  disabled={isDisabled}
                  className={`mt-1 block w-full rounded-lg border bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none transition
                    ${
                      errors.email
                        ? "border-red-500 ring-2 ring-red-100"
                        : "border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                    }
                    disabled:cursor-not-allowed disabled:bg-slate-100`}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-600" role="alert" aria-live="polite">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium" style={{ color: BRAND }}>
                  Mobile
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={values.mobile}
                  onChange={handleChange("mobile")}
                  disabled={isDisabled}
                  maxLength={10}
                  className={`mt-1 block w-full rounded-lg border bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none transition
                    ${
                      errors.mobile
                        ? "border-red-500 ring-2 ring-red-100"
                        : "border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                    }
                    disabled:cursor-not-allowed disabled:bg-slate-100`}
                  aria-invalid={Boolean(errors.mobile)}
                  aria-describedby={errors.mobile ? "mobile-error" : undefined}
                />
                {errors.mobile && (
                  <p id="mobile-error" className="mt-1 text-xs text-red-600" role="alert" aria-live="polite">
                    {errors.mobile}
                  </p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label htmlFor="gender" className="block text-sm font-medium" style={{ color: BRAND }}>
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange("gender")}
                  disabled={isDisabled}
                  className={`mt-1 block w-full rounded-lg border bg-white px-3 py-2 text-slate-900 outline-none transition
                    ${
                      errors.gender
                        ? "border-red-500 ring-2 ring-red-100"
                        : "border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                    }
                    disabled:cursor-not-allowed disabled:bg-slate-100`}
                  aria-invalid={Boolean(errors.gender)}
                  aria-describedby={errors.gender ? "gender-error" : undefined}
                >
                  <option value="">Select Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
                {errors.gender && (
                  <p id="gender-error" className="mt-1 text-xs text-red-600" role="alert" aria-live="polite">
                    {errors.gender}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isDisabled}
                  className="contact-submit inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200
                   disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
