'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { useState } from 'react';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function FloatingSocial() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/MerinaMou-developer', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/merina-rahaman-mou/', label: 'LinkedIn' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=merinamou3@gmail.com', label: 'Email' },
    { icon: WhatsAppIcon, href: 'https://wa.me/8801721459929', label: 'WhatsApp' },
    { icon: FileText, href: '/Resume.pdf', label: 'Resume' },
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
              <span className="relative flex items-center justify-center">
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
