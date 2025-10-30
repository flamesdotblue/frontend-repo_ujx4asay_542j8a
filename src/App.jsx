import { useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroPrimary from './components/HeroPrimary';
import HeroShowcase from './components/HeroShowcase';
import HeroMarquee from './components/HeroMarquee';
import PostsGrid from './components/PostsGrid';
import Footer from './components/Footer';

export default function App() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.classList.add('bg-black');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key="home"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <HeroPrimary />
          <HeroShowcase />
          <HeroMarquee />
          <PostsGrid />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
