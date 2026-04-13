import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiLayers, FiGlobe } from 'react-icons/fi';
import { projects } from '../constants';
import Footer from './Footer';

const tagColors = [
  'bg-violet-500/10 text-violet-500 border-violet-500/20',
  'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
  'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  'bg-orange-500/10 text-orange-500 border-orange-500/20',
  'bg-pink-500/10 text-pink-500 border-pink-500/20',
  'bg-blue-500/10 text-blue-500 border-blue-500/20',
];

const typeColor = {
  'Web Application': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Integration': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Desktop Application': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
};

const filters = ['All', 'Web Application', 'Integration'];

const ProjectCard = ({ title, description, tags, type, company, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ delay: (index % 3) * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -5 }}
    className="glass rounded-2xl border border-gray-100 dark:border-gray-800 gradient-border p-6 flex flex-col gap-4 group"
  >
    {/* Header */}
    <div className="flex items-start justify-between gap-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
        <FiLayers className="text-violet-400 text-sm" />
      </div>
      <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${typeColor[type] || typeColor['Web Application']}`}>
        {type}
      </span>
    </div>

    {/* Content */}
    <div className="flex-1">
      <h3
        className="text-base font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {title}
      </h3>
      <p className="text-xs text-violet-500 dark:text-violet-400 font-medium mb-2.5 flex items-center gap-1">
        <FiGlobe className="text-xs" /> {company}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
        {description}
      </p>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-1.5 mt-auto">
      {tags.map((tag, i) => (
        <span
          key={tag}
          className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${tagColors[i % tagColors.length]}`}
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.type === activeFilter);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-60" />

      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 section-padding">
        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Portfolio</span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Enterprise{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
              Projects
            </span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            A selection of enterprise platforms and products delivered across 18+ years of software architecture.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setActiveFilter(f)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-violet-600 border-violet-600 text-white shadow-md shadow-violet-500/30'
                    : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-violet-500/40 hover:text-violet-500'
                }`}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
