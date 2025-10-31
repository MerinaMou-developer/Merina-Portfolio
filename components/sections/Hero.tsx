'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Hero() {
  const [nameDisplay, setNameDisplay] = useState('');
  const [roleDisplay, setRoleDisplay] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullName = 'Merina Rahaman Mou';
  const fullRole = "I'm a Software Engineer.";

  useEffect(() => {
    // Type name
    let nameIndex = 0;
    const nameInterval = setInterval(() => {
      if (nameIndex < fullName.length) {
        setNameDisplay(fullName.substring(0, nameIndex + 1));
        nameIndex++;
      } else {
        clearInterval(nameInterval);
        // Start typing role after name is complete
        setTimeout(() => {
          let roleIndex = 0;
          const roleInterval = setInterval(() => {
            if (roleIndex < fullRole.length) {
              setRoleDisplay(fullRole.substring(0, roleIndex + 1));
              roleIndex++;
            } else {
              clearInterval(roleInterval);
              // Hide cursor after both are done
              setTimeout(() => setShowCursor(false), 1000);
            }
          }, 100); // Typing speed
        }, 300);
      }
    }, 150); // Typing speed

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(nameInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/MerinaMou-developer', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/merina-rahaman-mou/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:merinamou3@gmail.com', label: 'Email' },
    { icon: FileText, href: '/resume.pdf', label: 'Resume' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-pink-500/10 dark:from-purple-500/20 dark:via-indigo-500/20 dark:to-pink-500/20 animate-pulse" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-8 relative inline-block"
        >
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-indigo-500 to-pink-500 rounded-3xl blur-2xl opacity-50 dark:opacity-75 animate-pulse" />
            <div className="relative w-48 h-48 bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-600 rounded-3xl p-2 flex items-center justify-center">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl flex flex-col items-center justify-center p-4">
                <div className="text-6xl mb-2">👨‍💻</div>
                <div className="text-xs font-mono text-purple-600 dark:text-purple-400 flex gap-1 flex-wrap justify-center max-w-full">
                  <span>1001</span><span>0110</span><span>0101</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-4"
        >
          <span className="text-lg md:text-xl text-gray-600 dark:text-white">
            Hello! I Am
          </span>
        </motion.div>

        {/* Name with typing effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-gray-900 dark:text-[#B066FF]">
            {nameDisplay}
            {roleDisplay === '' && showCursor && (
              <span className="ml-1 inline-block w-1 h-16 md:h-20 bg-gray-900 dark:bg-[#B066FF] animate-pulse">|</span>
            )}
          </span>
        </motion.h1>

        {/* Role with typing effect */}
        {nameDisplay === fullName && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl mb-6"
          >
            <span className="text-gray-900 dark:text-white font-semibold">
              {roleDisplay}
              {showCursor && roleDisplay !== '' && (
                <span className="ml-1 inline-block w-1 h-8 md:h-10 bg-gray-900 dark:bg-white animate-pulse">|</span>
              )}
            </span>
          </motion.div>
        )}

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto italic"
        >
          A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.icon === Mail ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold">{link.label}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-8 h-12 border-2 border-purple-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
