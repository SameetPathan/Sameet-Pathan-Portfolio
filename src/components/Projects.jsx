import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from 'react-icons/fi';
import Footer from './Footer';

const GITHUB_USER = 'sameetpathan';

const tagColors = [
  'bg-violet-500/10 text-violet-500 border-violet-500/20',
  'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
  'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  'bg-orange-500/10 text-orange-500 border-orange-500/20',
  'bg-pink-500/10 text-pink-500 border-pink-500/20',
  'bg-blue-500/10 text-blue-500 border-blue-500/20',
];

const SkeletonCard = () => (
  <div className="glass rounded-2xl border border-gray-100 dark:border-gray-800 p-6 animate-pulse">
    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4 mb-3" />
    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2" />
    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-6" />
    <div className="flex gap-2">
      <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded-full" />
      <div className="h-5 w-12 bg-gray-200 dark:bg-gray-700 rounded-full" />
    </div>
  </div>
);

const ProjectCard = ({ title, description, languages, repoUrl, stars, forks, index }) => (
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
        <FiGitBranch className="text-violet-400 text-sm" />
      </div>
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 hover:text-violet-500 hover:border-violet-500/50 hover:bg-violet-500/8 transition-all duration-200 flex-shrink-0"
        aria-label={`Open ${title} on GitHub`}
      >
        <FiExternalLink className="text-sm" />
      </a>
    </div>

    {/* Title */}
    <div>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="group/link">
        <h3
          className="text-base font-bold text-gray-900 dark:text-white group-hover/link:text-violet-500 dark:group-hover/link:text-violet-400 transition-colors duration-200 mb-1.5"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {title}
        </h3>
      </a>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
        {description || 'No description available.'}
      </p>
    </div>

    {/* Footer */}
    <div className="mt-auto flex flex-col gap-3">
      {/* Languages */}
      {languages.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {languages.slice(0, 4).map((lang, i) => (
            <span
              key={lang}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${tagColors[i % tagColors.length]}`}
            >
              {lang}
            </span>
          ))}
          {languages.length > 4 && (
            <span className="px-2 py-0.5 rounded-full text-xs text-gray-400 dark:text-gray-500">
              +{languages.length - 4}
            </span>
          )}
        </div>
      )}

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
        {stars > 0 && (
          <span className="flex items-center gap-1">
            <FiStar className="text-yellow-400" /> {stars}
          </span>
        )}
        {forks > 0 && (
          <span className="flex items-center gap-1">
            <FiGitBranch className="text-cyan-400" /> {forks}
          </span>
        )}
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto flex items-center gap-1 text-gray-400 hover:text-violet-500 transition-colors font-medium"
        >
          <FiGithub /> View Repo
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const token = process.env.REACT_APP_GITHUB_TOKEN;
        const headers = token ? { Authorization: `token ${token}` } : {};

        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=30`,
          { headers }
        );

        if (!reposRes.ok) throw new Error('Failed to fetch repos');
        const reposData = await reposRes.json();

        const projectData = await Promise.all(
          reposData.map(async (repo) => {
            let languages = [];
            try {
              const langRes = await fetch(repo.languages_url, { headers });
              const langData = await langRes.json();
              languages = Object.keys(langData);
            } catch {}

            let description = repo.description || '';
            if (!description) {
              try {
                const readmeRes = await fetch(
                  `https://api.github.com/repos/${GITHUB_USER}/${repo.name}/readme`,
                  { headers }
                );
                if (readmeRes.ok) {
                  const readmeData = await readmeRes.json();
                  const content = atob(readmeData.content);
                  description = content.split('\n').find((l) => l.trim() && !l.startsWith('#')) || '';
                  description = description.slice(0, 150);
                }
              } catch {}
            }

            return {
              title: repo.name,
              description,
              languages,
              repoUrl: repo.html_url,
              stars: repo.stargazers_count || 0,
              forks: repo.forks_count || 0,
            };
          })
        );

        setProjects(projectData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-60" />

      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 section-padding">
        {/* Section Header */}
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
            GitHub{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
              Projects
            </span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Open-source projects and personal experiments — sourced live from GitHub.
          </p>

          <motion.a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-violet-500 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all"
          >
            <FiGithub /> View All on GitHub
          </motion.a>
        </motion.div>

        {/* Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : error ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Unable to load projects. Visit{' '}
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-500 hover:underline"
              >
                github.com/{GITHUB_USER}
              </a>{' '}
              directly.
            </p>
          </motion.div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} index={i} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
