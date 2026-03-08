"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const projects = [
  {
    title: "Quiz App",
    description: "A lightweight and engaging quiz app built with Next.js. Choose categories, set difficulty, and test your knowledge with multiple-choice questions.",
    image: "/projects/Quiz-App.png",
    link: "https://simple-quiz-app-sand.vercel.app/",
  },
  {
    title: "Simple CRUD",
    description: "A simple CRUD application built with Next.js. Users can create, read, update, and delete records through a clean and responsive interface.",
    image: "/projects/Simple Crud.png",
    link: "https://crud-beige-seven-26.vercel.app/",
  },
  {
  title: "Portfolio Website",
  description:
    "A personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion. It showcases my skills, tools, and web development projects in a sleek, responsive, and animated layout designed for a smooth user experience.",
  image: "/projects/portfolio.png",
  link: "https://portfolio-website-five-liart-17.vercel.app/",
},

   {
     title: "To be displayed",
     description: "A basic e‑commerce app built with Next.js. Users can browse products, add items to cart, and place orders through a clean and responsive interface.",
     image: "/projects/ecommerce.png",
     link: "https://github.com/you/ecommerce",
   },
   {
     title: "Restaurant Reservation",
     description: "A basic e‑commerce app built with Next.js. Users can browse products, add items to cart, and place orders through a clean and responsive interface.",
     image: "/projects/Restaurant.png",
     link: "https://chan-restaurant.infinityfreeapp.com/",
   },
  // add more projects...
];

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0d0d1f] via-[#111132] to-[#0d0d1f] text-white">
      <Navbar />

      {/* Header */}
      <header className="py-24 text-center px-6">
        <motion.h1
          className="text-5xl font-extrabold"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore My <span className="text-blue-400">Projects</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          A selection of projects I’ve built using modern web technologies and
          creative ideas.
        </motion.p>
      </header>

      {/* Project Grid */}
      <section className="flex-1 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="relative group bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/10"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{proj.title}</h3>
                <p className="text-gray-300 flex-1">{proj.description}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-center bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition"
                >
                  View Project
                </a>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
