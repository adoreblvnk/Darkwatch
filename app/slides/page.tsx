"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

const slides = [
  {
    id: "title",
    title: "Darkwatch",
    subtitle: "Your Autonomous Shopping Bodyguard",
    content: (
      <div className="space-y-6 text-center">
        <p className="text-2xl text-[#6b7280]">
          Sanitizing the web's militarized UX in Southeast Asia.
        </p>
        <div className="flex justify-center gap-4 pt-8">
          <Badge>Agent / Web App</Badge>
          <Badge>GLM-5-FP8</Badge>
          <Badge>Playwright</Badge>
        </div>
      </div>
    ),
  },
  {
    id: "problem",
    title: "The Problem",
    subtitle: "Militarized E-Commerce UX",
    content: (
      <div className="grid grid-cols-2 gap-12 text-left">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#ff4757]">The Traps</h3>
          <ul className="space-y-4 text-xl text-[#6b7280]">
            <li>• Fake countdown timers</li>
            <li>• Manufactured social proof</li>
            <li>• Hidden checkout fees</li>
            <li>• Bait & Switch product variants</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#10b981]">The Solution</h3>
          <ul className="space-y-4 text-xl text-[#6b7280]">
            <li>• Send an AI proxy first</li>
            <li>• Bypass anti-bot protections</li>
            <li>• Extract actual checkout payloads</li>
            <li>• Reveal the truth before you buy</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "tech",
    title: "Dual API Architecture",
    subtitle: "How Darkwatch Works",
    content: (
      <div className="grid grid-cols-2 gap-8 text-left">
        <div className="rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white p-8 shadow-sm">
          <div className="mb-4 text-4xl">🧠</div>
          <h3 className="mb-2 text-2xl font-bold text-[#111111]">
            GMI Cloud IE (GLM-5)
          </h3>
          <p className="text-lg text-[#6b7280]">
            The analytical brain. Processes massive HTML payloads in real-time
            to detect dark patterns, calculate trust scores, and flag
            bait-and-switch tactics.
          </p>
        </div>
        <div className="rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white p-8 shadow-sm">
          <div className="mb-4 text-4xl">🕵️</div>
          <h3 className="mb-2 text-2xl font-bold text-[#111111]">
            TinyFish Web Agent
          </h3>
          <p className="text-lg text-[#6b7280]">
            The eyes and hands. Spawns headless, stealth browser sessions routed
            through proxies to bypass CAPTCHAs and extract raw DOM/checkout
            data.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "demo",
    title: "Live Demo",
    subtitle: "Target: Shein.com",
    content: (
      <div className="text-center">
        <div className="mb-8 inline-block rounded-full bg-[#111111] px-8 py-4 font-mono text-2xl text-white">
          "iphone 16 pink case"
        </div>
        <p className="text-2xl text-[#6b7280]">
          Let's see what the agent finds.
        </p>
      </div>
    ),
  },
]

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[rgba(0,0,0,0.1)] bg-white px-4 py-2 text-sm font-semibold tracking-wide text-[#111111] uppercase shadow-sm">
      {children}
    </span>
  )
}

export default function Slides() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space" || e.key === "Enter") {
        setCurrent((prev) => Math.min(prev + 1, slides.length - 1))
      }
      if (e.key === "ArrowLeft") {
        setCurrent((prev) => Math.max(prev - 1, 0))
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-[#fafaf8] text-[#111111]">
      <div className="flex flex-1 items-center justify-center p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-5xl"
          >
            <div className="mb-12 text-center">
              <motion.h1
                className="mb-4 text-7xl font-black tracking-tight"
                layoutId="title"
              >
                {slides[current].title}
              </motion.h1>
              <motion.h2
                className="text-3xl font-medium text-[#ff4757]"
                layoutId="subtitle"
              >
                {slides[current].subtitle}
              </motion.h2>
            </div>

            <div className="mt-16">{slides[current].content}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress & Controls */}
      <div className="flex items-center justify-between p-8">
        <div className="text-sm font-bold text-[#6b7280]">
          GMI Cloud Hackathon 2026
        </div>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-[#ff4757]" : "w-2 bg-[rgba(0,0,0,0.1)]"
              }`}
            />
          ))}
        </div>
        <div className="text-sm font-bold text-[#6b7280]">
          {current + 1} / {slides.length}
        </div>
      </div>
    </div>
  )
}
