import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'CITI Onboarding Portal',
    description: 'Led the frontend development of the CITI onboarding portal, optimizing user flows and leveraging responsive design to ensure seamless onboarding for global clients. Developed reusable React input modules deployed across the website, streamlining the onboarding flow, dashboard, and portal implementation.',
    image: '/projects/citi-portal.jpg',
    technologies: ['React', 'Redux', 'Redux Toolkit', 'TypeScript', 'HTML5', 'CSS3'],
    company: 'Altimetrik',
    period: 'Aug 2023 - Dec 2024',
  },
  {
    title: 'Auction and Bidding Platform',
    description: 'Contributed to migrating the project from plain JavaScript to React. Played a key role in developing several complex components, including the Auction and Bidding features. Helped optimize the website, improving performance by 70%.',
    image: '/projects/auction-platform.jpg',
    technologies: ['React', 'Redux', 'Redux Toolkit', 'TypeScript', 'HTML5', 'CSS3'],
    company: 'Codersbrain',
    period: 'June 2021 - April 2023',
  },
  {
    title: 'IDFC Bank Website',
    description: 'Contributed to the development of the IDFC Bank website, focusing on admin operations and configuration for Micro ATMs across retail outlets nationwide in India. Developed reusable React components for internal projects.',
    image: '/projects/idfc-bank.jpg',
    technologies: ['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3'],
    company: 'Novopay Solutions',
    period: 'June 2018 - Feb 2019',
  },
  {
    title: 'Machine Learning Workbench',
    description: 'Delivered the Machine Learning Workbench project, an intuitive platform enabling users to import datasets, perform EDA, and build and deploy interpretable ML models. Developed a portal featuring multiple visualizations for data insights.',
    image: '/projects/ml-workbench.jpg',
    technologies: ['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3'],
    company: 'Khosla Labs',
    period: 'July 2016 - May 2018',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
                <div className="relative group/image">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60"
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg transform transition duration-200 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <span className="text-sm text-white/80">{project.company}</span>
                      <motion.a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white hover:text-pink-400 transition-colors"
                      >
                        <FaExternalLinkAlt size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    {project.period}
                  </p>
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 