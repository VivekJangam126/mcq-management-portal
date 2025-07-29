import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

 

  return (
    <nav className="bg-[#d3d3d3] text-black shadow-md fixed top-0 w-full z-50 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-lg font-semibold tracking-wide">
            <Link to="/" className="hover:text-gray-700">
              📘 GPP-MCQ Portal
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>

          {/* Links */}
          <div
            className={`md:flex gap-6 items-center ${
              menuOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul className="md:flex gap-6 text-sm font-medium items-center">
              <li>
                <Link
                  to="/login"
                  className="bg-white text-black px-4 py-1.5 rounded shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="bg-white text-black px-4 py-1.5 rounded shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Register
                </Link>
              </li>
            </ul>
            <button
              onClick={handleLogout}
              className="mt-2 md:mt-0 bg-white text-red-500 px-4 py-1.5 rounded shadow-md hover:shadow-lg border border-red-500 text-sm transition-all duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
