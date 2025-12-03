'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactForm from './components/ContactForm';
import ProjectCard from './components/ProjectCard';

type BadgeProps = {
  label: string;
};

const Badge: React.FC<BadgeProps> = ({ label }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white/90 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">
    <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
    {label}
  </span>
);

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-6">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2 text-sm md:text-base text-white/60 max-w-2xl">
        {subtitle}
      </p>
    )}
  </div>
);

// Enhanced About Me Section
const AboutMe: React.FC = () => {
  const strengths: string[] = [
    'TypeScript',
    'React / Next.js 14',
    'Node.js',
    'System Design',
    'API Design',
    'Edge & Serverless',
    'Postgres / Supabase',
    'CI/CD',
    'Testing & Quality',
    'Performance Engineering',
    'UX Engineering',
    'Cloud Infra'
  ];

  const values: string[] = [
    'Craft over speed',
    'Clarity > complexity',
    'Reliability first',
    'Transparent collaboration',
    'Performance with purpose',
    'Security by default'
  ];

  return (
    <section
      aria-label="About Takshiv Kashyap"
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.02] p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.35)]"
    >
      {/* Subtle gradient stream background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
      >
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/10 to-transparent blur-3xl animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-tl from-indigo-500/20 via-cyan-500/10 to-transparent blur-2xl animate-[float_14s_ease-in-out_infinite]" />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-10 items-start">
        {/* Avatar with glow */}
        <div className="flex md:block justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-500/20 blur-xl animate-[pulseGlow_5s_ease-in-out_infinite]" />
            <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(34,211,238,0.15)] overflow-hidden transform transition-transform duration-500 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]">
              {/* Replace src with actual avatar path if available */}
              <div className="h-full w-full flex items-center justify-center text-white/70 text-lg">
                TK
              </div>
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div>
          <SectionHeader
            title="Takshiv Kashyap — Developer, Programmer, Engineer"
            subtitle="I design and build resilient software systems with a focus on clarity, performance, and developer experience."
          />

          <div className="space-y-4 text-white/80 leading-relaxed">
            <p className="text-sm md:text-base transition-opacity duration-700">
              I'm driven by a simple idea: thoughtful engineering unlocks real impact. I combine strong fundamentals with pragmatic execution to ship reliable products that feel fast, purposeful, and a pleasure to use.
            </p>
            <p className="text-sm md:text-base transition-opacity duration-700 delay-100">
              From frontend experiences crafted with accessibility and micro-interactions to robust backend services with clean APIs, I approach problems systematically—observing, modeling, and iterating until the solution is elegant and maintainable.
            </p>
            <p className="text-sm md:text-base transition-opacity duration-700 delay-200">
              My mission is to turn complexity into clarity—building modern web software that stands the test of time, scales smoothly, and stays friendly to the humans who use and maintain it.
            </p>
          </div>

          {/* Strengths */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold tracking-wide text-white/70 mb-3">
              Technical strengths
            </h3>
            <div className="flex flex-wrap gap-2">
              {strengths.map((s) => (
                <Badge key={s} label={s} />
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold tracking-wide text-white/70 mb-3">
              Core values
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {values.map((v) => (
                <li
                  key={v}
                  className="group flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white/90"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/40 group-hover:bg-cyan-400 transition-colors" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Keyframe utilities (scoped) */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(8px, -6px, 0); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Add demo data for Experience and Projects
  const experience: Array<{
    role: string;
    company: string;
    duration: string;
    description: string;
  }> = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Neon Labs',
      duration: '2023 — Present',
      description:
        'Leading development of immersive 3D web experiences and performant React/Next.js apps.',
    },
    {
      role: 'Frontend Engineer',
      company: 'Glasswave Studio',
      duration: '2021 — 2023',
      description:
        'Built interactive UI systems, optimized rendering pipelines, and delivered pixel-perfect designs.',
    },
    {
      role: 'Junior Developer',
      company: 'Quantum Web',
      duration: '2019 — 2021',
      description:
        'Contributed to modern web apps, enhanced UX with animations, and improved performance.',
    },
  ];

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'Tailwind CSS',
    'Three.js',
    'WebGL',
    'Shaders',
    'Framer Motion',
    'Supabase',
  ];

  const topProjects: Array<{
    title: string;
    description: string;
    tech: string[];
    image: string;
    href: string;
    demoLabel: string;
    featured: boolean;
  }> = [
    {
      title: 'Neon Grid Visualizer',
      description: 'A reactive 3D visualizer with neon particle systems and audio sync.',
      tech: ['Three.js', 'React', 'WebGL'],
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop',
      href: '/projects',
      demoLabel: 'View Details',
      featured: true,
    },
    {
      title: 'Glassmorphism Dashboard',
      description: 'Elegant analytics dashboard with smooth interactions and charts.',
      tech: ['Next.js', 'Tailwind', 'Framer Motion'],
      image:
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
      href: '/projects',
      demoLabel: 'View Details',
      featured: false,
    },
    {
      title: 'XR Portfolio Showcase',
      description: 'Immersive portfolio with interactive scenes and dynamic routing.',
      tech: ['React', 'Three.js', 'SSG'],
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
      href: '/projects',
      demoLabel: 'View Details',
      featured: false,
    },
    {
      title: 'Realtime Chat Arena',
      description: 'Realtime web chat with presence, reactions, and neon UI.',
      tech: ['Supabase', 'Next.js', 'Tailwind'],
      image:
        'https://images.unsplash.com/photo-1511452885600-a2a2d491b3f8?q=80&w=1600&auto=format&fit=crop',
      href: '/projects',
      demoLabel: 'View Details',
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Takshiv Kashyap</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Full Stack Developer & Creative Technologist
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-3 font-medium text-white transition-all hover:from-cyan-600 hover:to-fuchsia-600"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="rounded-xl border border-white/20 bg-white/5 px-8 py-3 font-medium text-white transition-all hover:bg-white/10"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <AboutMe />
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500">
              Experience
            </span>
          </h2>

          <div className="relative">
            {/* vertical glow line */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/30 via-white/10 to-fuchsia-500/30" />
            <div className="grid md:grid-cols-2 gap-8">
              {experience.map((item, idx) => (
                <motion.div
                  key={`${item.company}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {item.role}
                        </h3>
                        <p className="text-white/70">{item.company}</p>
                      </div>
                      <span className="text-xs rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-cyan-300">
                        {item.duration}
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-white/70 leading-relaxed">{item.description}</p>
                  </motion.div>

                  {/* node dot */}
                  <div
                    className="md:block hidden absolute top-6 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 shadow-lg"
                    aria-hidden
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Languages & Skills Section */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              Languages & Skills
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((s, idx) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                whileHover={{
                  scale: 1.06,
                  backgroundColor: 'rgba(0,255,255,0.08)',
                  borderColor: 'rgba(0,255,255,0.3)',
                  color: '#00ffff',
                }}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition-all"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Top Projects Section */}
      <section id="projects" className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500">
                Top Projects
              </span>
            </h2>
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white hover:bg-white/10 transition-all"
            >
              View All Projects
            </motion.a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Get In Touch
          </h2>
          <ContactForm />
        </motion.div>
      </section>
    </div>
  );
}
