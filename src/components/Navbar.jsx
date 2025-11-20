import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-yellow-400 shadow-lg shadow-yellow-500/30 ring-1 ring-yellow-300 flex items-center justify-center font-black text-slate-900">Y</div>
          <span className="text-lg font-semibold tracking-tight text-white">Yellowstone</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#road" className="text-white/80 hover:text-white transition">Road</a>
          <a href="#city" className="text-white/80 hover:text-white transition">City</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}
