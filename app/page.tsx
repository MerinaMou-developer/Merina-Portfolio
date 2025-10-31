'use client';

import { motion } from 'framer-motion';
import CodeBackground from '@/components/CodeBackground';
import Hero from '@/components/sections/Hero';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-indigo-50 dark:bg-none dark:bg-[#0D0B1F] transition-colors duration-300 relative">
      <CodeBackground />
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
