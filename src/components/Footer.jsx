export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Vibe Blog. Crafted with care, motion, and accessibility.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-zinc-400 hover:text-white">Privacy</a>
            <a href="#" className="text-zinc-400 hover:text-white">Terms</a>
            <a href="#" className="text-zinc-400 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
