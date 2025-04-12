import { motion } from 'framer-motion';
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaToolbox,
  FaPython,
  FaProjectDiagram,
  FaCloud,
  FaChartBar
} from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FaCode className="text-indigo-600 text-3xl mb-4" />,
    skills: ['Python', 'R', 'SQL', 'Node.js', 'PHP', 'PowerShell'],
  },
  {
    title: 'Data & Databases',
    icon: <FaDatabase className="text-indigo-600 text-3xl mb-4" />,
    skills: ['MySQL', 'PostgreSQL', 'Cassandra', 'Hadoop', 'PySpark'],
  },
  {
    title: 'Cloud & DevOps',
    icon: <FaCloud className="text-indigo-600 text-3xl mb-4" />,
    skills: ['Azure', 'Docker', 'Kubernetes', 'REST APIs'],
  },
  {
    title: 'Tools & Technologies',
    icon: <FaToolbox className="text-indigo-600 text-3xl mb-4" />,
    skills: ['Power BI', 'Tableau', 'Flask', 'Streamlit', 'SuperAnnotate'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto" />
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A collection of technologies and tools I've worked with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
