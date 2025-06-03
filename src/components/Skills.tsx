import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
      { name: 'Redux', level: 90, color: 'from-purple-500 to-pink-500' },
      { name: 'TypeScript', level: 85, color: 'from-blue-600 to-indigo-600' },
      { name: 'React Query', level: 85, color: 'from-amber-500 to-orange-500' },
      { name: 'React Hook Form', level: 90, color: 'from-rose-500 to-pink-500' },
      { name: 'Tailwind CSS', level: 95, color: 'from-cyan-500 to-blue-500' },
      { name: 'Material UI', level: 90, color: 'from-blue-500 to-indigo-500' },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
      { name: 'Express.js', level: 80, color: 'from-gray-500 to-gray-700' },
      { name: 'MongoDB', level: 75, color: 'from-green-600 to-emerald-600' },
    ]
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', level: 90, color: 'from-orange-500 to-red-500' },
      { name: 'Docker', level: 75, color: 'from-blue-500 to-indigo-500' },
      { name: 'AWS', level: 70, color: 'from-yellow-500 to-orange-500' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-gradient py-24">
      <div className="section-decoration" />

      <div className="content-wrapper px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 via-rose-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass glass-hover p-6 rounded-lg"
            >
              <h3 className="text-2xl font-semibold gradient-text mb-6">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
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