const Github = () => {
  return (
    <section
      id="github"
      className="py-28 px-6 md:px-20 bg-gradient-to-b from-black to-darkbg"
    >
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 
                   bg-gradient-to-r from-primary to-secondary 
                   bg-clip-text text-transparent"
      >
        GitHub Activity
      </h2>

      <div className="flex flex-col items-center gap-12">

        {/* Contribution Graph */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                        rounded-3xl p-6 shadow-lg w-full max-w-4xl">
          <img
            src="https://ghchart.rshah.org/AbhishekKameri"
            alt="GitHub Contribution Graph"
            className="w-full"
          />
        </div>

        {/* GitHub Profile Button */}
        <a
          href="https://github.com/AbhishekKameri"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-primary to-secondary 
                     text-black font-semibold rounded-xl 
                     hover:scale-105 transition duration-300"
        >
          Visit My GitHub Profile →
        </a>
      </div>
    </section>
  );
};

export default Github;