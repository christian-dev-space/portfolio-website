"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Projects", path: "/project", icon: <FaProjectDiagram /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0d0d1f] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-blue-400 tracking-wide">
          Chan
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 font-semibold tracking-wide">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className="flex items-center gap-2 hover:text-blue-400 relative group"
            >
              {link.icon}
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center bg-[#0d0d1f] pb-4 gap-2 font-semibold tracking-wide">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className="flex items-center gap-2 py-2 hover:text-blue-400"
              onClick={() => setOpen(false)} // close menu on click
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
