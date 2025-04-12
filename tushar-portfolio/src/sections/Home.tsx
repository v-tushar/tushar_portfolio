const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center bg-gray-100 text-gray-900"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Tushar's Portfolio</h1>
        <p className="text-lg mb-6">A passionate data scientist exploring AI, analytics, and urban intelligence.</p>
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Home;
