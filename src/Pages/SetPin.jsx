import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function SetPinPage() {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const pinRegex = /^\d{4}$/;

    if (!pinRegex.test(pin)) {
      setError("PIN must be only 4 digits Numbers.");
      return;
    }
    if (pin !== confirmPin) {
      setError("PINs do not match.");
      return;
    }

    setError("");
    localStorage.setItem("userPin", pin);
    navigate("/");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col md:flex-row w-full max-w-6xl h-[80vh] rounded-xl overflow-hidden shadow-lg bg-white">
        
        {/* Left Section with Video */}
        <div className="w-full md:w-1/2 h-full relative flex flex-col items-center justify-center ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className=" top-0 left-0 w-full  object-cover"
          >
            <source
              src="/vault.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="hidden sm:block relative z-10 text-center px-6 py-8 bg-transparent rounded-lg">
            <p className="text-xl md:text-2xl font-semibold text-teal-700">
              Secure Your Account <br />
              <span className="text-green-400 md:text-green-600">with PIN</span>
            </p>
          </div>
        </div>

        {/* Right Section with PIN Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-sm border border-[#456682] rounded-xl p-8 relative">
            {/* Back Arrow */}
            <button
              onClick={() => navigate("/")}
              className="absolute cursor-pointer -top-4 -left-4 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-50"
            >
              ←
            </button>

            {/* Heading */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-2 flex justify-center items-center gap-2">
              <span>Set Your PIN</span>
            </h2>
            <p className="text-gray-600 text-sm text-center mb-6">
              Upgrade your Account Security <br />
              Set a 4-digit PIN for quick and easy access.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="password"
                maxLength="4"
                inputMode="numeric"
                value={pin}
                onChange={(e) =>{
                    const val = e.target.value.replace(/\D/g, "");
                    setPin(val);

                    if (val === "") {
                        setError("");
                    }
                }}
                placeholder="Enter PIN"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#456682]"
              />
              <input
                type="password"
                maxLength="4"
                inputMode="numeric"
                value={confirmPin}
                onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    setConfirmPin(val);
                    if (val === "") {
                        setError("");
                    }
                }}
                placeholder="Confirm PIN"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#456682]"
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full flex items-center justify-center bg-[#456682] cursor-pointer text-white py-3 rounded-full font-semibold hover:bg-[#345166] transition gap-2"
              >
                Proceed <FiArrowRight />
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
