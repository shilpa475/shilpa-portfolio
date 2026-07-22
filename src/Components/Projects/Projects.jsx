import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Automation Testing Suite",
      year: "2026",
      description:
        "Built a Cypress E2E automation suite covering Login, Signup, Registration, Cart and Product Search with dynamic test data.",
      tech: ["Cypress", "JavaScript", "Automation", "Testing"],
      github: "https://github.com/shilpa475/automation-testing-project",
      demo: "#",
    },
    {
      title: "QaizenX",
      year: "2025 - Present",
      description:
        "Enterprise SaaS Feedback Management Platform tested using Manual Testing, API Testing, Database Validation and Regression Testing.",
      tech: ["React", "Laravel", "Postman", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-indigo-400 font-semibold">
            Projects
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6">
            Some of the projects I've worked on in Automation Testing,
            Manual Testing and Web Development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500 transition"
            >

              {/* Image Placeholder */}

              <div className="h-52 bg-gradient-to-br from-indigo-600 to-slate-800 flex items-center justify-center">

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

              </div>

              <div className="p-8">

                <p className="text-indigo-400 font-medium">
                  {project.year}
                </p>

                <p className="text-slate-400 mt-4 leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-5 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-indigo-500 px-5 py-3 rounded-xl hover:bg-indigo-600 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                 
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;