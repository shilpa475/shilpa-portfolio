import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center pt-24 pb-20"    >
      <div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-indigo-400 text-lg font-semibold tracking-wider uppercase">
            Hello, I'm
          </p>

          <h1 className="mt-4 text-6xl md:text-7xl font-black leading-tight">
            <span className="text-white">Shilpa</span>
            <br />
            <span className="text-indigo-400">Sarkar</span>
          </h1>

          <h2 className="mt-6 text-3xl font-semibold text-slate-200 h-10">
            <Typewriter
              words={[
                "QA Engineer",
                "Automation Tester",
                "API Tester",
                "React Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
            />
          </h2>

          <p className="mt-8 max-w-xl text-slate-400 text-lg leading-8">
            QA Engineer with 1+ year of experience in Manual & Automation
            Testing. Skilled in Cypress, API Testing, SDLC/STLC, React.js and
            passionate about delivering reliable, high-quality software through
            effective testing and automation.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="/Shilpa_Sarkar_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-indigo-500 px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-indigo-600 hover:-translate-y-1"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="rounded-xl border border-indigo-500 px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-indigo-500 hover:-translate-y-1"
            >
              View Projects
            </a>
          </div>

        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            y: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            },
          }}
        >
          <img
            src="/profile.jpg"
            alt="Shilpa Sarkar"
            className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-slate-700 shadow-2xl transition duration-500 hover:scale-105"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-indigo-400 text-2xl"
      >
        <FaArrowDown />
      </motion.a>
    </section>
  );
}

export default Hero;