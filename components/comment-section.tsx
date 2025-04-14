"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredList, StaggeredItem } from "@/components/staggered-list"
import { MessageSquare, Send, ThumbsUp, Flag, Clock } from "lucide-react"

interface Comment {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  timestamp: string
  likes: number
  liked: boolean
}

export function CommentSection() {
  const [commentText, setCommentText] = useState("")
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: {
        name: "NeuralNomad",
        avatar: "/neon-cityscape-portrait.png",
      },
      content:
        "This perspective on neural interfaces is fascinating. I've been experimenting with the NeuralLink v7.1 and seeing similar cognitive enhancements.",
      timestamp: "2 hours ago",
      likes: 15,
      liked: false,
    },
    {
      id: "2",
      author: {
        name: "CyberSynapse",
        avatar: "/neon-augmented.png",
      },
      content:
        "The ethical implications here are profound. We need more regulation on reality authentication protocols before we see widespread perception hacking.",
      timestamp: "5 hours ago",
      likes: 8,
      liked: false,
    },
    {
      id: "3",
      author: {
        name: "QuantumDreamer",
        avatar: "/neon-quantum-scape.png",
      },
      content:
        "I've been running simulations on consciousness transfer with 99.97% fidelity, but the philosophical question of identity continuity remains unsolved.",
      timestamp: "1 day ago",
      likes: 23,
      liked: false,
    },
  ])

  const handleSubmitComment = () => {
    if (!commentText.trim()) return

    const newComment: Comment = {
      id: Date.now().toString(),
      author: {
        name: "You",
        avatar: "/neon-cityscape-portrait.png",
      },
      content: commentText,
      timestamp: "Just now",
      likes: 0,
      liked: false,
    }

    setComments([newComment, ...comments])
    setCommentText("")
  }

  const handleLike = (id: string) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
            liked: !comment.liked,
          }
        }
        return comment
      }),
    )
  }

  return (
    <div className="mt-16 mb-12">
      <AnimatedSection delay={0.1}>
        <div className="flex items-center gap-2 mb-6">
          <MessageSquare className="h-5 w-5 text-purple-500" />
          <h2 className="text-xl font-bold text-future text-metallic-gradient">NEURAL NETWORK COMMENTS</h2>
          <span className="text-sm bg-purple-900/30 text-purple-300 px-2 py-0.5 rounded-md font-mono">
            {comments.length}
          </span>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="border border-purple-900/50 rounded-lg bg-black/40 backdrop-blur-sm p-4 mb-8">
          <div className="flex gap-4">
            <Avatar className="h-10 w-10 border border-purple-500/30">
              <AvatarImage src="/neon-cityscape-portrait.png" alt="Your avatar" />
              <AvatarFallback className="bg-purple-900/50 text-purple-300">YO</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Share your neural patterns..."
                className="bg-black/50 border-purple-900/50 focus:border-purple-500/50 focus:ring-purple-500/20 mb-3 min-h-[100px] text-zinc-300 placeholder:text-zinc-600"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <div className="flex justify-end">
                <Button
                  onClick={handleSubmitComment}
                  className="bg-purple-600 hover:bg-purple-700 text-white gap-2"
                  disabled={!commentText.trim()}
                >
                  <Send className="h-4 w-4" />
                  TRANSMIT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <StaggeredList delay={0.3} staggerDelay={0.1} className="space-y-4">
        {comments.map((comment) => (
          <StaggeredItem key={comment.id}>
            <div className="border border-purple-900/50 rounded-lg bg-zinc-900/30 p-4 hover:bg-zinc-900/40 transition-colors">
              <div className="flex gap-3">
                <Avatar className="h-10 w-10 border border-purple-500/30">
                  <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
                  <AvatarFallback className="bg-purple-900/50 text-purple-300">
                    {comment.author.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-zinc-200 text-metallic-purple">{comment.author.name}</span>
                      <span className="text-xs text-zinc-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {comment.timestamp}
                      </span>
                    </div>
                  </div>
                  <p className="text-zinc-300 mb-3">{comment.content}</p>
                  <div className="flex items-center gap-4">
                    <button
                      className={`flex items-center gap-1 text-xs ${
                        comment.liked ? "text-purple-400" : "text-zinc-500 hover:text-purple-400"
                      } transition-colors`}
                      onClick={() => handleLike(comment.id)}
                    >
                      <ThumbsUp className="h-3.5 w-3.5" />
                      <span>{comment.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-xs text-zinc-500 hover:text-cyan-400 transition-colors">
                      <Flag className="h-3.5 w-3.5" />
                      <span>Report</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </StaggeredItem>
        ))}
      </StaggeredList>
    </div>
  )
}
