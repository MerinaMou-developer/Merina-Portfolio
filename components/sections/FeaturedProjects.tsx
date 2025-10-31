'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    name: 'E-Commerce Backend API',
    description: 'A robust and scalable e-commerce backend API built with Django REST Framework, featuring user authentication, product management, order processing, and payment integration.',
    techStack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Docker', 'AWS'],
    features: [
      'RESTful API endpoints for product & order management',
      'Secure user authentication & authorization',
      'Asynchronous task processing with Celery',
      'Scalable architecture with Docker & AWS',
    ],
    githubUrl: 'https://github.com/merina',
  },
  {
    name: 'Social Media Analytics Platform',
    description: 'A comprehensive analytics platform for social media data processing, real-time insights, and automated reporting capabilities.',
    techStack: ['Python', 'Flask', 'MongoDB', 'Celery', 'Redis', 'Kafka'],
    features: [
      'Real-time data ingestion & processing',
      'Customizable dashboards & reports',
      'Sentiment analysis & trend detection',
      'Scalable microservices architecture',
    ],
    githubUrl: 'https://github.com/merina',
  },
  {
    name: 'Task Management System',
    description: 'A collaborative task management system with real-time updates, user roles, notifications, and workspaces.',
    techStack: ['Python', 'Django', 'Django Channels', 'PostgreSQL', 'Celery', 'Redis'],
    features: [
      'Real-time collaboration with WebSockets',
      'Task prioritization & categorization',
      'User roles & permissions management',
      'Email notifications & reminders',
    ],
    githubUrl: 'https://github.com/merina',
  },
  {
    name: 'Lark API Automation Tool',
    description: 'An enterprise-level tool for integrating with Lark API to automate various workflows and data synchronization.',
    techStack: ['Python', 'Django', 'Lark API', 'PostgreSQL', 'Celery', 'Redis'],
    features: [
      'Lark API integration for various modules',
      'Automated report generation',
      'Data synchronization across platforms',
      'Customizable workflow automation',
    ],
    githubUrl: 'https://github.com/merina',
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white/40 backdrop-blur-sm dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-[#C8C8D4]">
            Showcasing my best work and technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative backdrop-blur-xl bg-gradient-to-br from-gray-50/80 to-white/80 dark:bg-gradient-to-br dark:from-[#1A1037]/70 dark:to-[#1A1037]/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-purple-500/30"
              style={{
                boxShadow: '0 8px 32px 0 rgba(168, 85, 247, 0.15)',
              }}
            >
              {/* Glassmorphic Border Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300 -z-10" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-[#C8C8D4] mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-[#C8C8D4]">
                      <span className="text-purple-400 dark:text-purple-400 mt-1">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-semibold">View Code</span>
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 text-white rounded-lg hover:from-purple-500 hover:via-indigo-600 hover:to-pink-600 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-semibold">Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

