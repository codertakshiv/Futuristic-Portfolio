'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/takshiv', color: 'from-gray-600 to-gray-800' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/takshiv', color: 'from-blue-600 to-blue-800' },
    { name: 'Twitter/X', icon: '🐦', url: 'https://twitter.com/takshiv', color: 'from-cyan-500 to-blue-600' },
    { name: 'CodePen', icon: '🎨', url: 'https://codepen.io/takshiv', color: 'from-purple-600 to-pink-600' },
    { name: 'Dribbble', icon: '🏀', url: 'https://dribbble.com/takshiv', color: 'from-pink-500 to-rose-600' },
    { name: 'Email', icon: '✉️', url: 'mailto:hello@takshiv.dev', color: 'from-fuchsia-500 to-purple-600' },
  ];

  const contactMethods = [
    { 
      title: 'Email', 
      value: 'hello@takshiv.dev', 
      icon: '📧', 
      description: 'For project inquiries and collaborations',
      action: 'mailto:hello@takshiv.dev'
    },
    { 
      title: 'Phone', 
      value: '+1 (555) 123-4567', 
      icon: '📱', 
      description: 'Available for urgent matters',
      action: 'tel:+15551234567'
    },
    { 
      title: 'Location', 
      value: 'San Francisco, CA', 
      icon: '📍', 
      description: 'Open to remote and local projects',
      action: '#'
    },
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Enhanced Hero Section */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.45)] mb-8"
      >
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{ 
              translateY: scrollY * 0.1,
              rotate: scrollY * 0.02
            }}
            className="absolute -top-20 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/25 to-fuchsia-500/25 blur-3xl"
          />
          <motion.div
            animate={{ 
              translateY: -scrollY * 0.15,
              rotate: -scrollY * 0.03
            }}
            className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-tr from-violet-600/20 to-emerald-500/20 blur-2xl"
          />
          <motion.div
            animate={{ 
              scale: 1 + scrollY * 0.0005
            }}
            className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-fuchsia-500/15 to-cyan-500/15 blur-2xl"
          />
        </div>

        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500">
              Get In Touch
            </span>
          </h1>
          
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's collaborate on your next project. 
            Whether you need a stunning web application, immersive 3D experience, or 
            cutting-edge digital solution, I'm here to help.
          </p>

          <motion.div 
            className="flex flex-wrap justify-center gap-3 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { text: '🚀 Fast Response', color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' },
              { text: '💼 Open to Projects', color: 'border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400' },
              { text: '🌍 Remote Friendly', color: 'border-violet-500/30 bg-violet-500/10 text-violet-400' }
            ].map((badge, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`rounded-full border ${badge.color} px-4 py-2 text-sm`}
              >
                {badge.text}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Enhanced Contact Form and Info Grid */}
      <section className="grid gap-8 lg:grid-cols-3">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Enhanced Contact Info Sidebar */}
        <div className="space-y-6">
          {/* Quick Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
          >
            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group block rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="text-2xl"
                    >
                      {method.icon}
                    </motion.span>
                    <div className="flex-1">
                      <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                        {method.title}
                      </div>
                      <div className="text-sm text-white/70 mt-1">{method.value}</div>
                      <div className="text-xs text-white/50 mt-1">{method.description}</div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
          >
            <h3 className="text-xl font-bold mb-4 text-white">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur-md hover:border-white/20 transition-all duration-300`}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <div className="relative flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                      className="text-lg"
                    >
                      {social.icon}
                    </motion.span>
                    <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Availability Status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-md p-6 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="relative">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 animate-ping"
                />
              </div>
              <span className="text-green-400 font-medium">Available for Projects</span>
            </motion.div>
            <p className="text-sm text-white/70">
              Currently accepting new projects for Q2 2024. Let's discuss your ideas!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur p-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold text-white mb-1">Ready to Start Your Project?</h4>
            <p className="text-sm text-white/70">Let's create something amazing together</p>
          </div>
          <div className="flex gap-3">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-white hover:bg-white/10 transition-all duration-300"
            >
              View My Work
            </motion.a>
            <motion.a
              href="mailto:hello@takshiv.dev"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-2.5 text-white shadow-md hover:brightness-110 transition-all duration-300"
            >
              Email Me Directly
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
