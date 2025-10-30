import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
        <p>© {new Date().getFullYear()} Nebula Blog. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
