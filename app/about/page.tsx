"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap ,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiFramer,
  SiDrupal,
  SiStyledcomponents,
  SiPostgresql,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiNpm,
  SiFigma,
  SiWordpress,
} from "react-icons/si";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0d0d1f] via-[#111132] to-[#0d0d1f] text-white">
      <Navbar />

      {/* Main Content */}
      <section className="flex-1">
        {/* Top Section */}
        <div className="min-h-screen flex items-center px-6 md:px-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <motion.img
              src="/About.png"
              alt="About Illustration"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl font-extrabold mb-6">
                Know Who <span className="text-blue-400">I Am</span>
              </h1>

              <p className="text-gray-300 leading-relaxed text-lg">
                Hi Everyone, I am{" "}
                <span className="text-blue-400 font-semibold">Christian Jay Azarcon</span>{" "}
                from{" "}
                <span className="text-blue-400 font-semibold">Cebu City, Philippines</span>.
                <br />
                <br />
                I'm a {" "}
                <span className="text-blue-400 font-semibold">
                  Frontend Web Developer 
                </span>{" "}and{" "}
                <span className="text-blue-400 font-semibold">
                  Software Developer
                </span>{" "}
                with<span className="text-blue-400 font-semibold">
                  2 years of hands-on experience
                </span>{" "} in building modern, responsive, and user-focused websites and applications. Passionate about crafting clean and efficient code, I’m continuously expanding my expertise toward {" "}
                <span className="text-blue-400 font-semibold">full-stack development</span>.
                <br />
                <br />
                I’m driven by curiosity and creativity—always eager to learn new technologies, explore backend development, and create digital experiences that are both{" "}
                <span className="text-blue-400 font-semibold">
                  functional
                </span>{" "}
                and{" "}
                <span className="text-blue-400 font-semibold">
                  innovative
                </span>{" "}.
                
              </p>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-3/4 mx-auto bg-gray-700/50 my-16"></div>

        {/* Professional Skillset */}
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-16">
  <h2 className="text-3xl font-bold text-center mb-12">
    Professional <span className="text-blue-400">Skillset</span>
  </h2>

  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.2 },
      },
    }}
  >
    {[
      {
  icon: <FaHtml5 className="text-6xl" style={{ color: '#E34F26' }} />,
  name: "HTML5"
},
{
  icon: <FaCss3Alt className="text-6xl" style={{ color: '#1572B6' }} />,
  name: "CSS3"
},
{
  icon: <FaJs className="text-6xl" style={{ color: '#F7DF1E' }} />,
  name: "JavaScript"
},
{
  icon: <FaBootstrap className="text-6xl" style={{ color: '#7952B3' }} />,
  name: "Bootstrap"
},
{
  icon: <SiNextdotjs className="text-6xl" style={{ color: '#000000' }} />,
  name: "Next.js"
},
{
  icon: <FaReact className="text-6xl" style={{ color: '#61DAFB' }} />,
  name: "React"
},
{
  icon: <SiStyledcomponents className="text-6xl" style={{ color: '#DB7093' }} />,
  name: "Styled Components"
},
{
  icon: <SiRedux className="text-6xl" style={{ color: '#764ABC' }} />,
  name: "Redux"
},
{
  icon: <SiFramer className="text-6xl" style={{ color: '#0055FF' }} />,
  name: "Framer"
},
{
  icon: <FaNodeJs className="text-6xl" style={{ color: '#339933' }} />,
  name: "Node.js"
},
{
  icon: <SiPostgresql className="text-6xl" style={{ color: '#336791' }} />,
  name: "PostgreSQL"
},
{
  icon: <SiMysql className="text-6xl" style={{ color: '#4479A1' }} />,
  name: "MySQL"
},
{
  icon: <SiNpm className="text-6xl" style={{ color: '#CB3837' }} />,
  name: "NPM"
},

{
  icon: <FaPython className="text-6xl" style={{ color: '#3776AB' }} />,
  name: "Python"
},
{
  icon: <SiTailwindcss className="text-6xl" style={{ color: '#06B6D4' }} />,
  name: "Tailwind CSS"
},
{
  icon: <SiWordpress className="text-6xl" style={{ color: '#21759B' }} />,
  name: "WordPress"
},
{
  icon: <SiDrupal className="text-6xl" style={{ color: '#0678BE' }} />,
  name: "Drupal"
},
{
  icon: <SiTypescript className="text-6xl" style={{ color: '#3178C6' }} />,
  name: "Typescript"
}


    ].map((item, i) => (
      <motion.div
        key={i}
        className="w-40 h-40 flex flex-col items-center justify-center bg-[#1a1a2e] rounded-2xl shadow-lg hover:scale-110 hover:shadow-blue-500/40 transition"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {item.icon}
        <p className="mt-3 text-sm text-gray-300 font-medium">{item.name}</p>
      </motion.div>
    ))}
  </motion.div>
</div>


        {/* Divider */}
        <div className="h-[1px] w-3/4 mx-auto bg-gray-700/50 my-16"></div>

        {/* Tools I use */}
        <div className="max-w-6xl mx-auto px-6 md:px-16 pt-16 pb-12">
  <h2 className="text-3xl font-bold text-center mb-12">
    <span className="text-blue-400">Tools</span> I Use
  </h2>

  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.2 },
      },
    }}
  >
    {[
      { icon: <img src="/icons/vscode.png" alt="VS Code" className="w-14 h-14" />, name: "VS Code" },
      { icon: <FaGithub className="text-6xl" />, name: "GitHub" },
      { icon: <FaGitAlt className="text-6xl text-orange-500" />, name: "Git" },
      { icon: <SiFigma className="text-6xl text-orange-500" />, name: "Figma" },
      { icon: <SiVercel className="text-6xl" />, name: "Vercel" },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="w-40 h-40 flex flex-col items-center justify-center bg-[#1a1a2e] rounded-2xl shadow-lg hover:scale-110 hover:shadow-blue-500/40 transition"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {item.icon}
        <p className="mt-3 text-sm text-gray-300 font-medium">{item.name}</p>
      </motion.div>
    ))}
  </motion.div>
</div>

      </section>

      <Footer />
    </div>
  );
}
