import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-2"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Who am I?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                I'm a data scientist with a Master's degree from DePaul University, specializing in
                leveraging AI and machine learning to solve complex problems. My expertise spans machine learning
                algorithms, AI systems architecture, and data infrastructure design.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With a strong foundation in both theoretical and practical aspects of data science,
                I'm passionate about using data to drive insights and create meaningful solutions
                that contribute to urban intelligence and beyond.
              </p>

              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
                <FaMapMarkerAlt className="text-indigo-600 mr-2" />
                <span>Chicago, IL</span>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-indigo-600 transition-colors duration-300"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077B5] text-white p-3 rounded-full hover:bg-indigo-600 transition-colors duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-indigo-100 dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Education</h3>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Master's in Data Science</p>
                  <p className="text-gray-600 dark:text-gray-400">DePaul University</p>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Interests</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li>Artificial Intelligence</li>
                    <li>Machine Learning</li>
                    <li>Urban Data Analysis</li>
                    <li>Computer Vision</li>
                  </ul>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-600/10 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-600/10 rounded-full z-0"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
