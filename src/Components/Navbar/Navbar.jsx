import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-5">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-extrabold tracking-wide text-white"
        >
          Shilpa
          <span className="text-indigo-400"> Sarkar</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 text-[15px] font-medium text-slate-300">

            <li>
              <a
                href="#home"
                className="hover:text-indigo-400 transition duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-indigo-400 transition duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="hover:text-indigo-400 transition duration-300"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#experience"
                className="hover:text-indigo-400 transition duration-300"
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-indigo-400 transition duration-300"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-indigo-400 transition duration-300"
              >
                Contact
              </a>
            </li>

          </ul>
        </nav>

        {/* Desktop Resume */}
        <a
          href="/Shilpa_Sarkar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block rounded-xl bg-indigo-500 px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-indigo-600 hover:-translate-y-1"
        >
          Resume
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-slate-950 border-t border-slate-800">

          <ul className="flex flex-col items-center gap-6 py-8 text-white font-medium">

            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#experience" onClick={() => setMenuOpen(false)}>
                Experience
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>

            <li>
              <a
                href="/Shilpa_Sarkar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-500 px-6 py-3 rounded-xl text-white font-semibold hover:bg-indigo-600 transition"
              >
                Resume
              </a>
            </li>

          </ul>

        </div>
      </div>
    </header>
  );
}

export default Navbar;