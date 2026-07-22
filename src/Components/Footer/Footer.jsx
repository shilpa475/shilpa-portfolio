import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800">

            <div className="max-w-7xl mx-auto px-8 py-20">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold text-white">
                        Let's Build Something
                        <span className="text-indigo-400"> Amazing.</span>
                    </h2>

                    <p className="mt-5 text-slate-400 max-w-xl mx-auto">
                        I'm currently open to QA Engineer opportunities.
                        Let's connect and build reliable software together.
                    </p>
                </motion.div>

                {/* Navigation */}
                <div className="flex flex-wrap justify-center gap-8 mt-12 text-slate-300 font-medium">

                    <a href="#home" className="hover:text-indigo-400 transition">
                        Home
                    </a>

                    <a href="#about" className="hover:text-indigo-400 transition">
                        About
                    </a>

                    <a href="#skills" className="hover:text-indigo-400 transition">
                        Skills
                    </a>

                    <a href="#experience" className="hover:text-indigo-400 transition">
                        Experience
                    </a>

                    <a href="#projects" className="hover:text-indigo-400 transition">
                        Projects
                    </a>

                    <a href="#contact" className="hover:text-indigo-400 transition">
                        Contact
                    </a>

                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-6 mt-10">

                    <a
                        href="mailto:shilpasarkar6715@gmail.com"
                        className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white hover:bg-indigo-500 hover:border-indigo-500 transition duration-300"          >
                        <FaEnvelope />
                    </a>

                    <a
                        href="https://linkedin.com/in/shilpa-sarkar-7a4782278"
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white hover:bg-indigo-500 hover:border-indigo-500 transition duration-300"          >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/shilpa475"
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white hover:bg-indigo-500 hover:border-indigo-500 transition duration-300"
                    >
                        <FaGithub />
                    </a>

                </div>

                {/* Bottom */}
                <div className="border-t border-slate-800 mt-14 pt-8 text-center">

                    <p className="text-slate-500">
                        © {new Date().getFullYear()} Shilpa Sarkar. All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;