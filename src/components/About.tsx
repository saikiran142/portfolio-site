import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-gradient py-24">
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 via-rose-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group p-4"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-rose-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <img
              src="https://placehold.co/600x400/1a1a1a/ffffff?text=Your+Photo"
              alt="Saikiran Ramavath"
              className="relative rounded-lg shadow-xl w-full h-auto transform transition duration-200 group-hover:scale-[1.02] animate-float"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 p-4"
          >
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a Senior Software Development Engineer with over 7 years of experience in web development,
                specializing in React, Redux, and modern JavaScript technologies. Currently working at Altimetrik,
                I lead frontend development initiatives and create efficient, scalable solutions.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I hold a B.E. in Computer Science and Engineering from IIT Mandi and have worked with various
                companies including Codersbrain, Novopay Solutions, and Khosla Labs. My expertise lies in
                building robust web applications and optimizing user experiences.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold gradient-text">
                Education
              </h3>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass glass-hover p-6 rounded-lg"
                >
                  <h4 className="text-xl font-semibold text-white mb-2">
                    B.E. in Computer Science and Engineering
                  </h4>
                  <p className="text-slate-300">Indian Institute of Technology (IIT) Mandi, Himachal Pradesh</p>
                  <p className="text-slate-400">CGPA: 7.3/10 (2012 - 2016)</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 