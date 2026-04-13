import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiCode } from 'react-icons/fi';
import { services, skills } from '../constants';
import Footer from './Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { icon: FiBriefcase, value: '18+', label: 'Years Experience' },
  { icon: FiCode, value: '10+', label: 'Enterprise Projects' },
  { icon: FiAward, value: '15+', label: 'Industry Awards' },
];

const serviceIcons = ['🏗️', '☁️', '👥'];

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-60" />

      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 section-padding">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <span className="section-tag">About Me</span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Who I{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
              Am
            </span>
          </h2>
        </motion.div>

        {/* Two Columns: Bio + Skills */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-5">
              Hi! I'm{' '}
              <span className="text-violet-600 dark:text-violet-400 font-semibold">Amin M. Mutawlli</span>
              , a Senior Architect with{' '}
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">18+ years</span> of experience
              delivering enterprise-grade software across contract intelligence, ESOP management, and
              portfolio project management domains.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-5">
              Currently at{' '}
              <span className="text-violet-600 dark:text-violet-400 font-semibold">Icertis Solutions</span>,
              I architect scalable systems using{' '}
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">.NET Core, Azure, Microservices,
              Blockchain,</span> and <span className="text-cyan-600 dark:text-cyan-400 font-medium">Elastic Search</span>.
              I have hands-on experience with SaaS, PaaS, and IaaS on Azure, and deep expertise in
              SSO with SAML, Redis Cache, and CI/CD pipelines.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              Over my career I've led teams of{' '}
              <span className="text-violet-600 dark:text-violet-400 font-medium">19+ engineers</span>, designed
              layered MVC architectures for 4+ enterprise platforms, and received{' '}
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">15+ industry awards</span> for
              customer centricity, technical excellence, and commitment to delivery.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-4 text-center border border-gray-100 dark:border-gray-800 hover-lift"
                >
                  <Icon className="text-violet-500 text-lg mx-auto mb-1" />
                  <p className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">{label}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="mailto:amin.mutawlli@hotmail.com"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill.label}
                  custom={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: (i) => ({
                      opacity: 1,
                      scale: 1,
                      transition: { delay: i * 0.03, duration: 0.35 },
                    }),
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className={`skill-tag border ${skill.color}`}
                >
                  {skill.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Service Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 border border-gray-100 dark:border-gray-800 gradient-border group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/20 flex items-center justify-center text-2xl mb-4 group-hover:from-violet-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                {serviceIcons[i]}
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
