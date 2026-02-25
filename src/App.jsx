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

    // Cleanup (important)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔥 Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary z-50 transition-all duration-200"
        style={{ width: `${scroll}%` }}
      ></div>

      {/* 💎 Portfolio Sections */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />
    </>
  );
}

export default App;