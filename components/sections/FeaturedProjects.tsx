'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Globe, Smartphone, Code2, Server, ChevronLeft, ChevronRight, X, Info, Maximize2 } from 'lucide-react';
import Image from 'next/image';

interface ProjectLink {
  label: string;
  url: string;
  icon: 'github' | 'external' | 'globe' | 'smartphone' | 'code' | 'server';
}

type ProjectSlide =
  | { type: 'image'; src: string; alt: string }
  | { type: 'placeholder'; gradient: string; label: string };

interface Project {
  name: string;
  tagline?: string;
  description: string;
  techStack: string[];
  features: string[];
  links: ProjectLink[];
  badges?: string[];
  slides: ProjectSlide[];
}

const iconMap = {
  github: Github,
  external: ExternalLink,
  globe: Globe,
  smartphone: Smartphone,
  code: Code2,
  server: Server,
};

const CAROUSEL_INTERVAL = 4000;

const projects: Project[] = [
  {
    name: 'HungryTiger Backend',
    tagline: 'Food Delivery & Restaurant Platform',
    description: 'Scalable production backend powering customer apps, restaurant OMS, and rider apps. Deployed on Digital Ocean. Multi-gateway payments, Map API for tracking, Lark API for invoicing, and Groupon-style promotions.',
    techStack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Digital Ocean'],
    badges: ['Team Project', 'Production'],
    slides: [
      { type: 'image', src: '/projects/1.jpeg', alt: 'Customer App' },
      { type: 'image', src: '/projects/2.jpeg', alt: 'Order Management' },
      { type: 'image', src: '/projects/3.jpeg', alt: 'Payment Integration' },
      { type: 'image', src: '/projects/4.jpeg', alt: 'Lark Reports' },
      { type: 'image', src: '/projects/5.jpeg', alt: 'Lark Reports' },
      { type: 'image', src: '/projects/6.jpeg', alt: 'Lark Reports' },
    ],
    features: [
      'Deployed on Digital Ocean server for production scalability',
      'Built REST APIs for Customer App, OMS, and Rider App with real-time order tracking',
      'Integrated Map API for delivery tracking and location-based features',
      'Implemented multi-gateway payments: Cash, bKash, SSLCommerz, Stripe, Wallet',
      'Designed billing & payout logic: commissions, BOGO splits, vouchers, promotional discounts',
      'Lark API integration for automated invoice generation, reports, and notifications',
      'Automated report generation and data exports (Excel/PDF) via Lark',
      'Data synchronization across platforms via Lark webhooks',
      'Customizable workflow automation for invoicing and settlements',
      'Delivered Groupon-like features: BOGO deals, voucher stacking, contract pricing',
      'Automated invoicing and scheduled background jobs via Celery/Redis',
      'Handled delivery vs pick-up settlements, refunds, cancellations, and reconciliation',
    ],
    links: [
      { label: 'Website', url: 'https://www.hungry-tiger.com/', icon: 'globe' },
      { label: 'App', url: 'https://play.google.com/store/apps/details?id=com.chatchefs.mealmingle', icon: 'smartphone' },
    ],
  },
  {
    name: 'Electrovix',
    tagline: 'Full-Stack E-Commerce Platform',
    description: 'Production e-commerce platform with role-based access, JWT auth, and complete order flow. Deployed with Docker and CI/CD via GitHub Actions.',
    techStack: ['React', 'Tailwind CSS', 'Django REST Framework', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    badges: ['Live', 'Full-Stack'],
    slides: [
      { type: 'image', src: '/projects/e1.png', alt: 'Customer App' },
      { type: 'image', src: '/projects/e2.png', alt: 'Order Management' },
      { type: 'image', src: '/projects/e3.png', alt: 'Payment Integration' },
      { type: 'image', src: '/projects/e4.png', alt: 'Lark Reports' },
      { type: 'image', src: '/projects/e5.png', alt: 'Lark Reports' },
      { type: 'image', src: '/projects/e6.png', alt: 'Lark Reports' },
      { type: 'image', src: '/projects/e7.png', alt: 'Lark Reports' },
      { type: 'image', src: '/projects/e8.png', alt: 'Lark Reports' },
      { type: 'image', src: '/projects/e9.png', alt: 'Lark Reports' },
      { type: 'image', src: '/projects/e10.png', alt: 'Lark Reports' },
      { type: 'image', src: '/projects/e11.png', alt: 'Lark Reports' },
    ],
    features: [
      'Full-featured backend with role-based access control and JWT authentication',
      'Product, cart, and order management with filtering, search, and pagination',
      'SSLCommerz payment gateway with proper success/failure handling and webhooks',
      'Dockerized deployment with GitHub Actions CI/CD pipeline',
      'RESTful API design for scalable frontend integration',
    ],
    links: [
      { label: 'Live', url: 'https://electrovix.vercel.app/', icon: 'globe' },
      { label: 'Backend', url: 'https://github.com/MerinaMou-developer/Electrovix-backend', icon: 'server' },
      { label: 'Frontend', url: 'https://github.com/MerinaMou-developer/Electrovix-frontend', icon: 'code' },
    ],
  },
  {
    name: 'PrintPro Dubai',
    tagline: 'Premium Printing & Signage Solutions in Dubai',
    description: 'Modern Next.js website for stamps, printing, and signage services in Dubai. Fast, responsive, and SEO-optimized.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    badges: ['Live'],
    slides: [
      { type: 'image', src: '/projects/1p.png', alt: 'Customer App' },
      { type: 'image', src: '/projects/2p.png', alt: 'Order Management' },
      { type: 'image', src: '/projects/e3.png', alt: 'Payment Integration' },
      { type: 'image', src: '/projects/3p.png', alt: 'Lark Reports' },
      { type: 'image', src: '/projects/4p.png', alt: 'Lark Reports' },
     
    ],
    features: [
      'Built with Next.js and TypeScript for type-safe, performant frontend',
      'Tailwind CSS for responsive design and consistent styling',
      'Modern UI with smooth animations and professional layout',
      'SEO-optimized for better discoverability in search engines',
      'Fast page loads and excellent user experience',
    ],
    links: [
      { label: 'Live', url: 'https://www.stamps-primeprint.com/', icon: 'globe' },
      { label: 'Frontend', url: 'https://github.com/MerinaMou-developer/Printing-Site', icon: 'code' },
    ],
  },
];

function ProjectCarousel({ slides, onImageClick }: { slides: ProjectSlide[]; onImageClick?: (index: number) => void }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const id = setInterval(next, CAROUSEL_INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-900/5 dark:bg-gray-900/30">
      <AnimatePresence mode="wait">
        {slide.type === 'image' ? (
          <motion.button
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-2xl group"
            onClick={() => onImageClick?.(current)}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <span className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-black/50 text-white/90 text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <Maximize2 className="w-3.5 h-3.5" />
              Click to view full size
            </span>
          </motion.button>
        ) : (
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} flex items-center justify-center`}
          >
            <span className="text-white/90 font-semibold text-lg drop-shadow-lg">{slide.label}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center text-gray-800 dark:text-white shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center text-gray-800 dark:text-white shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ImageLightbox({
  slides,
  initialIndex,
  onClose,
}: {
  slides: ProjectSlide[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(initialIndex);
  const slide = slides[current];

  const next = () => setCurrent((i) => (i + 1) % slides.length);
  const prev = () => setCurrent((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrent((i) => (i + 1) % slides.length);
      if (e.key === 'ArrowLeft') setCurrent((i) => (i - 1 + slides.length) % slides.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, slides.length]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 pt-6"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-0 w-full h-full flex items-center justify-center min-h-0"
        >
          {slide.type === 'image' ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={slide.src}
              alt={slide.alt}
              className="max-w-full max-h-[calc(100vh-2rem)] w-auto h-auto object-contain"
            />
          ) : (
            <div className={`w-full max-w-2xl aspect-video rounded-2xl bg-gradient-to-br ${slide.gradient} flex items-center justify-center`}>
              <span className="text-white/90 font-semibold text-2xl">{slide.label}</span>
            </div>
          )}
        </motion.div>

        <button
          onClick={onClose}
          className="absolute top-4 right-6 z-[10001] w-14 h-14 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-900 transition-colors shadow-xl"
          aria-label="Close"
        >
          <X className="w-7 h-7" />
        </button>

        {slides.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-[10001] w-14 h-14 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-gray-900 transition-colors shadow-xl"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-20 top-1/2 -translate-y-1/2 z-[10001] w-14 h-14 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-gray-900 transition-colors shadow-xl"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </>
        )}

        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[10001] text-white/90 text-sm bg-black/60 px-4 py-2 rounded-lg">
          {current + 1} / {slides.length}
        </span>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectDetailsModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#1A1037] shadow-2xl border border-gray-200/60 dark:border-purple-500/20"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {project.name}
              </h3>
              {project.badges?.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-400"
                >
                  {badge}
                </span>
              ))}
            </div>
            {project.tagline && (
              <p className="text-purple-500 dark:text-purple-400 font-medium mb-4">{project.tagline}</p>
            )}

            <p className="text-gray-700 dark:text-[#C8C8D4] mb-6 leading-relaxed">{project.description}</p>

            <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Features & Highlights
            </h4>
            <ul className="space-y-3 mb-8">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-[#C8C8D4]">
                  <span className="text-purple-500 dark:text-purple-400 mt-1 flex-shrink-0 font-bold">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

type LightboxState = { slides: ProjectSlide[]; currentIndex: number } | null;

export default function FeaturedProjects() {
  const [detailsProject, setDetailsProject] = useState<Project | null>(null);
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDetailsProject(null);
        setLightbox(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <section id="projects" className="py-24 px-4 bg-white/40 backdrop-blur-sm dark:bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-[#C8C8D4] max-w-2xl mx-auto">
            Production-ready systems I&apos;ve built — from APIs to payments to deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div
                className="relative h-full backdrop-blur-xl bg-gradient-to-br from-gray-50/90 to-white/90 dark:from-[#1A1037]/80 dark:to-[#0D0B1F]/80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/60 dark:border-purple-500/20 flex flex-col"
                style={{ boxShadow: '0 8px 40px 0 rgba(168, 85, 247, 0.12)' }}
              >
                {/* Image Carousel */}
                <div className="p-4 pb-0">
                  <ProjectCarousel
                    slides={project.slides}
                    onImageClick={
                      project.slides.some((s) => s.type === 'image')
                        ? (index) => setLightbox({ slides: project.slides, currentIndex: index })
                        : undefined
                    }
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.name}
                    </h3>
                    {project.badges?.map((badge) => (
                      <span
                        key={badge}
                        className="px-2 py-0.5 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-400"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  {project.tagline && (
                    <p className="text-purple-500 dark:text-purple-400 text-sm font-medium mb-3">
                      {project.tagline}
                    </p>
                  )}
                  <p className="text-gray-600 dark:text-[#C8C8D4] text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">+{project.techStack.length - 4}</span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto pt-4">
                    <motion.button
                      onClick={() => setDetailsProject(project)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-semibold shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all"
                    >
                      <Info className="w-4 h-4" />
                      View Details
                    </motion.button>
                    {project.links.map((link) => {
                      const Icon = iconMap[link.icon];
                      return (
                        <motion.a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-200/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 text-sm font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                          {link.label}
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {detailsProject && (
        <ProjectDetailsModal project={detailsProject} onClose={() => setDetailsProject(null)} />
      )}

      {lightbox && typeof document !== 'undefined' && createPortal(
        <ImageLightbox
          slides={lightbox.slides}
          initialIndex={lightbox.currentIndex}
          onClose={() => setLightbox(null)}
        />,
        document.body
      )}
    </section>
  );
}
