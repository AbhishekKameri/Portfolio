import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full
                 h-16 md:h-20
                 bg-black/80 backdrop-blur-md
                 border-b border-white/10
                 z-[9999]
                 px-4 sm:px-6 md:px-8
                 flex justify-between items-center"
    >
      {/* Logo */}
      <h1
        className="text-2xl font-bold
                   bg-gradient-to-r from-primary to-secondary
                   bg-clip-text text-transparent"
      >
        Abhishek
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center text-white">
        <a href="#about" className="hover:text-primary transition">About</a>
        <a href="#skills" className="hover:text-primary transition">Skills</a>
        <a href="#projects" className="hover:text-primary transition">Projects</a>
        <a href="#contact" className="hover:text-primary transition">Contact</a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 rounded-md font-semibold text-white
                     bg-gradient-to-r from-pink-500 to-pink-600
                     hover:from-pink-600 hover:to-pink-700
                     transition duration-300 shadow-md"
        >
          View Resume
        </a>
      </div>

      {/* Mobile 3 Bars */}
      <div
        className="md:hidden flex flex-col space-y-1 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="absolute top-16 left-0 w-full
                     bg-black/95 backdrop-blur-md
                     flex flex-col items-center
                     py-6 space-y-6 text-white md:hidden"
        >
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-md font-semibold text-white
                       bg-gradient-to-r from-pink-500 to-pink-600"
          >
            View Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
