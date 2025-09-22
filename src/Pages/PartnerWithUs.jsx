import React, { useMemo, useState } from "react";
import WhyChooseUs from "./WhyChooseUs";
import OurServices from "./OurServices";
import OurPartners from "./OurPartners";
import Awards from "./Awards";
import CustomerTestimonials from "./CustomerTestimonials";

export default function PartnerWithUs() {
  const initialState = { name: "", email: "", message: "" };

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const isDisabled = submitted;
  const bgUrl = useMemo(() => "/Partner.png", []);

  const validate = (v) => {
    const next = {};
    if (!v.name.trim()) next.name = "Please fill the Name.";
    else if (/\d/.test(v.name)) next.name = "Name cannot contain numbers.";
    if (!v.email.trim()) next.email = "Please fill the Email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
      next.email = "Please enter a valid email.";
    if (!v.message.trim()) next.message = "Please fill the Message.";
    return next;
  };

  const handleChange = (field) => (e) => {
    const raw = e.target.value;
    const val = field === "name" ? raw.replace(/\d+/g, "") : raw;
    setValues((s) => ({ ...s, [field]: val }));
    setErrors((prev) => {
      const n = validate({ ...values, [field]: val });
      return { ...prev, [field]: n[field] };
    });
  };

  // NEW: success hook for submit logging
  const handleSubmitSuccess = () => {
    console.log("form submitted");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const n = validate(values);
    setErrors(n);
    if (Object.keys(n).length === 0) {
      handleSubmitSuccess(); // log to console
      setSubmitted(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

 return (
  <div className="relative w-full overflow-hidden">
    {showToast && (
      <div className="pointer-events-none fixed left-1/2 top-6 z-50 -translate-x-1/2">
        <div className="pointer-events-auto rounded-md bg-emerald-600 px-4 py-2 text-white shadow-lg shadow-emerald-900/30">
          Form submitted successfully. We will contact you soon.
        </div>
      </div>
    )}

    {/* HERO with background image + blur */}
    <section className="relative isolate">
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgUrl}')` }}
        aria-hidden="true"
      />
      {/* Blur + dark overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-900/45 backdrop-blur-sm" />

      {/* Content grid: text left, form right */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
        {/* Left: Text */}
       {/* Left: Text */}
<div className="order-1 lg:order-1">
  <div className="max-w-xl text-center lg:text-left">
    <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
      Let’s Do Business Together
    </h1>

    {/* New heading line */}
    <p className="mt-4 text-xl font-semibold text-white">
      Be a PaulGold Partner
    </p>

    {/* New brand statement */}
    <p className="mt-2 text-base text-white/90">
      At PaulGold, the commitment is to secure a place for India at the heart of the international bullion market through sustainable processes and initiatives.
    </p>

    {/* Existing badge line retained */}
    <p className="mt-4 inline-block rounded-md bg-white/15 px-3 py-2 text-base text-white backdrop-blur-sm ring-1 ring-white/25">
      Become part of our growing merchant community.
    </p>
  </div>
</div>

        {/* Right: Form */}
        <div className="order-2 flex items-stretch justify-center px-0 py-0 lg:order-2">
          <div className="flex w-full max-w-xl">
            <div className="flex w-full flex-col">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-[#ffffff] sm:text-3xl">
                  Sign up today
                </h2>
              </div>

              <div className="rounded-2xl border border-white/20 bg-[#456882] p-5 shadow-xl backdrop-blur sm:p-6 md:p-8 max-h-[680px] overflow-hidden">
                <form noValidate onSubmit={onSubmit} className="space-y-5" aria-disabled={isDisabled}>
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      inputMode="text"
                      autoComplete="name"
                      placeholder="Your full name"
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
                      <p id="name-error" className="mt-1 text-xs text-red-100" role="alert" aria-live="polite">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="name@example.com"
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
                      <p id="email-error" className="mt-1 text-xs text-red-100" role="alert" aria-live="polite">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Share brief details about business and goals"
                      value={values.message}
                      onChange={handleChange("message")}
                      disabled={isDisabled}
                      className={`mt-1 block w-full resize-y rounded-lg border bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none transition
                        ${
                          errors.message
                            ? "border-red-500 ring-2 ring-red-100"
                            : "border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                        }
                        disabled:cursor-not-allowed disabled:bg-slate-100`}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-100" role="alert" aria-live="polite">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isDisabled}
                      className="inline-flex w-full items-center cursor-pointer justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-[#456882] shadow-md transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isDisabled ? "Submitted" : "Submit"}
                    </button>
                  </div>

                  <p className="text-center text-xs text-white/90">
                    By submitting, consent is given to be contacted regarding partnership opportunities.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Existing sections unchanged */}
    <WhyChooseUs/>
    <OurServices/>
    <OurPartners/>
    <Awards/>
    <CustomerTestimonials/>
  </div>
);

}
