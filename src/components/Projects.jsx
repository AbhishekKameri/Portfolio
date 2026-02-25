const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 bg-cardbg">
      <h2 className="text-4xl font-bold text-center mb-12 glow">Projects</h2>

      <div className="max-w-4xl mx-auto bg-darkbg p-8 rounded-2xl shadow-lg hover:scale-105 transition">
        <h3 className="text-2xl font-semibold text-primary">
          Shopzi – E-Commerce Web Application
        </h3>
        <p className="mt-4 text-gray-400">
          Developed responsive e-commerce web app using Spring Boot, Thymeleaf,
          and MySQL. Implemented product listing, Add-to-Cart, and REST APIs.
        </p>

        <div className="mt-6 space-x-4">
          <a href="https://github.com/AbhishekKameri" className="px-4 py-2 bg-primary text-black rounded-lg">
            GitHub
          </a>
          <a href="#" className="px-4 py-2 border border-primary rounded-lg">
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
