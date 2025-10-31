'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
<section
  id="education"
  className="
    py-20 px-4
    bg-gradient-to-br from-purple-100/50 via-blue-100/50 to-pink-100/50
    dark:bg-none dark:bg-[#0D0B1F]
  "
>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-[#C8C8D4]">
            Academic background and professional certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl rounded-3xl transition-opacity duration-300" />
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:bg-gradient-to-br dark:from-[#1A1037]/70 dark:to-[#1A1037]/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-purple-500/30"
              style={{
                boxShadow: '0 8px 32px 0 rgba(168, 85, 247, 0.15)',
              }}>
              <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        B.Sc. in Computer Science
                      </h4>
                      <p className="text-purple-400 dark:text-purple-400 font-medium">
                        University of Dhaka
                      </p>
                  <p className="text-gray-600 dark:text-gray-400">2016 - 2020</p>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-indigo-900/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Dean's List
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Outstanding academic performance
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 opacity-0 group-hover:opacity-100 blur-xl rounded-3xl transition-opacity duration-300" />
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:bg-gradient-to-br dark:from-[#1A1037]/70 dark:to-[#1A1037]/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-purple-500/30"
              style={{
                boxShadow: '0 8px 32px 0 rgba(168, 85, 247, 0.15)',
              }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Python for Everybody
                  </h4>
                  <p className="text-pink-400 dark:text-pink-400 font-medium">
                    Coursera
                  </p>
                </div>
                <div className="pt-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    AWS Fundamentals
                  </h4>
                  <p className="text-pink-400 dark:text-pink-400 font-medium">
                    AWS
                  </p>
                </div>
                <div className="pt-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Django for Backend Development
                  </h4>
                  <p className="text-pink-400 dark:text-pink-400 font-medium">
                    Udemy
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

