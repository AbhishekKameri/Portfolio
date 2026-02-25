import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 px-6 md:px-20 bg-gradient-to-b from-black to-darkbg"
    >
      {/* Section Title */}
     <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-4xl md:text-5xl font-bold text-center mb-20 text-lighttext"
>
  Core Competencies
</motion.h2>
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - MAIN EXPERTISE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 
                     rounded-3xl p-10 shadow-xl"
        >
          <h3 className="text-3xl font-semibold text-primary mb-6">
            Backend Engineering
          </h3>

          <p className="text-gray-300 leading-relaxed mb-8">
            Specialized in building scalable server-side applications 
            using Java and Spring Boot. Experienced in designing RESTful APIs,
            implementing MVC architecture, and integrating MySQL databases 
            for high-performance web applications.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Java",
              "Spring Boot",
              "REST APIs",
              "JDBC",
              "MySQL",
              "MVC Architecture",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg text-sm 
                           bg-primary/10 border border-primary/40
                           hover:bg-primary hover:text-black
                           transition duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE - SUPPORTING SKILLS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {[
            {
              title: "Frontend Development",
              desc: "Building responsive and dynamic user interfaces using React.js, JavaScript, and modern CSS frameworks.",
              tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
            },
            {
              title: "Database Management",
              desc: "Designing and optimizing relational databases with MySQL and writing efficient SQL queries.",
              tech: ["MySQL", "SQL"],
            },
            {
              title: "Development Tools",
              desc: "Version control, debugging, and structured development practices using Git and modern IDEs.",
              tech: ["Git", "GitHub", "VS Code", "Eclipse"],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 
                         rounded-2xl p-8 hover:border-secondary 
                         transition duration-500"
            >
              <h4 className="text-xl font-semibold text-secondary mb-3">
                {item.title}
              </h4>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-secondary/10 
                               border border-secondary/30 
                               rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;