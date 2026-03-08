"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0d0d1f] via-[#111132] to-[#0d0d1f]">
      <Navbar />

      {/* Contact Section */}
      <section className="flex-1 text-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-16 w-full">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Let’s <span className="text-blue-400">Work Together</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              I’m always open to new opportunities, collaborations, and creative projects.  
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            {/* Social Links */}
            <div className="flex gap-6 mt-8">
              <a href="https://github.com/christian-dev-space" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition"><FaGithub /></a>
              <a href="https://linkedin.com/in/chris-azarcon" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition"><FaLinkedin /></a>
              {/* <a href="https://twitter.com/you" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition"><FaTwitter /></a> */}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#1a1a2e] rounded-2xl shadow-lg p-10 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-400 text-xl" />
                <span>cjn.azarcon@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-400 text-xl" />
                <span>+63 969 283 5607</span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-400 text-xl" />
                <span>Cebu City, Philippines</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
