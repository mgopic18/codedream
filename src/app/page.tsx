"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Scene } from "@/components/scene"

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full text-center px-4 pt-20 pb-20">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">CodeDream</h1>
          <p className="text-xl md:text-2xl font-light text-neutral-300 tracking-wide">
            Team of Full Stack Engineers
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="space-y-4">
            <p className="text-3xl md:text-5xl font-medium font-serif italic">We invest in your vision</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-neutral-400 uppercase tracking-widest text-sm md:text-base font-mono">
            <span>Start-up Partnerships</span>
            <span className="hidden md:inline">•</span>
            <span>Sweat Equity</span>
          </div>

          <a href="mailto:info@codedream.com.au" className="text-neutral-500 hover:text-white transition-colors text-sm font-mono">
            info@codedream.com.au
          </a>
        </div>
      </div>
    </div>
  )
}
