'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutPage(): React.ReactElement {
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

  const skills = [
    { name: 'Three.js', level: 90, category: '3D Graphics' },
    { name: 'React/Next.js', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Languages' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Tailwind CSS', level: 90, category: 'Styling' },
    { name: 'WebGL/Shaders', level: 75, category: '3D Graphics' },
    { name: 'Framer Motion', level: 85, category: 'Animation' },
    { name: 'Supabase', level: 70, category: 'Backend' },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '30+', label: 'Happy Clients' },
    { number: '15+', label: 'Technologies' },
  ];

  const funFacts = [
    { icon: '🚀', fact: 'Started coding at age 12' },
    { icon: '☕', fact: 'Powered by 5+ cups of coffee daily' },
    { icon: '🎮', fact: 'Gaming enthusiast & 3D artist' },
    { icon: '🌍', fact: 'Worked with clients from 10+ countries' },
    { icon: '📚', fact: 'Always learning new technologies' },
    { icon: '🎨', fact: 'UI/UX design hobbyist' },
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Hero Section */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.45)] mb-8"
      >
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
        </div>

        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500">
              About Me
            </span>
          </h1>
          
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Passionate full-stack developer crafting immersive digital experiences 
            with cutting-edge web technologies and creative design.
          </p>
        </motion.div>
      </motion.section>

      {/* Bio Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="grid gap-8 md:grid-cols-2 mb-8"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
          <h2 className="text-2xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              My Story
            </span>
          </h2>
          <div className="space-y-4 text-white/80 leading-relaxed">
            <p>
              I'm Takshiv Kashyap, a passionate full-stack developer with over 5 years of experience 
              in creating stunning web applications and immersive 3D experiences. My journey began 
              with a curiosity for how things work on the web, and has evolved into a career focused 
              on pushing the boundaries of what's possible in modern web development.
            </p>
            <p>
              I specialize in building performant, scalable applications using React, Next.js, and 
              cutting-edge 3D technologies like Three.js and WebGL. My approach combines technical 
              excellence with creative design thinking, resulting in digital experiences that not 
              only work flawlessly but also delight users.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open 
              source projects, or creating 3D art. I believe in continuous learning and staying at 
              the forefront of web innovation.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
          <h2 className="text-2xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              What I Do
            </span>
          </h2>
          <div className="space-y-4">
            {[
              { title: 'Full Stack Development', desc: 'End-to-end web applications with modern architectures' },
              { title: '3D Web Experiences', desc: 'Interactive 3D visualizations and WebGL applications' },
              { title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces with attention to detail' },
              { title: 'Performance Optimization', desc: 'Lightning-fast applications optimized for scale' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md hover:border-cyan-500/30 transition-all"
              >
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-[0_8px_30px_rgba(0,0,0,0.45)] mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            Technical Skills
          </span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.05 }}
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-xs text-white/50 ml-2">({skill.category})</span>
                </div>
                <span className="text-cyan-400 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 + index * 0.05 }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
          >
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-white/70">{stat.label}</div>
          </motion.div>
        ))}
      </motion.section>

      {/* Fun Facts Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            Fun Facts
          </span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {funFacts.map((fact, index) => (
            <motion.div
              key={fact.fact}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 + index * 0.05 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-2xl"
                >
                  {fact.icon}
                </motion.span>
                <span className="text-white/80">{fact.fact}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
