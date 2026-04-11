import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { roles } from '../constants';
import Footer from './Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const techStack = ['C#', 'ASP.NET', 'React.js', 'Python', 'AWS', 'Anthropic Claude'];

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const tick = () => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
          timeoutRef.current = setTimeout(tick, 75);
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
          timeoutRef.current = setTimeout(tick, 35);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };
    timeoutRef.current = setTimeout(tick, 80);
    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950 overflow-hidden flex flex-col">
      {/* ── Background Orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb w-[500px] h-[500px] top-[-100px] left-[-100px] bg-violet-600/25 dark:bg-violet-600/20"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="orb w-[400px] h-[400px] bottom-[10%] right-[-80px] bg-cyan-500/20 dark:bg-cyan-500/15"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="orb w-[300px] h-[300px] top-[40%] right-[30%] bg-pink-500/10 dark:bg-pink-500/8"
          style={{ animationDelay: '5s' }}
        />
      </div>

      {/* ── Dot Grid ── */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 pt-20 pb-8">
        <motion.div
          className="max-w-4xl w-full mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to new opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-5 text-gray-900 dark:text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500">
              Sameet Pathan
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={itemVariants}
            className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-5 min-h-[2rem] flex items-center justify-center gap-1"
          >
            <span className="text-cyan-500 dark:text-cyan-400">{displayText}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-violet-500"
            >
              |
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            3+ years building scalable full-stack applications and AI-powered financial audit systems
            for 401(k), 403(b), and ESOP platforms. Passionate about turning complex problems
            into elegant, high-performance solutions.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 justify-center mb-10"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold text-sm shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-shadow duration-300"
              >
                View My Work <FiArrowRight />
              </motion.button>
            </Link>

            <motion.a
              href="https://drive.google.com/file/d/1DximknHDszoxlNlK9I_ctB0a8wvBIIk-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-500/5 transition-all duration-200"
            >
              <FiDownload /> Download CV
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-3 justify-center">
            {[
              { icon: FiGithub, href: 'https://github.com/sameetpathan', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sameetpathan', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:sameetpathanrs@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.93 }}
                className="w-11 h-11 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/8 dark:hover:bg-violet-500/10 transition-all duration-200"
              >
                <Icon className="text-base" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="flex justify-center pb-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-gray-400 dark:bg-gray-500" />
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;
