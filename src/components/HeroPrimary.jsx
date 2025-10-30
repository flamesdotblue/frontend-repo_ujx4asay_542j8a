import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroPrimary() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradients that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(60% 60% at 50% 20%, rgba(99,102,241,0.25) 0%, rgba(0,0,0,0) 60%)' }} />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Gaming, Entertainment, and Playful 3D Stories
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-base text-zinc-300 sm:text-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
        >
          Dive into interactive articles exploring character design, game worlds, and cutting-edge visuals—all running on a buttery-smooth, accessible canvas.
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <motion.a
            href="#posts"
            className="group rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 ring-1 ring-white/10 transition hover:bg-indigo-400"
            whileHover={prefersReducedMotion ? undefined : { y: -2 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          >
            Explore Posts
          </motion.a>
          <motion.a
            href="#showcase"
            className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15"
            whileHover={prefersReducedMotion ? undefined : { y: -2 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          >
            See Showcase
          </motion.a>
        </div>
      </div>
    </section>
  );
}
