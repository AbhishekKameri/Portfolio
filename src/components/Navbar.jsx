const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/40 backdrop-blur-md z-50 px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Abhishek
      </h1>

      <div className="space-x-6 hidden md:flex items-center">
        <a href="#about" className="hover:text-primary transition">About</a>
        <a href="#skills" className="hover:text-primary transition">Skills</a>
        <a href="#projects" className="hover:text-primary transition">Projects</a>
        <a href="#contact" className="hover:text-primary transition">Contact</a>

        {/* View Resume Button */}
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

    </nav>
  );
};

export default Navbar;