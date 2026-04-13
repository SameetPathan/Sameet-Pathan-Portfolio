import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const socials = [
  { icon: FiMail, href: 'mailto:amin.mutawlli@hotmail.com', label: 'Email' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/amin-mutawlli', label: 'LinkedIn' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-800 dark:border-gray-800 border-gray-200 bg-white dark:bg-gray-950">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>AM</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {year} Amin Mutawlli. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl border border-gray-700 dark:border-gray-700 border-gray-200 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/8 dark:hover:bg-violet-500/10 transition-all duration-200"
            >
              <Icon className="text-sm" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
