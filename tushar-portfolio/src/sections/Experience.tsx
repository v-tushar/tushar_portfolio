import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    title: 'AI and Data Research Analyst',
    company: 'AI Applied Consortium',
    location: 'Texas',
    period: 'Nov 2024–Present',
    responsibilities: [
      'Subject matter expert in video annotation and pedestrian detection (YOLOv11, SuperAnnotate).',
      'Built real-time AI models for live camera feeds to derive urban insights.',
      'Conducted quality audits and stakeholder collaboration for urban planning.',
    ],
  },
  {
    title: 'Data Analyst Intern',
    company: 'Cognizant',
    location: 'Hyderabad',
    period: 'Mar 2022–Nov 2022',
    responsibilities: [
      'Analyzed trading data for regulatory compliance and improved efficiency by 20%.',
      'Built scalable systems using REST APIs and distributed techniques.',
    ],
  },
  {
    title: 'Data Scientist Intern',
    company: 'VI Solutions',
    location: 'Bangalore',
    period: 'Jun 2020–Aug 2020',
    responsibilities: [
      'Created ML models using scikit-learn for market trend forecasting.',
      'Worked with SQL, Azure, Docker, Kubernetes for data and deployment workflows.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Professional Experience</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700" />

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`mb-16 flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:flex md:w-1/2 justify-center items-center">
                  <div
                    className={`${
                      index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                    } w-full`}
                  >
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                      <p className="text-indigo-600 font-medium">{experience.company}</p>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1 mb-4">
                        <FaCalendarAlt className="mr-2" />
                        <span className="mr-4">{experience.period}</span>
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{experience.location}</span>
                      </div>
                      <ul className="space-y-2">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-gray-600 dark:text-gray-300 flex">
                            <span className="inline-block mr-2 h-5 w-5 mt-0.5 text-indigo-600">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex md:w-12 mx-auto items-center justify-center relative z-10">
                  <div className="h-12 w-12 bg-indigo-600 dark:bg-indigo-500 rounded-full flex items-center justify-center">
                    <FaBriefcase className="text-white" />
                  </div>
                </div>

                {/* Mobile view */}
                <div className="md:hidden bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 bg-indigo-600 dark:bg-indigo-500 rounded-full flex items-center justify-center mr-4">
                      <FaBriefcase className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                      <p className="text-indigo-600 font-medium">{experience.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1 mb-4">
                    <FaCalendarAlt className="mr-2" />
                    <span className="mr-4">{experience.period}</span>
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{experience.location}</span>
                  </div>

                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300 flex">
                        <span className="inline-block mr-2 h-5 w-5 mt-0.5 text-indigo-600">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Desktop view (opposite side) - Empty for layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
