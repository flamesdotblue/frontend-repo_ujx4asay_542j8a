import React, { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const postsSeed = [
  {
    id: '1',
    title: 'Design Systems for the Real World',
    date: 'Oct 12, 2025',
    excerpt: 'From atomic components to enterprise-scale libraries, a practical guide to building resilient systems.',
    tags: ['Design', 'Systems']
  },
  {
    id: '2',
    title: 'Animating with Intent: Motion as a Language',
    date: 'Oct 5, 2025',
    excerpt: 'How to use motion to express hierarchy, causality, and brand—without adding noise.',
    tags: ['Motion', 'UX']
  },
  {
    id: '3',
    title: 'TypeScript Patterns I Wish I Knew Sooner',
    date: 'Sep 25, 2025',
    excerpt: 'Discriminated unions, branded types, and the art of safe extensibility in large codebases.',
    tags: ['Engineering', 'TypeScript']
  },
  {
    id: '4',
    title: 'From Prompt to Product: AI in the Design Loop',
    date: 'Sep 11, 2025',
    excerpt: 'Leveraging generative tools to explore, iterate, and validate—faster and with more confidence.',
    tags: ['AI', 'Process']
  },
  {
    id: '5',
    title: 'Shadows, Light, and the Illusion of Depth',
    date: 'Aug 31, 2025',
    excerpt: 'A practical look at elevation, blur radii, and color in dark UIs.',
    tags: ['Visual', 'Dark UI']
  },
  {
    id: '6',
    title: 'Web Performance: The 80/20 of Perceived Speed',
    date: 'Aug 20, 2025',
    excerpt: 'Tactics that matter most to how fast your product feels—not just how fast it is.',
    tags: ['Performance', 'Frontend']
  }
];

function useTilt(reduceMotion) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, a: 0 });

  const handlers = useMemo(() => ({
    onMouseMove: (e) => {
      if (reduceMotion) return;
      const target = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - target.left) / target.width; // 0..1
      const py = (e.clientY - target.top) / target.height; // 0..1
      const rx = (py - 0.5) * -12; // rotateX
      const ry = (px - 0.5) * 12; // rotateY
      setTilt({ x: rx, y: ry, a: 1 });
    },
    onMouseLeave: () => setTilt({ x: 0, y: 0, a: 0 }),
  }), [reduceMotion]);

  return { tilt, handlers };
}

function PostCard({ post, index }) {
  const reduceMotion = useReducedMotion();
  const { tilt, handlers } = useTilt(reduceMotion);

  return (
    <motion.article
      className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 text-white shadow-[0_10px_40px_-10px_rgba(59,130,246,0.25)]"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.03 }}
      style={{ transformStyle: 'preserve-3d' }}
      {...handlers}
    >
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={reduceMotion ? { rotateX: 0, rotateY: 0 } : { rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <h3 className="text-lg font-semibold leading-tight">{post.title}</h3>
        <p className="mt-2 text-sm text-zinc-300">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs text-zinc-200">{t}</span>
            ))}
          </div>
          <time className="text-xs text-zinc-400">{post.date}</time>
        </div>
      </motion.div>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition" />
    </motion.article>
  );
}

export default function PostsGrid() {
  return (
    <section id="latest" className="relative py-14 bg-black">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Latest posts</h2>
          <a href="#" className="text-sm text-sky-400 hover:text-sky-300">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {postsSeed.map((p, i) => (
            <PostCard key={p.id} post={p} index={i} />)
          )}
        </div>
      </div>
    </section>
  );
}
