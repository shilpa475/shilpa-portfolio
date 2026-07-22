import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
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
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Connect
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Interested in working together or have an opportunity?
            Feel free to connect with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="flex items-center gap-5">
              <FaEnvelope className="text-indigo-400 text-2xl" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-slate-400">
                  shilpasarkar6715@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaPhone className="text-indigo-400 text-2xl" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-slate-400">
                  +91 8010118902
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaMapMarkerAlt className="text-indigo-400 text-2xl" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-slate-400">
                  Nagpur, Maharashtra
                </p>
              </div>
            </div>

            <div className="flex gap-6 text-3xl pt-4">

              <a
                href="https://github.com/shilpa475"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/shilpa-sarkar-7a4782278"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 border border-slate-800 rounded-3xl p-8 space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-900 rounded-xl p-4 outline-none border border-slate-800 focus:border-indigo-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-900 rounded-xl p-4 outline-none border border-slate-800 focus:border-indigo-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-slate-900 rounded-xl p-4 outline-none border border-slate-800 focus:border-indigo-500 resize-none"
            ></textarea>

            <button
              className="w-full bg-indigo-500 py-4 rounded-xl font-semibold hover:bg-indigo-600 transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;