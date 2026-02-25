const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-darkbg">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-lighttext mb-8">
          About Me
        </h2>

        <p className="text-muted leading-relaxed text-lg">
          Java Full Stack Developer with hands-on experience in 
          <span className="text-primary"> Spring Boot</span>, 
          <span className="text-primary"> REST APIs</span>, and 
          <span className="text-primary"> MySQL</span>.  
          I focus on building clean, scalable backend systems 
          and continuously improving my problem-solving skills.
        </p>

      </div>
    </section>
  );
};

export default About;