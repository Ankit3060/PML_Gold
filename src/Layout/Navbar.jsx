import React, { useContext, useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const item = [
  { title: "Home", path: "/" },
  { title: "Partner With Us", path: "/partner-with-us" },
  { title: "Contact Us", path: "/contact-us" },
];

export default function Navbar() {
  const { isLogin, username, logout } = useContext(AuthContext);
  const [isClicked, setClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggle = () => setClicked((s) => !s);
  const link_d = ({ isActive }) =>
    `p-2 rounded text-xl font-semibold text-[#D4AF37] 
    ${
      isActive
        ? "underline underline-offset-4 decoration-[var(--gold-color)]"
        : ""
    } 
    hover:scale-105 transition-transform duration-200 hover:bg-[var(--bg-color)]`;

  const link_m = ({ isActive }) =>
    `px-2 rounded my-1 whitespace-nowrap block font-semibold text-[#D4AF37] 
    ${
      isActive
        ? "underline underline-offset-4 decoration-[var(--gold-color)]"
        : ""
    } 
    hover:scale-105 transition-transform duration-200 hover:bg-[var(--bg-color)]`;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden sm:block">
        <div className="flex gap-4 items-center">
          {item.map((i) => (
            <NavLink key={i.title} to={i.path} className={link_d}>
              {i.title}
            </NavLink>
          ))}

          {isLogin ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 cursor-pointer text-[#D4AF37]"
              >
                <FaUserCircle size={28} className="text-[#D4AF37]" />
                <span>{username?.slice(0, 3)}...</span>
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border">
                  <NavLink
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    to="/transactions"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Transactions
                  </NavLink>
                  <NavLink
                    to="/portfolio"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Portfolio
                  </NavLink>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to="/login" className={link_d}>
                Login
              </NavLink>
              <NavLink to="/login" className={link_d}>
                Signup
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="relative block md:hidden">
        <button onClick={toggle}>
          {!isClicked ? <RxHamburgerMenu /> : <IoMdClose />}
        </button>
        <div
          className={`absolute -right-[35px] top-[50px] w-[200px] overflow-hidden transition-all bg-white duration-300 ${
            isClicked ? "h-screen p-4" : "h-0"
          }`}
        >
          {item.map((i) => (
            <NavLink key={i.title} to={i.path} className={link_m}>
              {i.title}
            </NavLink>
          ))}
          {isLogin ? (
            <div className="mt-2">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-1"
              >
                <FaUserCircle size={22} className="text-[#D4AF37]" />
                <span>{username}</span>
              </button>
              {menuOpen && (
                <div className="mt-2 bg-white rounded-lg shadow border">
                  <NavLink
                    to="/profile"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    to="/transactions"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Transactions
                  </NavLink>
                  <NavLink
                    to="/portfolio"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Portfolio
                  </NavLink>
                  <button
                    onClick={logout}
                    className="w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to="/login" className={link_m}>
                Login
              </NavLink>
              <NavLink to="/login" className={link_m}>
                Signup
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
}
