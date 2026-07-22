import { motion } from "framer-motion";
import {
  FaUserTie,
  FaBug,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaUserTie />,
      title: "Experience",
      value: "1+ Year",
    },
    {
      icon: <FaBug />,
      title: "Bugs Fixed",
      value: "20+",
    },
    {
      icon: <FaCode />,
      title: "APIs Tested",
      value: "10+",
    },
    {
      icon: <FaGraduationCap />,
      title: "Education",
      value: "MCA • 9.33 CGPA",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[6px] text-indigo-400 font-semibold">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Passionate QA Engineer
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            I am a QA Engineer with 1+ year of experience in Manual &
            Automation Testing. I specialize in Cypress, API Testing,
            Functional Testing, Regression Testing, Jira and SDLC/STLC.
            I enjoy identifying critical bugs, improving software quality,
            and building reliable applications.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-indigo-500 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-4xl text-indigo-400 mb-5">
                {card.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {card.title}
              </h3>

              <p className="mt-3 text-3xl font-bold">
                {card.value}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Journey */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="mt-20 bg-slate-950 border border-slate-800 rounded-3xl p-10"
        >

          <h3 className="text-3xl font-bold">
            My Journey 🚀
          </h3>

          <p className="mt-6 leading-8 text-slate-400">
            My journey started as a Software Developer Intern where I
            worked with React.js and responsive web applications.
            Currently, I am working as an Associate QA Analyst at
            Lissen.io, testing enterprise SaaS products through Manual
            Testing, Automation Testing with Cypress, API Validation,
            Bug Tracking using Jira, and ensuring high-quality software
            delivery.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default About;