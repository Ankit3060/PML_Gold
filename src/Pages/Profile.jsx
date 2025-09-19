import React, { useState } from "react";
import {
  FaEdit,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendar,
  FaUniversity,
  FaCreditCard,
  FaCheckCircle,
  FaWallet,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbMoneybag } from "react-icons/tb";


function Profile() {
  const [showAccountNumber, setShowAccountNumber] = useState(false);
  const [showPanNumber, setShowPanNumber] = useState(false);
  const [kycStatus, setKycStatus] = useState("Pending");
  const [showKycForm, setShowKycForm] = useState(false);
  const [panInput, setPanInput] = useState("");

  const navigateTo = useNavigate();

  const name = "Ankit Kumar";
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const validatePan = ()=>{
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const test =  panRegex.test(panInput);
    if(!test){
      alert("Invalid PAN format. Please enter a valid PAN.");
      return false;
    }
    return true;
  }

  const handlePanSubmit = (e) => {
    e.preventDefault();
    if (!panInput) {
      alert("Please enter PAN number");
      return;
    }
    if(!validatePan()){
      return;
    }
    alert(`PAN ${panInput} submitted for verification`);
    setShowKycForm(false);
    setKycStatus("Verified");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 relative">
      <div className={`max-w-6xl mx-auto ${showKycForm ? "blur-sm" : ""}`}>
        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-xl mb-8 p-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            {/* Profile Picture + Name */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full bg-blue-100 p-1 shadow-lg">
                  <div className="w-full h-full rounded-full bg-[#456682] flex items-center justify-center text-white font-bold text-4xl shadow-inner">
                    {initials}
                  </div>
                </div>
                <button className="absolute bottom-2 right-2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group-hover:bg-blue-50">
                  <FaEdit className="text-[#456682] text-sm" />
                </button>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-white text-xs" />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold text-[#456682] mb-2">
                  {name}
                </h1>
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 font-semibold">
                    Verified Account
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start text-[#456682]">
                  <FaCalendar className="mr-2" />
                  <span>Member since Jan 2024</span>
                </div>
              </div>
            </div>

            {/* Funds */}
            <div className="mt-6 md:mt-0">
              <div className="bg-[#D4AF37] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3">
                  <FaWallet className="text-white text-2xl" />
                  <div>
                    <p className="text-green-100 text-sm font-medium">
                      Available Funds
                    </p>
                    <p className="text-white text-2xl font-bold">₹1,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="bg-[#456682] p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <FaUser className="text-white text-xl" />
                  <h2 className="text-xl font-bold text-white">
                    Personal Information
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {[
                {
                  icon: FaEnvelope,
                  label: "Email",
                  value: "ankit330660@gmail.com",
                },
                {
                  icon: IoMdCall,
                  label: "Phone",
                  value: "+91 9876543210",
                },
                {
                  icon: FaCheckCircle,
                  label: "KYC Status",
                  value: kycStatus,
                  isStatus: true,
                  isKyc: true,
                },
                {
                  icon: FaMapMarkerAlt,
                  label: "Address",
                  value: "Patna, Bihar, India",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between group hover:bg-gray-50 p-3 rounded-lg transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 ${item.color} bg-opacity-10 rounded-lg flex items-center justify-center`}
                    >
                      <item.icon className={`${item.color} text-lg`} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        {item.label}
                      </p>
                      <p
                        className={`font-semibold ${
                          item.isStatus && kycStatus === "Verified"
                            ? "text-green-600"
                            : "text-gray-800"
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                  {item.isKyc && kycStatus === "Pending" && (
                    <button
                      onClick={() => setShowKycForm(true)}
                      className="text-[#456682] transition-all"
                    >
                      <FaEdit />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bank Details */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="bg-[#456682] p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <FaUniversity className="text-white text-xl" />
                  <h2 className="text-xl font-bold text-white">Bank Details</h2>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {[
                {
                  icon: FaCreditCard,
                  label: "Account Number",
                  value: showAccountNumber ? "12345679081" : "****9081",
                  hasToggle: true,
                },
                {
                  icon: FaUniversity,
                  label: "Bank Name",
                  value: "Kotak Mahindra Bank",
                },
                {
                  icon: FaCreditCard,
                  label: "IFSC Code",
                  value: "KKBK0001234",
                },
                {
                  icon: FaCreditCard,
                  label: "PAN",
                  value: showPanNumber ? "ABCDE1234F" : "*****34F",
                  hasToggle: true,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between group hover:bg-gray-50 p-3 rounded-lg transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 ${item.color} bg-opacity-10 rounded-lg flex items-center justify-center`}
                    >
                      <item.icon className={`${item.color} text-lg`} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        {item.label}
                      </p>
                      <p className="font-semibold text-gray-800">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {item.hasToggle && (
                      <button
                        onClick={() =>
                          item.label === "Account Number"
                            ? setShowAccountNumber((prev) => !prev)
                            : setShowPanNumber((prev) => !prev)
                        }
                        className="text-gray-400 hover:text-[#456682] transition-all duration-200"
                      >
                        {showAccountNumber && item.label === "Account Number" ? (
                          <FaEyeSlash />
                        ) : showPanNumber && item.label === "PAN" ? (
                          <FaEyeSlash />
                        ) : (
                          <FaEye />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-xl font-bold text-[#456682] mb-6">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Add Money", color: "bg-[#456682]", icon: <TbMoneybag />, navigate: "/addmoney" },
              { label: "Withdraw", color: "bg-[#456682]", icon: <FaCreditCard />, navigate: "/withdraw" },
              { label: "Transaction History", color: "bg-[#456682]", icon: <BsGraphUpArrow />, navigate: "/transactions" },
              { label: "Settings", color: "bg-[#456682]", icon: <IoMdSettings />, navigate: "/settings" },
            ].map((action, index) => (
              <button
                key={index}
                onClick={() => navigateTo(action.navigate)}
                className={`${action.color} text-white cursor-pointer p-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <div className="flex text-2xl mb-2 text-[#D4AF37] items-center justify-center">{action.icon}</div>
                <div className="text-sm">{action.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for PAN Verification */}
      {showKycForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-40"
            onClick={() => setShowKycForm(false)}
          ></div>
          <div className="bg-white rounded-2xl shadow-xl p-6 w-96 z-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Verify Your PAN
            </h2>
            <form onSubmit={handlePanSubmit} className="space-y-4">
              <input
                type="text"
                value={panInput}
                onChange={(e) => setPanInput(e.target.value)}
                maxLength={10}
                placeholder="Enter PAN Number"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
              <button
                type="submit"
                className="w-full bg-[#456682] text-white py-2 rounded-lg hover:bg-[#456692] cursor-pointer transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
