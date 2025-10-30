import { useMemo } from 'react';
import { motion, useReducedMotion, useMotionValue, useTransform } from 'framer-motion';

const seedPosts = [
  {
    id: 'p1',
    title: 'Designing Playful 3D Characters',
    excerpt: 'From silhouette to shader: a step-by-step look at expressive avatars.',
    tag: 'Characters',
    img: 'https://images.unsplash.com/photo-1605979257913-1708b2d1164f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p2',
    title: 'Particles That Tell a Story',
    excerpt: 'Using physics to convey emotion and narrative beats in UI.',
    tag: 'Particles',
    img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p3',
    title: 'Lighting for Mood in WebGL',
    excerpt: 'Cinematic scenes that load fast and look rich on any device.',
    tag: 'Lighting',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p4',
    title: 'Audio-Driven Interactions',
    excerpt: 'Reactive UI that dances with your soundtrack.',
    tag: 'Audio',
    img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p5',
    title: 'Worldbuilding in the Browser',
    excerpt: 'Environment art pipelines tuned for the web.',
    tag: 'Environments',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p6',
    title: 'Shader Tricks for Stylized Looks',
    excerpt: 'Edge highlights, outlines, and painterly post FX.',
    tag: 'Shaders',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p7',
    title: 'Physics-Based UI Elements',
    excerpt: 'Make buttons bounce with purpose, not noise.',
    tag: 'Physics',
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p8',
    title: 'Accessibility First Motion',
    excerpt: 'Respect preferences, keep delight.',
    tag: 'Accessibility',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  },
];

function PostCard({ post }) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-40, 40], [8, -8]);
  const rotateY = useTransform(x, [-40, 40], [-8, 8]);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    x.set(((px - cx) / cx) * 40);
    y.set(((py - cy) / cy) * 40);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="group relative h-full w-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden" style={{ transform: 'translateZ(30px)' }}>
        <img src={post.img} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(60% 60% at 80% 20%, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 60%)' }} />
      </div>
      <div className="relative z-10 space-y-1 p-4" style={{ transform: 'translateZ(40px)' }}>
        <span className="inline-flex items-center rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs font-medium text-indigo-300 ring-1 ring-indigo-400/30">{post.tag}</span>
        <h4 className="mt-1 line-clamp-2 text-lg font-semibold text-white">{post.title}</h4>
        <p className="line-clamp-2 text-sm text-zinc-300">{post.excerpt}</p>
      </div>
    </motion.article>
  );
}

export default function PostsGrid() {
  const posts = useMemo(() => seedPosts, []);

  return (
    <section id="posts" className="relative w-full bg-black py-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(60% 60% at 10% 0%, rgba(34,197,94,0.08) 0%, rgba(0,0,0,0) 60%)' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">Latest Posts</h3>
            <p className="mt-2 max-w-2xl text-zinc-300">Fresh drops about game-inspired interfaces, 3D art, and rich motion systems.</p>
          </div>
          <motion.a
            href="#"
            className="hidden rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-white/15 md:inline-block"
            whileHover={{ y: -2 }}
          >
            View All
          </motion.a>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
