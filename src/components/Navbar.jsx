import { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Home, Sparkles, Layers } from 'lucide-react';

export default function Navbar() {
  const [active, setActive] = useState('home');

  const items = [
    { key: 'home', label: 'Home', icon: Home },
    { key: 'showcase', label: 'Showcase', icon: Layers },
    { key: 'features', label: 'Features', icon: Sparkles },
  ];

  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Rocket className="h-6 w-6 text-indigo-400" />
            <span className="font-semibold tracking-tight text-white">Vibe Blog</span>
          </div>
          <ul className="relative hidden md:flex items-center gap-1 rounded-full bg-white/5 p-1 ring-1 ring-white/10">
            {items.map(({ key, label, icon: Icon }) => (
              <li key={key}>
                <button
                  onClick={() => setActive(key)}
                  className={`group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${
                    active === key ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {active === key && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-indigo-500/20"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <Icon className="h-4 w-4" />
                  <span className="relative">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
