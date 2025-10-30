import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroShowcase() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const parallax = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -100]);

  return (
    <section id="showcase" className="relative w-full bg-black py-24 sm:py-28">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div
          style={{ y: parallax }}
          className="absolute inset-0 opacity-60"
        >
          <div className="absolute inset-0" style={{ background: 'radial-gradient(40% 40% at 10% 10%, rgba(34,197,94,0.15) 0%, rgba(0,0,0,0) 60%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(40% 40% at 90% 20%, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 60%)' }} />
        </motion.div>
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Interactive 3D Meets Storytelling
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-3 text-zinc-300"
          >
            Blend gameplay aesthetics with editorial depth. Animate scenes, spotlight characters, and let readers explore worlds right on the page.
          </motion.p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-300">
            {[
              'Character Design',
              'Environment Art',
              'Physics & Particles',
              'Motion Systems',
            ].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-2"
              >
                {t}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative h-[340px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
