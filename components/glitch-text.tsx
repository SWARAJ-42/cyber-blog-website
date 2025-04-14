"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  children: React.ReactNode
  className?: string
  glitchIntensity?: number
}

export function GlitchText({ children, className, glitchIntensity = 1 }: GlitchTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const glitchX = useTransform(scrollYProgress, [0, 0.5, 1], [0, glitchIntensity * 5, 0])
  const glitchXNegative = useTransform(glitchX, (value) => -value)
  const glitchY = useTransform(scrollYProgress, [0, 0.5, 1], [0, glitchIntensity * 3, 0])
  const glitchOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5, 0.7, 0.8, 1], [0, 0.8, 0, 0.8, 0, 0.8, 0])

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div>{children}</div>
      <motion.div
        className="absolute inset-0 text-purple-500"
        style={{
          x: glitchX,
          opacity: glitchOpacity,
        }}
        aria-hidden="true"
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 text-cyan-400"
        style={{
          x: glitchXNegative,
          y: glitchY,
          opacity: glitchOpacity,
        }}
        aria-hidden="true"
      >
        {children}
      </motion.div>
    </div>
  )
}
