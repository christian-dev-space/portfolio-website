"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0d0d1f] via-[#111132] to-[#0d0d1f]">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-white text-center px-6 pt-24">
        {/* Profile Image with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full border-4 border-blue-400 blur-md animate-pulse"></div>
          <img
            src="/CJ.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover border-4 border-gray-700 relative z-10"
          />
        </motion.div>

        {/* Name & Title */}
        <motion.h2
          className="mt-6 text-lg text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hello, I am
        </motion.h2>

        <motion.h1
          className="text-5xl font-extrabold mt-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Christian Jay <span className="text-blue-400">Azarcon</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-gray-400 max-w-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
           I’m a web developer passionate about creating modern, responsive, and user-friendly websites that bring ideas to life.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex gap-5 mt-8 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[
            // { icon: <FaFacebookF />, href: "#" },
            { icon: <FaGithub />, href: "https://github.com/christian-dev-space" },
            // { icon: <FaInstagram />, href: "#" },
            { icon: <FaLinkedin />, href: "https://linkedin.com/in/chris-azarcon" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="p-3 rounded-full bg-white/10 hover:bg-blue-500 hover:text-white transition transform hover:scale-110 shadow-lg"
            >
              {item.icon}
            </a>
          ))}
        </motion.div>

        {/* Download CV Button */}
        <motion.a
          href="/Christian Jay Azarcon.pdf"
          download
          className="mt-10 bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <span className="relative z-10">Download CV</span>
          <span className="absolute inset-0 bg-blue-400 opacity-30 blur-xl animate-pulse"></span>
        </motion.a>
      </section>

      <Footer />
    </div>
  );
}
