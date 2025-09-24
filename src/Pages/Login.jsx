import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(150);
  const [error, setError] = useState("");
  const [otpError, setOtpError] = useState("");
  const { setIsLogin, setUsername } = useContext(AuthContext);
  const navigateTo = useNavigate();

  useEffect(() => {
    let timer;
    if (otpSent && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [otpSent, timeLeft]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleSendOtp = () => {
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    if (!phoneRegex.test(mobile)) {
      setError("Enter valid Indian Mobile Number");
      return;
    }

    setError("");
    setOtpSent(true);
    setTimeLeft(150);
    alert(`OTP sent to ${mobile}`);
  };

  const handleVerifyOtp = () => {
    const otpRegex = /^\d{6}$/;
    if (!otpRegex.test(otp)) {
      setOtpError("Enter valid 6-digit OTP");
      return;
    }
    setOtpError("");
    setIsLogin(true);
    setUsername("Ankit");

    navigateTo("/setpin");
  };

  const handleResendOtp = () => {
    setTimeLeft(150);
    alert(`OTP resent to ${mobile}`);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col md:flex-row w-full max-w-6xl h-[80vh] rounded-xl overflow-hidden shadow-lg bg-white">
        {/* LeftSection */}
        <div className="w-full md:w-1/2 h-full relative flex flex-col items-center justify-center bg-gray-100">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source
              src="/Video_Generation_With_White_Background.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10 text-center px-6 py-8 bg-transparent rounded-lg">
            <p className="text-xl md:text-2xl font-semibold text-teal-700">
              Earn up to{" "}
              <span className="text-green-400 md:text-green-600">16%</span>
              <br /> from your gold every year
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-sm border border-[#456682] rounded-xl p-8 relative">
            <button
              onClick={() => navigateTo("/")}
              className="absolute cursor-pointer -top-4 -left-4 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-50"
            >
              ←
            </button>

            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
              <span>Login or Sign Up</span>
            </h2>

            {/* Mobile Number Input */}
            <input
              type="tel"
              maxLength={10}
              placeholder="Enter Mobile Number"
              value={mobile}
              disabled={otpSent}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                setMobile(val);

                if (val === "") {
                  setError("");
                }
              }}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-[#456682] transition-all duration-200"
            />

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {!otpSent ? (
              <button
                onClick={handleSendOtp}
                className="w-full flex items-center justify-center bg-[#456682] cursor-pointer text-white py-3 rounded-full font-semibold hover:bg-[#345166] transition gap-2"
              >
                Send OTP  <FiArrowRight />
              </button>
            ) : (
              <>
                {/* Timer + Resend */}
                <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                  <span className="font-medium text-[#456682]">
                    {formatTime(timeLeft)}
                  </span>
                  <button
                    onClick={handleResendOtp}
                    disabled={timeLeft > 0}
                    className={`${
                      timeLeft > 0
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-[#456682] hover:underline cursor-pointer"
                    }`}
                  >
                    Resend OTP
                  </button>
                </div>

                {/* OTP Input */}
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    setOtp(val);
                    if (val === "") { setOtpError(""); }
                  }}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-[#456682] transition-all duration-200"
                />
                {otpError && <p className="text-red-500 text-sm mb-4">{otpError}</p>}

                <button
                  onClick={handleVerifyOtp}
                  className="w-full flex items-center justify-center bg-[#456682] cursor-pointer text-white py-3 rounded-full font-semibold hover:bg-[#345166] transition gap-2"
                >
                  Verify & Proceed <FiArrowRight />
                </button>
              </>
            )}

            {/* Terms */}
            <p className="text-sm text-center mt-4 text-teal-600 cursor-pointer hover:underline">
              Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
