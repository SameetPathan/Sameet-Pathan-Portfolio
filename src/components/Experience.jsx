import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { experiences } from '../constants';
import Footer from './Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ExperienceCard = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(index === 0);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative grid md:grid-cols-2 gap-0 md:gap-8 items-start"
    >
      {/* ── Timeline dot (desktop) ── */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 z-10 flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 300 }}
          className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/50 border-2 border-gray-950 dark:border-gray-950 border-white"
        />
      </div>

      {/* ── Card ── (alternate sides on desktop) */}
      <div className={`md:col-span-1 ${isEven ? 'md:col-start-1 md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="glass rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden gradient-border"
        >
          {/* Card Header */}
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-start gap-3">
                {/* Logo */}
                <div className="w-11 h-11 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span class="text-violet-400 font-bold text-sm">${exp.company.slice(0, 2).toUpperCase()}</span>`;
                    }}
                  />
                </div>
                <div>
                  <h3
                    className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-tight"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-sm text-violet-600 dark:text-violet-400 font-medium mt-0.5">
                    {exp.company}
                  </p>
                </div>
              </div>
              {/* Expand button */}
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex-shrink-0 w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 hover:text-violet-500 hover:border-violet-500/50 transition-all duration-200 mt-0.5"
                aria-label={expanded ? 'Collapse' : 'Expand'}
              >
                {expanded ? <FiChevronUp className="text-sm" /> : <FiChevronDown className="text-sm" />}
              </button>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-3">
              <FiCalendar className="text-violet-400 flex-shrink-0" />
              <span>{exp.duration}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Expandable Points */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-5 sm:px-6 pb-5 border-t border-gray-100 dark:border-gray-800 pt-4">
                  <ul className="space-y-2.5">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className="text-violet-400 mt-1.5 flex-shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      {isEven && <div className="hidden md:block" />}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-60" />

      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 section-padding">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Career</span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
              Experience
            </span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            A journey through full-stack development, AI integration, and financial software engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line (desktop only) */}
          <div className="hidden md:block timeline-line" />

          <div className="flex flex-col gap-8 md:gap-12">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Experience;
