'use client';

import { motion } from 'framer-motion';

interface SkillCategory {
  category: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Backend',
    skills: ['Django', 'Django REST Framework', 'FastAPI', 'Python', 'Flask'],
    color: 'from-purple-600 to-purple-800',
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'SQLite', 'MongoDB'],
    color: 'from-blue-600 to-blue-800',
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'Nginx', 'Gunicorn', 'Celery', 'GitHub Actions', 'Git'],
    color: 'from-green-600 to-green-800',
  },
  {
    category: 'Cloud',
    skills: ['AWS S3', 'DigitalOcean', 'Render', 'Heroku'],
    color: 'from-orange-600 to-orange-800',
  },
  {
    category: 'Tools',
    skills: ['Git', 'Postman', 'VSCode', 'Cursor', 'Linux'],
    color: 'from-pink-600 to-pink-800',
  },
  {
    category: 'APIs & Integrations',
    skills: ['Lark API', 'Stripe', 'WebSocket', 'REST APIs', 'GraphQL'],
    color: 'from-indigo-600 to-indigo-800',
  },
];

export default function Skills() {
  return (
<section
  id="skills"
  className="
    py-20 px-4
    bg-gradient-to-br from-purple-100/50 via-blue-100/50 to-pink-100/50
    dark:bg-none dark:bg-[#0D0B1F]
  "
>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-[#C8C8D4]">
            Technologies I work with daily
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl rounded-2xl transition-opacity duration-300" style={{ background: `linear-gradient(to right, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})` }} />
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:bg-gradient-to-br dark:from-[#1A1037]/70 dark:to-[#1A1037]/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-purple-500/30" style={{ boxShadow: '0 8px 32px 0 rgba(168, 85, 247, 0.15)' }}>
                <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

