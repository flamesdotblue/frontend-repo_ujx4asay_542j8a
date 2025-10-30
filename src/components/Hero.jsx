import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero({ onPrimaryCta }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full h-[80vh] min-h-[560px] bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/rvFZ5oikmZSIbmGQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft vignette and gradient overlay (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_55%,rgba(0,0,0,0.6)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col items-start justify-end px-4 md:px-6 pb-16">
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(59,130,246,0.35)]"
        >
          Ideas in Motion
        </motion.h1>
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-zinc-200"
        >
          A modern blog exploring design, engineering, and the future of creative tech. Crafted with a dark aesthetic and living particles.
        </motion.p>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex items-center gap-3"
        >
          <button
            onClick={onPrimaryCta}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
          >
            Read the blog
          </button>
          <a
            href="#latest"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition-colors"
          >
            Latest posts
          </a>
        </motion.div>
      </div>
    </section>
  );
}
