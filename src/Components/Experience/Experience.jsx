import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      company: "Lissen.io",
      role: "Associate QA Analyst",
      duration: "Sep 2025 – Present",
      points: [
        "Performed Manual & Functional Testing across 5+ SaaS modules.",
        "Resolved 20+ production defects through root cause analysis.",
        "Validated 10+ REST APIs using Postman.",
        "Worked with PostgreSQL & MongoDB for data validation.",
        "Collaborated with Agile team using Jira."
      ]
    },
    {
      company: "Wide Softech Pvt. Ltd.",
      role: "Software Developer Intern",
      duration: "Jan 2025 – Jun 2025",
      points: [
        "Worked on React.js applications.",
        "Performed UI & Cross Browser Testing.",
        "Debugged frontend issues and improved application quality.",
        "Collaborated with developers during feature implementation."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-indigo-400 font-semibold">
            Experience
          </p>

          <h2 className="text-5xl font-bold mt-4">
            My Professional Journey
          </h2>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Line */}

          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-slate-700 -translate-x-1/2"></div>

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: .8,
              }}
              viewport={{ once: true }}
              className={`relative mb-16 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              {/* Dot */}

              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg">
                <FaBriefcase />
              </div>

              {/* Card */}

              <div className="ml-16 md:ml-0 md:w-[45%] bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500 transition duration-300">

                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>

                <h4 className="text-indigo-400 mt-2">
                  {exp.company}
                </h4>

                <p className="text-slate-400 mt-2">
                  {exp.duration}
                </p>

                <ul className="mt-5 space-y-3 text-slate-300">

                  {exp.points.map((point, i) => (

                    <li key={i}>
                      • {point}
                    </li>

                  ))}

                </ul>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;