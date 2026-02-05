'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Zap } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
  tech?: string[];
}

const experiences: Experience[] = [
  {
    company: 'Remote Talent Ltd',
    role: 'Python / Django Backend Developer',
    duration: '2025 – Present',
    location: 'Khulna, Bangladesh',
    achievements: [
      'Supported production food delivery platforms (HungryTiger, ChatChef) serving real users',
      'Built and maintained REST APIs for Customer App, OMS, and Rider App using Django REST Framework',
      'Owned order lifecycle flows: fulfillment, cancellations, refunds, and settlements',
      'Designed billing and payout rules: commissions, vouchers, discounts, and contract pricing',
      'Automated invoicing and scheduled background jobs using Celery and Redis',
      'Integrated payments: Cash, bKash, SSLCommerz, Stripe, Wallet with proper reconciliation',
      'Contributed to HungryTiger website features using Next.js',
    ],
    tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Next.js'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-gradient-to-b from-white/60 to-purple-50/30 dark:from-transparent dark:to-[#0D0B1F]/50 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-[#C8C8D4] max-w-2xl mx-auto">
            Building production systems that scale
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-indigo-600 to-pink-600 rounded-full" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-20 md:pl-28"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-8 w-6 h-6 bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 rounded-full border-4 border-white dark:border-[#0D0B1F] shadow-lg ring-4 ring-purple-500/20" />

                {/* Content card */}
                <div
                  className="relative backdrop-blur-xl bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-[#1A1037]/80 dark:to-[#0D0B1F]/80 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/60 dark:border-purple-500/20 overflow-hidden"
                  style={{ boxShadow: '0 8px 40px 0 rgba(168, 85, 247, 0.12)' }}
                >
                  {/* Subtle accent gradient */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-400/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                            <Briefcase className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                              {exp.role}
                            </h3>
                            <p className="text-lg text-purple-500 dark:text-purple-400 font-semibold">
                              @ {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-2 font-medium">
                            <Calendar className="w-4 h-4 text-purple-400" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-2 font-medium">
                            <MapPin className="w-4 h-4 text-purple-400" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-4 mb-8">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3 text-gray-700 dark:text-[#C8C8D4] text-base leading-relaxed"
                        >
                          <Zap className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
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
                            className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-lg border border-purple-200/50 dark:border-purple-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
