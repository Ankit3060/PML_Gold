import React from "react";
import Calculator from "../Components/Calculator";

function Hero() {
  return (
    <section className="flex justify-center items-center py-12 px-6 md:px-24">
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left Text Section */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="lg:items-center lg:space-x-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#456682] leading-snug">
              Buy 24K Gold in 24 Seconds.
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mt-2">
              <span className="font-semibold text-blue-900">14,135</span>{" "}
              transactions in the last 1 hour. Start investing in gold starting
              as low as <span className="font-semibold">₹10</span>
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-semibold text-blue-900">
              Secured by
            </h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Gold corresponding to every purchase you make is stored in
              world-class vaults.
            </p>
          </div>
        </div>

        {/* Right Calculator */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <Calculator />
        </div>
      </div>
    </section>
  );
}

export default Hero;
