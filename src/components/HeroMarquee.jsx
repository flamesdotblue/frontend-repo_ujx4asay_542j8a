import { motion, useReducedMotion } from 'framer-motion';

const tags = [
  '3D', 'Gaming', 'Particles', 'Shaders', 'Design', 'Story', 'UI', 'Accessibility',
  'WebGL', 'Motion', 'Characters', 'Environments', 'Audio', 'Lighting', 'Physics', 'Tools',
];

export default function HeroMarquee() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-black py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(168,85,247,0.12) 0%, rgba(0,0,0,0) 60%)' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">Trending Topics</h3>
            <p className="mt-2 max-w-2xl text-zinc-300">Follow the pulse of interactive content. These tags heat up as new posts land.</p>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          {[0, 1].map((row) => (
            <div key={row} className="overflow-hidden">
              <motion.div
                initial={false}
                animate={prefersReducedMotion ? {} : { x: row % 2 === 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
                transition={prefersReducedMotion ? undefined : { duration: 22, repeat: Infinity, ease: 'linear' }}
                className="flex gap-3 will-change-transform"
              >
                {[...tags, ...tags].map((t, i) => (
                  <motion.span
                    key={`${row}-${i}-${t}`}
                    whileHover={prefersReducedMotion ? undefined : { rotateX: 8, rotateY: -6, y: -2 }}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 shadow-inner shadow-black/40"
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
