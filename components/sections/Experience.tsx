'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
  tech?: string[];
}

const experiences: Experience[] = [
  {
    company: 'Facebook',
    role: 'Software Engineer',
    duration: '2020 - Present',
    achievements: [
      'Developed and maintained scalable backend services for Facebook\'s core platform, handling millions of requests per second.',
      'Implemented new features and optimized existing functionalities, resulting in a 15% improvement in system performance and reduced latency.',
      'Collaborated with cross-functional teams to design and implement robust API solutions, ensuring seamless integration with frontend applications.',
      'Mentored junior engineers and contributed to code reviews, fostering a culture of high-quality code and best practices.',
    ],
    tech: ['Python', 'Django', 'PostgreSQL', 'Redis', 'MongoDB', 'AWS'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white/40 backdrop-blur-sm dark:bg-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-[#C8C8D4]">
            Professional journey and achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-pink-600" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-24"
              >
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 rounded-full border-4 border-white dark:border-indigo-950 shadow-lg" />

              {/* Content card */}
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:bg-gradient-to-br dark:from-[#1A1037]/70 dark:to-[#1A1037]/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-purple-500/30"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(168, 85, 247, 0.15)',
                }}>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-5 h-5 text-purple-400" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-xl text-purple-400 dark:text-purple-400 font-semibold ml-8">
                        @ {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                         className="flex items-start gap-3 text-gray-700 dark:text-[#C8C8D4]"
                       >
                         <span className="text-purple-400 dark:text-purple-400 mt-1.5 flex-shrink-0">▸</span>
                         <span>{achievement}</span>
                       </motion.li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  {exp.tech && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

