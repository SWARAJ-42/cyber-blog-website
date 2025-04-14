"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

type Skill = {
  name: string
  level: number
  color: string
  icon: React.ReactNode
}

interface SkillBarProps {
  skill: Skill
  index: number
}

export const SkillBar = ({ skill, index }: SkillBarProps) => {
  const skillRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (skillRef.current) observer.observe(skillRef.current)
    return () => {
      if (skillRef.current) observer.unobserve(skillRef.current)
    }
  }, [])

  return (
    <div key={skill.name} ref={skillRef} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`text-${skill.color}-400`}>{skill.icon}</div>
          <h3 className="font-bold text-zinc-200">{skill.name}</h3>
        </div>
        <span className="text-sm font-mono text-zinc-400">
          {skill.level}%
        </span>
      </div>

      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-${skill.color}-500`}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isInView ? 1 : 0, height: isInView ? "auto" : 0 }}
        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
        className="overflow-hidden"
      >
        <div className="pt-2 text-sm text-zinc-400 border-t border-zinc-800 mt-2">
          {skill.name === "Neural Engineering" &&
            "Specialized in bidirectional neural interfaces with quantum encryption for secure brain-computer communication."}
          {skill.name === "Quantum Computing" &&
            "Developed quantum algorithms for neural pattern recognition and consciousness simulation."}
          {skill.name === "Digital Philosophy" &&
            "Published research on the ethical implications of digital consciousness and mind uploading."}
          {skill.name === "AR/VR Development" &&
            "Created neural-linked augmented reality systems for enhanced cognitive experiences."}
          {skill.name === "Cybersecurity" &&
            "Designed neural encryption protocols to protect brain-computer interfaces from unauthorized access."}
          {skill.name === "AI Systems" &&
            "Architected artificial intelligence systems with consciousness-inspired algorithms."}
        </div>
      </motion.div>
    </div>
  )
}
