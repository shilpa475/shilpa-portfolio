import { motion } from "framer-motion";
import {
  SiCypress,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPostman,
  SiJira,
  SiGit,
  SiGithub,
  SiMysql,
} from "react-icons/si";
import { FaBug } from "react-icons/fa";

function Skills() {
  const skills = [
    {
      icon: <FaBug />,
      name: "Manual Testing",
      color: "text-red-400",
    },
    {
      icon: <SiCypress />,
      name: "Cypress",
      color: "text-green-400",
    },
    {
      icon: <SiPostman />,
      name: "API Testing",
      color: "text-orange-400",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      color: "text-yellow-400",
    },
    {
      icon: <SiReact />,
      name: "React.js",
      color: "text-cyan-400",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      color: "text-sky-400",
    },
    {
      icon: <SiJira />,
      name: "Jira",
      color: "text-blue-400",
    },
    {
      icon: <SiGit />,
      name: "Git",
      color: "text-orange-500",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
      color: "text-white",
    },
    {
      icon: <SiMysql />,
      name: "SQL",
      color: "text-indigo-400",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-8"
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
            Skills
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technical Skills
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6 leading-8">
            Technologies and tools I use for Manual Testing,
            Automation Testing and Frontend Development.
          </p>

        </motion.div>

        {/* Skills Grid */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.04,
              }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center transition duration-300 hover:border-indigo-500 hover:shadow-xl"
            >

              <div className={`text-5xl mb-5 ${skill.color}`}>
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {skill.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;