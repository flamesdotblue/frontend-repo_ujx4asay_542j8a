import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PostsGrid from './components/PostsGrid';
import Footer from './components/Footer';

export default function App() {
  const [page, setPage] = useState('home');
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 },
    animate: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    exit: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar current={page} onNavigate={setPage} />

      <AnimatePresence mode="wait">
        {page === 'home' && (
          <motion.main
            key="home"
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Hero onPrimaryCta={() => setPage('blog')} />
            <PostsGrid />
          </motion.main>
        )}

        {page === 'blog' && (
          <motion.main
            key="blog"
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="bg-black"
          >
            <section className="max-w-6xl mx-auto px-4 md:px-6 py-14">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">All Articles</h1>
              <p className="mt-2 text-zinc-300 max-w-2xl">Deep dives and quick reads across design, engineering, and motion. All animations respect your system accessibility settings.</p>
            </section>
            <PostsGrid />
          </motion.main>
        )}

        {page === 'about' && (
          <motion.main
            key="about"
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="bg-black"
          >
            <section className="max-w-6xl mx-auto px-4 md:px-6 py-14">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About this blog</h1>
              <p className="mt-4 text-zinc-300 max-w-3xl">
                Built as a modern, accessible showcase. The homepage features a reactive 3D particle background. Page transitions and interactive tiles are powered by motion and respect prefers-reduced-motion.
              </p>
            </section>
          </motion.main>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
