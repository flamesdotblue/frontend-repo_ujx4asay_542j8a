import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ current, onNavigate }) {
  const links = [
    { key: 'home', label: 'Home' },
    { key: 'blog', label: 'Blog' },
    { key: 'about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-gradient-to-tr from-sky-500 via-cyan-400 to-fuchsia-500" />
          <span className="font-semibold tracking-tight">Nebula Blog</span>
        </div>
        <ul className="flex items-center gap-1 text-sm">
          {links.map((link) => {
            const active = current === link.key;
            return (
              <li key={link.key}>
                <button
                  onClick={() => onNavigate(link.key)}
                  className={`relative px-3 py-2 rounded-md transition-colors ${
                    active ? 'text-white' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-md bg-white/10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
