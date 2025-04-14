"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Brain, Zap, Heart, FlameIcon as Fire, ThumbsUp } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

interface Reaction {
  icon: React.ReactNode
  label: string
  count: number
  active: boolean
}

export function BlogReactions() {
  const [reactions, setReactions] = useState<Reaction[]>([
    { icon: <Brain className="h-5 w-5" />, label: "Mind Blown", count: 42, active: false },
    { icon: <Zap className="h-5 w-5" />, label: "Electrifying", count: 36, active: false },
    { icon: <Heart className="h-5 w-5" />, label: "Love", count: 28, active: false },
    { icon: <Fire className="h-5 w-5" />, label: "Hot Take", count: 19, active: false },
    { icon: <ThumbsUp className="h-5 w-5" />, label: "Upvote", count: 53, active: false },
  ])

  const handleReaction = (index: number) => {
    setReactions((prev) => {
      const newReactions = [...prev]
      const reaction = newReactions[index]

      // Toggle active state and adjust count
      if (reaction.active) {
        reaction.count -= 1
        reaction.active = false
      } else {
        reaction.count += 1
        reaction.active = true
      }

      return newReactions
    })
  }

  return (
    <AnimatedSection delay={0.1} className="mb-12">
      <div className="border border-purple-900/50 rounded-lg bg-black/40 backdrop-blur-sm p-4">
        <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-4 font-mono">Neural Response</h3>
        <div className="flex flex-wrap gap-2">
          {reactions.map((reaction, index) => (
            <Button
              key={reaction.label}
              variant="outline"
              size="sm"
              onClick={() => handleReaction(index)}
              className={cn(
                "border-purple-900/50 bg-zinc-900/50 hover:bg-purple-900/20 gap-2 transition-all duration-300",
                reaction.active && "border-purple-500 bg-purple-900/30 text-purple-300",
              )}
            >
              {reaction.icon}
              <span>{reaction.label}</span>
              <span className="bg-black/40 px-1.5 py-0.5 rounded-md text-xs font-mono">{reaction.count}</span>
            </Button>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
