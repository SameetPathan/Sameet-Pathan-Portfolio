import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiSend, FiMail, FiMapPin, FiLinkedin, FiGithub, FiUser, FiMessageSquare } from 'react-icons/fi';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from '../constants';
import Footer from './Footer';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'sameetpathanrs@gmail.com',
    href: 'mailto:sameetpathanrs@gmail.com',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Pune, India',
    href: null,
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sameetpathan',
    href: 'https://www.linkedin.com/in/sameetpathan',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/sameetpathan',
    href: 'https://github.com/sameetpathan',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setLoading(false);
      toast.error('Please fill in all fields.', { position: 'bottom-right' });
      return;
    }

    try {
      // Submit to Netlify Forms
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }).toString(),
      });

      // Also send via EmailJS for instant email notification
      await emailjs.send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        {
          from_name: name.trim(),
          to_name: 'Sameet Pathan',
          reply_to: email.trim(),
          to_email: 'sameetpathanrs@gmail.com',
          message: message.trim(),
        },
        EMAIL_JS_PUBLIC_KEY
      );

      setLoading(false);
      toast.success("Message sent successfully! I'll get back to you soon.", {
        position: 'bottom-right',
      });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setLoading(false);
      toast.error('Something went wrong. Please try again or email me directly.', {
        position: 'bottom-right',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-60" />

      {/* Background orb */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb w-96 h-96 bottom-0 left-1/4 bg-violet-600/15 dark:bg-violet-600/10" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 section-padding">
        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
              Connect
            </span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* ── Left: Contact Info ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                className="glass rounded-2xl border border-gray-100 dark:border-gray-800 p-4 flex items-center gap-4 gradient-border"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-violet-500 dark:text-violet-400 text-sm" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={label !== 'Email' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Right: Form ── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div className="glass rounded-2xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8">
              <form
                ref={formRef}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* Netlify hidden fields */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Sameet Pathan"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                    Message
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Hi Sameet, I'd love to discuss..."
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <ToastContainer
        theme="dark"
        toastClassName="!bg-gray-900 !border !border-gray-700 !text-white"
      />
      <Footer />
    </div>
  );
};

export default Contact;
