import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-20 bg-gradient-to-b from-darkbg to-black"
    >
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 
                   bg-gradient-to-r from-primary to-secondary 
                   bg-clip-text text-transparent"
      >
        Get In Touch
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                        rounded-3xl p-10 shadow-lg space-y-8">

          {/* Email */}
          <a
            href="mailto:abhishekkameri47@gmail.com"
            className="flex items-center gap-4 hover:text-primary transition"
          >
            <FaEnvelope className="text-xl" />
            <span>abhishekkameri47@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+917353227024"
            className="flex items-center gap-4 hover:text-primary transition"
          >
            <FaPhoneAlt className="text-xl" />
            <span>+91 7353227024</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abhishek-kameri-2147b22a7"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 hover:text-primary transition"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn Profile</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AbhishekKameri"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 hover:text-primary transition"
          >
            <FaGithub className="text-xl" />
            <span>GitHub Profile</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/YOUR_INSTAGRAM_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 hover:text-primary transition"
          >
            <FaInstagram className="text-xl" />
            <span>Instagram</span>
          </a>

        </div>

        {/* Short Message */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                        rounded-3xl p-10 shadow-lg flex items-center">
          <p className="text-gray-300 leading-relaxed">
            I am currently open to Java Full Stack and Backend Developer roles.
            Feel free to reach out via email or LinkedIn. 
            Let's build scalable and impactful applications together 🚀
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;