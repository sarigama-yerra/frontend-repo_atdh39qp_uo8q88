import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-8 sm:grid-cols-2 items-center">
        <div>
          <h4 className="text-2xl font-black">Yellowstone</h4>
          <p className="mt-3 text-white/70 max-w-md">
            A golden, story-driven brand experience that guides you from coast to city.
          </p>
        </div>
        <div className="justify-self-end">
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-yellow-400 text-slate-900 font-semibold px-5 py-3 shadow-lg shadow-yellow-500/30 ring-1 ring-yellow-300 hover:-translate-y-0.5 active:translate-y-0 transition">
            Get in touch
          </a>
        </div>
      </div>
      <div className="px-6 pb-10 text-center text-white/60">
        © {new Date().getFullYear()} Yellowstone. All rights reserved.
      </div>
    </footer>
  )
}
