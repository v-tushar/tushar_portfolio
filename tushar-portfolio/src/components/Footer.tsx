import { FaHeart, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {currentYear} Tushar Vantaram. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-gray-400 text-sm flex items-center">
              Made with <FaHeart className="text-red-500 mx-1" /> by Tushar
            </span>

            <button
              onClick={scrollToTop}
              className="p-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
