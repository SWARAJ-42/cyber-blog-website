"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { X, Clock, Calendar, Tag, Share2, Bookmark, Brain, Zap, BarChart3, Eye, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface BlogStatsModalProps {
  isOpen: boolean
  onClose: () => void
  post: {
    id: string
    title: string
    excerpt: string
    category: string
    date: string
    readTime: string
    image: string
    tags: string[]
    author?: {
      name: string
      image: string
    }
  }
}

export function BlogStatsModal({ isOpen, onClose, post }: BlogStatsModalProps) {
  // Generate random stats for demo purposes
  const [stats] = useState({
    views: Math.floor(Math.random() * 1000) + 500,
    neuralEngagement: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 50),
    shares: Math.floor(Math.random() * 100),
    bookmarks: Math.floor(Math.random() * 200),
    readCompletion: Math.floor(Math.random() * 40) + 60, // 60-100%
  })

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl bg-zinc-900/90 border border-purple-500/30 rounded-lg overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated border effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(139, 92, 246, 0) 0%, rgba(34, 211, 238, 0.5) 50%, rgba(139, 92, 246, 0) 100%)",
                    "linear-gradient(45deg, rgba(139, 92, 246, 0.5) 0%, rgba(34, 211, 238, 0) 50%, rgba(139, 92, 246, 0.5) 100%)",
                    "linear-gradient(45deg, rgba(139, 92, 246, 0) 0%, rgba(34, 211, 238, 0.5) 50%, rgba(139, 92, 246, 0) 100%)",
                  ],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-zinc-400 hover:text-white bg-zinc-800/50 hover:bg-zinc-700/50 rounded-full p-2 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {/* Left column - Image and basic info */}
              <div>
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4 border border-purple-500/20">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

                  {/* Scan effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
                    initial={{ y: -300 }}
                    animate={{ y: 300 }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      ease: "linear",
                    }}
                  />

                  <Badge className="absolute top-3 right-3 bg-purple-500/80 hover:bg-purple-500 text-white text-future">
                    {post.category}
                  </Badge>
                </div>

                <h2 className="text-2xl font-bold mb-2 text-future text-metallic-gradient">{post.title}</h2>

                <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    <span>{post.category}</span>
                  </div>
                </div>

                <p className="text-zinc-300 mb-4">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-zinc-800/50 hover:bg-purple-900/30 border-purple-500/30 text-zinc-400"
                    >
                      {tag.replace(/-/g, " ")}
                    </Badge>
                  ))}
                </div>

                {/* Author info if available */}
                {post.author && (
                  <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-purple-500/20">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-purple-500/30">
                      <Image
                        src={post.author.image || "/placeholder.svg"}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-300">{post.author.name}</div>
                      <div className="text-xs text-zinc-500">Neural Interface Engineer</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right column - Stats and engagement */}
              <div className="space-y-6">
                <div className="data-terminal">
                  <div className="data-terminal-header">
                    <div className="data-terminal-dots">
                      <div className="data-terminal-dot bg-red-500"></div>
                      <div className="data-terminal-dot bg-yellow-500"></div>
                      <div className="data-terminal-dot bg-green-500"></div>
                    </div>
                    <div className="data-terminal-title">NEURAL.METRICS</div>
                  </div>
                  <div className="data-terminal-content">
                    <div className="data-terminal-line">
                      <span className="data-terminal-prompt">$</span>
                      <span>{`metrics --analyze --post="${post.id}"`}</span>
                    </div>
                    <div className="data-terminal-line">
                      <span>Neural engagement: {stats.neuralEngagement}%</span>
                    </div>
                    <div className="data-terminal-line">
                      <span>Cognitive resonance: HIGH</span>
                    </div>
                    <div className="data-terminal-line">
                      <span>Memetic potential: SIGNIFICANT</span>
                    </div>
                    <div className="data-terminal-line">
                      <span className="data-terminal-prompt">$</span>
                      <span>engagement --forecast</span>
                    </div>
                    <div className="data-terminal-line">
                      <span>Projected neural impact: +{Math.floor(Math.random() * 20) + 10}%</span>
                    </div>
                  </div>
                </div>

                {/* Engagement stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-purple-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm text-zinc-300">Views</span>
                      </div>
                      <span className="text-lg font-mono text-cyan-400">{stats.views}</span>
                    </div>
                    <Progress value={stats.views / 20} className="h-1 bg-zinc-700" />
                  </div>

                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-purple-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-purple-400" />
                        <span className="text-sm text-zinc-300">Neural Score</span>
                      </div>
                      <span className="text-lg font-mono text-purple-400">{stats.neuralEngagement}</span>
                    </div>
                    <Progress
                      value={stats.neuralEngagement}
                      className="h-1 bg-zinc-700"
                      
                    />
                  </div>

                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-purple-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-zinc-300">Comments</span>
                      </div>
                      <span className="text-lg font-mono text-green-400">{stats.comments}</span>
                    </div>
                    <Progress
                      value={stats.comments * 2}
                      className="h-1 bg-zinc-700"
                    />
                  </div>

                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-purple-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Share2 className="h-4 w-4 text-blue-400" />
                        <span className="text-sm text-zinc-300">Shares</span>
                      </div>
                      <span className="text-lg font-mono text-blue-400">{stats.shares}</span>
                    </div>
                    <Progress value={stats.shares} className="h-1 bg-zinc-700" />
                  </div>
                </div>

                {/* Read completion */}
                <div className="bg-zinc-800/50 rounded-lg p-4 border border-purple-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-zinc-300">Average Read Completion</span>
                    </div>
                    <span className="text-lg font-mono text-yellow-400">{stats.readCompletion}%</span>
                  </div>
                  <Progress
                    value={stats.readCompletion}
                    className="h-2 bg-zinc-700"
                  />
                </div>

                {/* Action buttons */}
                <div className="flex flex-col gap-3">
                  <Link href={`/blog/neural-revolution`}>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white gap-2 text-future">
                      <Zap className="h-4 w-4" />
                      READ FULL ARTICLE
                    </Button>
                  </Link>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 gap-2 text-future"
                    >
                      <Share2 className="h-4 w-4" />
                      SHARE
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-purple-500/50 text-purple-400 hover:bg-purple-500/20 gap-2 text-future"
                    >
                      <Bookmark className="h-4 w-4" />
                      BOOKMARK
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
