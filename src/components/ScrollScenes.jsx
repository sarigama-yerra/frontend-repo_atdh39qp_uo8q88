import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollScenes() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })

  // Scene 1: Bridge (yellow Golden Gate with clouds)
  const bridgeScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.1])
  const cloudOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])

  // Scene 2: Top-down yellow road appears as clouds fully cover
  const roadOpacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1])
  const roadScale = useTransform(scrollYProgress, [0.25, 0.5], [1.2, 1])

  // Scene 3: City emerges as you continue
  const cityOpacity = useTransform(scrollYProgress, [0.55, 0.9], [0, 1])
  const cityTranslate = useTransform(scrollYProgress, [0.55, 1], ['20%', '0%'])

  useEffect(() => {
    // Ensure page is at top on mount for the intended scroll narrative
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <section ref={containerRef} id="transition" className="relative w-full" style={{ height: '300vh' }}>
      {/* Sticky viewport where scenes blend */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Layer: Bridge */}
        <motion.div style={{ scale: bridgeScale }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1520975693416-35a1de2b1f7b?q=80&w=1920&auto=format&fit=crop"
            alt="Yellow Golden Gate Bridge"
            className="h-full w-full object-cover"
          />
          {/* Warm yellow filter */}
          <div className="absolute inset-0 bg-yellow-400/25 mix-blend-multiply" />
        </motion.div>

        {/* Clouds overlay that becomes opaque */}
        <motion.div style={{ opacity: cloudOpacity }} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.7),rgba(255,255,255,0.9)_60%,white)]" />
          {/* Subtle motion */}
          <div className="absolute inset-0 animate-pulse" />
        </motion.div>

        {/* Layer: Top-down yellow road */}
        <motion.div style={{ opacity: roadOpacity, scale: roadScale }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1477981662321-36b0d6bb574f?q=80&w=1920&auto=format&fit=crop"
            alt="Top-down yellow road"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-yellow-400/30 mix-blend-multiply" />
        </motion.div>

        {/* Layer: City skyline */}
        <motion.div style={{ opacity: cityOpacity, y: cityTranslate }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1920&auto=format&fit=crop"
            alt="City skyline"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-yellow-300/20 mix-blend-multiply" />
        </motion.div>

        {/* Foreground copy to guide the journey */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
          >
            From Iconic Bridges
          </motion.h2>
          <motion.p
            className="mt-3 text-white/90"
            style={{ opacity: useTransform(scrollYProgress, [0.15, 0.35], [0, 1]) }}
          >
            Drift through clouds
          </motion.p>
          <motion.h3
            id="road"
            className="mt-40 text-2xl sm:text-3xl font-bold text-white"
            style={{ opacity: useTransform(scrollYProgress, [0.35, 0.6], [0, 1]) }}
          >
            To Endless Roads
          </motion.h3>
          <motion.h3
            id="city"
            className="mt-40 text-2xl sm:text-3xl font-bold text-white"
            style={{ opacity: useTransform(scrollYProgress, [0.7, 0.95], [0, 1]) }}
          >
            And into the City
          </motion.h3>
        </div>
      </div>
    </section>
  )
}
