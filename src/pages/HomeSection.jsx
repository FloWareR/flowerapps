function HomeSection() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <div className="px-6 sm:px-12">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4 animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-700">
            Rafael Flores
          </span>
        </h1>
        <p className="text-2xl text-gray-700 mb-6 animate-slide-in">
          Backend Developer | Game Developer
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="#projects"
            className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded-full shadow-lg transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="text-blue-600 border-blue-600 border-2 hover:bg-blue-100 font-semibold py-2 px-4 rounded-full transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
