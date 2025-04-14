import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Clock, Calendar, Tag, Share2, Bookmark, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AnimatedSection } from "@/components/animated-section"
import { BlogReactions } from "@/components/blog-reactions"
import { CommentSection } from "@/components/comment-section"

interface BlogPostLayoutProps {
  title: string
  date: string
  readTime: string
  category: string
  coverImage: string
  authorImage: string
  authorName: string
  children: React.ReactNode
}

export function BlogPostLayout({
  title,
  date,
  readTime,
  category,
  coverImage,
  authorImage,
  authorName,
  children,
}: BlogPostLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
      {/* Glitch overlay effect */}
      <div className="fixed inset-0   opacity-5 pointer-events-none"></div>

      {/* Header */}
      <header className="relative border-b border-purple-900/50 backdrop-blur-sm bg-black/70 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-purple-400 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>BACK TO HOME</span>
            </Link>
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-purple-500" />
              <span className="text-lg font-bold tracking-tight text-future text-metallic-gradient">NEOCORTEX</span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8 text-zinc-400 hover:text-purple-400 hover:bg-purple-500/10"
              >
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8 text-zinc-400 hover:text-cyan-400 hover:bg-cyan-500/10"
              >
                <Bookmark className="h-4 w-4" />
                <span className="sr-only">Bookmark</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image src={coverImage || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <AnimatedSection delay={0.1}>
              <Badge className="mb-4 bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border-purple-500/50 uppercase">
                {category}
              </Badge>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight text-white max-w-4xl text-metallic-gradient">
                {title}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image src={authorImage || "/placeholder.svg"} alt={authorName} fill className="object-cover" />
                  </div>
                  <span>{authorName}</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{date}</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{readTime}</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  <span>{category}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="blog-content">
              <AnimatedSection>{children}</AnimatedSection>
            </article>

            {/* Reactions */}
            <BlogReactions />

            {/* Comments */}
            <CommentSection />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-purple-900/50 backdrop-blur-sm bg-black/70">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Terminal className="h-5 w-5 text-purple-500" />
              <span className="text-lg font-bold tracking-tight text-future text-metallic-gradient">NEOCORTEX</span>
            </div>
            <div className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} NEOCORTEX. All neural pathways reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
