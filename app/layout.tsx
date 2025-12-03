import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import EnhancedNavbar from './components/EnhancedNavbar';
import ThreeBackground from './components/ThreeBackground';
import FloatingHolographicIcons from './components/FloatingHolographicIcons';
import ReactiveParticleBackground from './components/ReactiveParticleBackground';
import AnimatedGradientStreams from './components/AnimatedGradientStreams';
import { Toaster } from 'react-hot-toast';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Takshiv Kashyap - Futuristic Portfolio",
  description: "Full Stack Developer & Creative Technologist building immersive digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b0c10] text-white`}
      >
        {/* 3D Background */}
        <ThreeBackground />
        
        {/* Animated Gradient Streams */}
        <AnimatedGradientStreams />
        
        {/* Reactive Particle Background */}
        <ReactiveParticleBackground />
        
        {/* Floating Holographic Icons */}
        <FloatingHolographicIcons />
        
        {/* Global neon gradient aura */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-600/20 via-cyan-500/20 to-violet-600/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gradient-to-tr from-cyan-500/15 to-emerald-500/10 blur-2xl" />
          <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-gradient-to-bl from-fuchsia-600/15 to-indigo-600/15 blur-2xl" />
        </div>

        {/* Enhanced Navigation */}
        <EnhancedNavbar />

        <main className="mx-auto max-w-6xl px-4 relative z-20">{children}</main>

        <footer className="mx-auto max-w-6xl px-4 py-8 text-center text-xs text-white/50 relative z-20">
          © {new Date().getFullYear()} Takshiv Kashyap — Futuristic Portfolio
        </footer>

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(0, 0, 0, 0.8)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
            },
            success: {
              iconTheme: {
                primary: '#00ffff',
                secondary: '#000',
              },
            },
            error: {
              iconTheme: {
                primary: '#ff00ff',
                secondary: '#000',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
