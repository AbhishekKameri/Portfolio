import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPosition = window.scrollY;

      setScroll((scrollPosition / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden scroll-smooth">

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1
                   bg-gradient-to-r from-primary to-secondary
                   z-[10000] transition-all duration-200"
        style={{ width: `${scroll}%` }}
      />

      <Navbar />

      {/* Important: Prevent content hiding behind navbar */}
      <main className="pt-16 md:pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <Contact />
      </main>

    </div>
  );
}

export default App;
