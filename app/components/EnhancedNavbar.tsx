'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EnhancedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-xl' : ''
    }`}>
      <nav className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between px-6 py-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-lg shadow-fuchsia-500/20 group-hover:scale-105 transition-transform" />
              <span className="text-sm tracking-widest text-white/80">TAKSHIV KASHYAP</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 relative">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-xl px-4 py-2 text-white/80 hover:text-white transition-colors hover:bg-white/10 ${
                    pathname === item.href ? 'text-white' : ''
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/30"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2"
            >
              <div className="space-y-1.5">
                <div className={`h-0.5 w-6 bg-white/80 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`h-0.5 w-6 bg-white/80 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`h-0.5 w-6 bg-white/80 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 px-6 py-4"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-4 py-2 text-white/80 hover:text-white transition-colors hover:bg-white/10 ${
                      pathname === item.href ? 'text-white bg-white/10' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}
