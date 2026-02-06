'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, MessageCircle, Heart, Mail, FileText } from 'lucide-react';

export default function Footer() {
  const socials = [
    { icon: Github, href: 'https://github.com/MerinaMou-developer', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/merina-rahaman-mou/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/', label: 'WhatsApp' },
    { icon: Youtube, href: 'https://youtube.com/@merina', label: 'YouTube' },
  ];

  const columns = [
    {
      title: 'Explore',
      items: [
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
      ],
    },
    {
      title: 'About',
      items: [
        { label: 'About Me', href: '#about' },
        { label: 'Contact', href: '#contact' },
        { label: 'Blog', href: '#blog' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { label: 'Resume (PDF)', href: '/Resume.pdf', icon: FileText, newTab: true },
        { label: 'Email', href: 'mailto:merinamou3@gmail.com', icon: Mail },
      ],
    },
  ] as const;

  return (
    <footer className="relative overflow-hidden bg-transparent">
      {/* top divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      {/* soft radial glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] aspect-square w-[46rem] -translate-x-1/2 rounded-full
                        bg-[radial-gradient(closest-side,#7C3AED33,transparent)] blur-3xl" />
        <div className="absolute left-[8%] bottom-[-160px] aspect-square w-[32rem] rounded-full
                        bg-[radial-gradient(closest-side,#4F46E533,transparent)] blur-3xl" />
        <div className="absolute right-[6%] bottom-[-140px] aspect-square w-[28rem] rounded-full
                        bg-[radial-gradient(closest-side,#EC489933,transparent)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* mini-CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-3xl border border-purple-200/50 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 backdrop-blur"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Open to Backend Roles & Freelance</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Django • DRF • Celery • PostgreSQL • Redis • Docker</p>
            </div>
            <div className="flex gap-3">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600
                           px-5 py-2 text-sm font-semibold text-white shadow-lg transition-all
                           hover:scale-[1.03] hover:shadow-purple-500/40"
              >
                Contact Me
              </a>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-purple-300 dark:border-white/15 bg-white/80 dark:bg-white/5 px-5 py-2 text-sm font-semibold
                           text-gray-900 dark:text-white backdrop-blur transition-all hover:border-purple-400/40 dark:hover:border-purple-400/40"
              >
                View Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* main grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* brand card */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative mb-4">
              <div className="absolute inset-0 -z-10 rounded-2xl blur-2xl
                              bg-[conic-gradient(from_90deg,#7C3AED33,#4F46E533,#EC489933)]" />
              <div className="rounded-2xl border border-purple-200/50 dark:border-white/10 bg-white/60 dark:bg-white/5 px-5 py-4 backdrop-blur">
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400
                                 bg-clip-text text-4xl font-extrabold text-transparent">
                  Σ MRM
                </span>
              </div>
            </div>
            <p className="max-w-xs text-center text-sm text-gray-600 dark:text-gray-300 md:text-left">
              I build reliable backends with Django & modern tooling—clean architecture, performance, and DX.
            </p>
          </div>

          {/* link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-pink-300 bg-clip-text
                              text-sm font-bold uppercase tracking-wider text-transparent">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...('newTab' in item && item.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 transition hover:text-purple-600 dark:hover:text-white"
                    >
                      {'icon' in item && item.icon ? (
                        <item.icon className="h-4 w-4 opacity-70 transition group-hover:opacity-100" />
                      ) : null}
                      <span className="relative">
                        {item.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r
                                          from-purple-400 to-pink-400 transition-all group-hover:w-full" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* socials */}
          <div className="md:col-span-4">
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              {socials.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('#') ? undefined : '_blank'}
                  rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-full border border-purple-300/50 dark:border-white/10 bg-white/80 dark:bg-white/5 p-3 text-gray-700 dark:text-white
                             backdrop-blur transition hover:border-purple-400/40 hover:shadow-lg
                             hover:shadow-purple-500/30"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="h-5 w-5 transition group-hover:scale-110" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-purple-200/50 dark:border-white/10 pt-6 sm:flex-row">
          <p className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Merina Rahaman Mou — Crafted with
            <Heart className="h-3 w-3 text-rose-500 dark:text-rose-400" /> passion
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Built with Next.js • Tailwind • Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
