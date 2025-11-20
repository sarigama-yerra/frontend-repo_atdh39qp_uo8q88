import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Yellowstone Hero">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ShS6h2HOKd20s1py/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for brand tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/30 via-yellow-500/10 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white drop-shadow-[0_10px_40px_rgba(234,179,8,0.35)]">
              Yellowstone
            </h1>
            <p className="mt-5 text-lg text-white/85">
              A bold, golden journey from iconic bridges to vibrant cities.
            </p>
            <a href="#transition" className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-400 text-slate-900 font-semibold px-5 py-3 shadow-lg shadow-yellow-500/30 ring-1 ring-yellow-300 hover:-translate-y-0.5 active:translate-y-0 transition">
              Start Scrolling
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
