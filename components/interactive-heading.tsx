"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface InteractiveHeadingProps {
  children: React.ReactNode
  className?: string
}

export function InteractiveHeading({ children, className }: InteractiveHeadingProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateDimensions = () => {
      if (headingRef.current) {
        const { width, height } = headingRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (headingRef.current) {
      const { left, top } = headingRef.current.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top
      setMousePosition({ x, y })
    }
  }

  const handleMouseLeave = () => {
    // Reset to center when mouse leaves
    setMousePosition({ x: dimensions.width / 2, y: dimensions.height / 2 })
  }

  // Calculate rotation based on mouse position
  const calcRotateX = () => {
    if (dimensions.height === 0) return 0
    const centerY = dimensions.height / 2
    return ((mousePosition.y - centerY) / dimensions.height) * -10 // -10 to 10 degrees
  }

  const calcRotateY = () => {
    if (dimensions.width === 0) return 0
    const centerX = dimensions.width / 2
    return ((mousePosition.x - centerX) / dimensions.width) * 10 // -10 to 10 degrees
  }

  // Calculate highlight position
  const highlightX = (mousePosition.x / dimensions.width) * 100
  const highlightY = (mousePosition.y / dimensions.height) * 100

  return (
    <div
      ref={headingRef}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glowing highlight that follows mouse */}
      <div
        className="absolute pointer-events-none"
        style={{
          background: `radial-gradient(circle 150px at ${highlightX}% ${highlightY}%, rgba(139, 92, 246, 0.15), transparent)`,
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Glitch lines that appear on mouse move */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-purple-500/10 pointer-events-none"
          style={{
            height: "2px",
            width: "100%",
            left: 0,
            top: `${(mousePosition.y / dimensions.height) * 100}%`,
            y: 20 * i - 30,
            opacity: 0.5,
          }}
          animate={{
            y: [20 * i - 30, 20 * i - 10, 20 * i - 30],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 3D tilting text container */}
      <motion.div
        className="relative z-10"
        animate={{
          rotateX: calcRotateX(),
          rotateY: calcRotateY(),
          transformPerspective: 1000,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.5,
        }}
      >
        {/* Text with cyberpunk effect */}
        <div className="relative">
          {/* Main text */}
          {children}

          {/* Cyan shadow */}
          <div
            className="absolute top-0 left-0 w-full h-full text-cyan-500 opacity-50 pointer-events-none"
            style={{
              transform: `translate(${(mousePosition.x / dimensions.width - 0.5) * 5}px, ${
                (mousePosition.y / dimensions.height - 0.5) * 5
              }px)`,
              filter: "blur(2px)",
            }}
            aria-hidden="true"
          >
            {children}
          </div>

          {/* Purple shadow */}
          <div
            className="absolute top-0 left-0 w-full h-full text-purple-500 opacity-50 pointer-events-none"
            style={{
              transform: `translate(${(mousePosition.x / dimensions.width - 0.5) * -5}px, ${
                (mousePosition.y / dimensions.height - 0.5) * -5
              }px)`,
              filter: "blur(2px)",
            }}
            aria-hidden="true"
          >
            {children}
          </div>
        </div>
      </motion.div>

      {/* Digital circuit lines that appear on hover */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-purple-500/30 to-transparent h-px w-full"
            style={{
              top: `${(i + 1) * 20}%`,
              left: 0,
              scaleX: 0,
              originX: mousePosition.x > dimensions.width / 2 ? 0 : 1,
            }}
            animate={{
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
            }}
          />
        ))}

        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`v-line-${i}`}
            className="absolute bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent w-px h-full"
            style={{
              left: `${(i + 1) * 25}%`,
              top: 0,
              scaleY: 0,
              originY: mousePosition.y > dimensions.height / 2 ? 0 : 1,
            }}
            animate={{
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 4,
            }}
          />
        ))}
      </div>
    </div>
  )
}
