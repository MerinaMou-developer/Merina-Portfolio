'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Youtube, MessageCircle, Star, Mail } from 'lucide-react';
import { useState } from 'react';

export default function FloatingSocial() {
  const socialLinks = [
    { icon: Github,   href: 'https://github.com/MerinaMou-developer',      label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/merina-rahaman-mou/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:merinamou3@gmail.com',            label: 'Email' },
    { icon: MessageCircle, href: 'https://wa.me/',            label: 'WhatsApp' },
    { icon: Star,     href: '#projects',                      label: 'Portfolio' },
   
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    // ✅ Removed `hidden xs:block` — now always visible
    <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40">
      {/* vertical guide glow */}
      <div className="pointer-events-none absolute -left-2 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent blur-[1px]" />

      <ul className="flex flex-col items-center gap-3">
        {socialLinks.map(({ icon: Icon, href, label }, i) => (
          <li key={label} className="relative">
            <motion.a
              href={href}
              aria-label={label}
              target={href.startsWith('#') ? undefined : '_blank'}
              rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05, type: 'spring', stiffness: 120, damping: 14 }}
              whileHover={{ scale: 1.08, x: -4 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              className="
                group relative flex h-12 w-12 items-center justify-center rounded-full
                border backdrop-blur-md transition-all duration-300
                shadow-md hover:shadow-purple-500/30
                focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70

                bg-white/80 border-black/10 text-gray-800
                dark:bg-gradient-to-br dark:from-[#1A1037]/70 dark:to-[#0D0B1F]/70
                dark:border-white/10 dark:text-white
              "
            >
              {/* glow ring — pointer-events disabled so it won't block clicks */}
              <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100
                               bg-[conic-gradient(from_0deg,rgba(168,85,247,.35),rgba(99,102,241,.35),rgba(236,72,153,.35),rgba(168,85,247,.35))] blur-[6px]" />
              <span className="relative">
                <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </span>
            </motion.a>

            {/* Tooltip */}
            <AnimatePresence>
              {hovered === i && (
                <motion.div
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  className="absolute right-[110%] top-1/2 -translate-y-1/2"
                >
                  <div
                    className="
                      relative rounded-lg px-3 py-1.5 text-xs font-semibold
                      shadow-xl border backdrop-blur-md
                      bg-white/90 text-gray-900 border-black/10
                      dark:bg-[#141027]/90 dark:text-white dark:border-white/10
                    "
                  >
                    {label}
                    <span
                      className="
                        absolute left-full top-1/2 -translate-y-1/2
                        border-y-8 border-y-transparent border-l-8
                        border-l-white
                        dark:border-l-[#141027]
                      "
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
}
