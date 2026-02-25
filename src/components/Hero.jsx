import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col 
                 justify-center items-center 
                 text-center px-6 md:px-20"
    >
      <div className="max-w-2xl">

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold text-lighttext">
          Abhishek Kameri
        </h1>

        {/* Changing Role */}
        <div className="mt-6 text-xl md:text-2xl text-muted h-10">
          <ReactTyped
            strings={[
              "Java Full Stack Developer",
              "Spring Boot Backend Developer",
              "REST API Builder",
              "React.js Frontend Developer",
              "Problem Solver & Learner"
            ]}
            typeSpeed={60}
            backSpeed={40}
            backDelay={1500}
            loop
          />
        </div>

        {/* Buttons */}
        <div className="mt-10 flex gap-6 flex-wrap justify-center">

          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-white 
                       rounded-md hover:bg-secondary 
                       transition duration-300"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-primary 
                       text-primary rounded-md 
                       hover:bg-primary hover:text-white 
                       transition duration-300"
          >
            View Resume
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;