'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allProjects = [
    {
      title: 'Neon Grid Visualizer',
      description: 'A reactive 3D visualizer with neon particle systems and audio sync.',
      tech: ['Three.js', 'React', 'WebGL'],
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop',
      href: '#',
      demoLabel: 'Live Demo',
      featured: true,
      category: '3D',
      details: 'Interactive 3D visualization with real-time audio analysis and particle effects.',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Glassmorphism Dashboard',
      description: 'Elegant analytics dashboard with smooth interactions and charts.',
      tech: ['Next.js', 'Tailwind', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
      href: '#',
      demoLabel: 'Live Demo',
      featured: false,
      category: 'UI/UX',
      details: 'Modern dashboard with glassmorphism design, real-time data visualization, and smooth animations.',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'XR Portfolio Showcase',
      description: 'Immersive portfolio with interactive scenes and dynamic routing.',
      tech: ['React', 'Three.js', 'SSG'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
      href: '#',
      demoLabel: 'Live Demo',
      featured: false,
      category: '3D',
      details: 'WebXR-powered portfolio with interactive 3D scenes and optimized performance.',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Realtime Chat Arena',
      description: 'Realtime web chat with presence, reactions, and neon UI.',
      tech: ['Supabase', 'Next.js', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1511452885600-a2a2d491b3f8?q=80&w=1600&auto=format&fit=crop',
      href: '#',
      demoLabel: 'Live Demo',
      featured: true,
      category: 'Full Stack',
      details: 'Real-time chat application with presence indicators, reactions, and modern UI.',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content generation with custom prompts and templates.',
      tech: ['Next.js', 'OpenAI', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop',
      href: '#',
      demoLabel: 'Live Demo',
      featured: false,
      category: 'AI',
      details: 'Content generation platform powered by AI with customizable templates.',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with Stripe integration and inventory management.',
      tech: ['React', 'Node.js', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600&auto=format&fit=crop',
      href: '#',
      demoLabel: 'Live Demo',
      featured: false,
      category: 'Full Stack',
      details: 'Full-featured e-commerce platform with payment processing and admin dashboard.',
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  const categories = ['all', '3D', 'UI/UX', 'Full Stack', 'AI'];

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

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
              Projects
            </span>
          </h1>
          
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore my portfolio of innovative web applications, interactive experiences, 
            and cutting-edge digital solutions built with modern technologies.
          </p>
        </motion.div>
      </motion.section>

      {/* Filter Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-all ${
                filter === category
                  ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400'
                  : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer"
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-white/70">{selectedProject.category}</p>
              </div>

              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-2xl"
              />

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                <p className="text-white/80 leading-relaxed">{selectedProject.details}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <motion.a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-medium text-white transition-all hover:from-cyan-600 hover:to-fuchsia-600"
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
                >
                  View Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
