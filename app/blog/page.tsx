"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Terminal, Search, Filter, X, Clock, Cpu, Zap, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredList, StaggeredItem } from "@/components/staggered-list"
import { BlogStatsModal } from "@/components/blog-stats-modal"
import { cn } from "@/lib/utils"

// Blog post type definition
interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  featured?: boolean
  tags: string[]
  author?: {
    name: string
    image: string
  }
}

// Categories with their colors
const categories = [
  { name: "TECH", color: "purple" },
  { name: "PHILOSOPHY", color: "cyan" },
  { name: "CULTURE", color: "green" },
  { name: "SECURITY", color: "yellow" },
  { name: "BIOTECH", color: "red" },
  { name: "INTERFACE", color: "blue" },
  { name: "CREATIVITY", color: "pink" },
  { name: "AI", color: "orange" },
]

// Tags for filtering
const allTags = [
  "neural-interface",
  "consciousness",
  "virtual-reality",
  "augmentation",
  "encryption",
  "digital-art",
  "cybersecurity",
  "biotechnology",
  "ai-ethics",
  "quantum-computing",
  "metaverse",
  "brain-computer",
]

// Mock blog posts data
const allBlogPosts: BlogPost[] = [
  {
    id: "neural-revolution",
    title: "The Neural Revolution: Reshaping Human Cognition",
    excerpt: "How brain-computer interfaces are reshaping human cognition and our relationship with technology.",
    category: "TECH",
    date: "April 13, 2025",
    readTime: "8 min read",
    image: "/neural-cityscape.png",
    featured: true,
    tags: ["neural-interface", "brain-computer", "augmentation"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "digital-consciousness",
    title: "Digital Consciousness: Philosophical Implications of Uploaded Minds",
    excerpt: "Exploring the philosophical implications of uploaded minds and artificial consciousness.",
    category: "PHILOSOPHY",
    date: "April 7, 2025",
    readTime: "6 min read",
    image: "/neon-ghost.png",
    featured: true,
    tags: ["consciousness", "ai-ethics", "metaverse"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "hacking-reality",
    title: "Hacking Reality: The Thin Line Between Perception and AR",
    excerpt: "The thin line between perception and reality in an age of advanced augmented reality systems.",
    category: "CULTURE",
    date: "March 29, 2025",
    readTime: "5 min read",
    image: "/neon-grid-breach.png",
    featured: true,
    tags: ["virtual-reality", "cybersecurity", "metaverse"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "quantum-encryption",
    title: "Quantum Encryption: Post-Quantum Security Protocols",
    excerpt: "How quantum computing is revolutionizing encryption and security in the digital age.",
    category: "SECURITY",
    date: "March 22, 2025",
    readTime: "7 min read",
    image: "/neon-quantum-scape.png",
    tags: ["encryption", "cybersecurity", "quantum-computing"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "biotech-implants",
    title: "Biotech Implants: The Evolution of Human Enhancement",
    excerpt: "Exploring the latest advancements in biotechnology implants and human augmentation.",
    category: "BIOTECH",
    date: "March 15, 2025",
    readTime: "9 min read",
    image: "/neon-augmented.png",
    tags: ["biotechnology", "augmentation", "neural-interface"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "vr-interfaces",
    title: "VR Interfaces: Next-Gen Neural Controls",
    excerpt: "The future of virtual reality interfaces and how they connect directly to our neural systems.",
    category: "INTERFACE",
    date: "March 8, 2025",
    readTime: "6 min read",
    image: "/neon-cityscape-vr.png",
    tags: ["virtual-reality", "neural-interface", "metaverse"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "ai-art-revolution",
    title: "AI Art Revolution: Creative Expression Redefined",
    excerpt: "How artificial intelligence is transforming artistic expression and creative processes.",
    category: "CREATIVITY",
    date: "March 1, 2025",
    readTime: "4 min read",
    image: "/neon-cityscape.png",
    tags: ["digital-art", "ai-ethics", "creativity"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "neural-privacy",
    title: "Neural Privacy: Protecting Your Thoughts in a Connected Age",
    excerpt: "The emerging field of neural privacy and how to secure your thoughts in an increasingly connected world.",
    category: "SECURITY",
    date: "February 24, 2025",
    readTime: "7 min read",
    image: "/neon-circuit-city.png",
    tags: ["neural-interface", "cybersecurity", "privacy"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "synthetic-emotions",
    title: "Synthetic Emotions: Can AI Feel?",
    excerpt: "Examining the possibility of artificial emotional intelligence and its implications for society.",
    category: "AI",
    date: "February 18, 2025",
    readTime: "5 min read",
    image: "/neon-ghost.png",
    tags: ["ai-ethics", "consciousness", "emotions"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "digital-afterlife",
    title: "Digital Afterlife: Immortality Through Data",
    excerpt: "How digital consciousness preservation is offering a form of immortality through data.",
    category: "PHILOSOPHY",
    date: "February 12, 2025",
    readTime: "8 min read",
    image: "/neon-cityscape-grid.png",
    tags: ["consciousness", "metaverse", "digital-identity"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "neuro-enhancement",
    title: "Neuro-Enhancement: Cognitive Augmentation Technologies",
    excerpt: "The latest advancements in cognitive enhancement technologies and their ethical implications.",
    category: "BIOTECH",
    date: "February 5, 2025",
    readTime: "6 min read",
    image: "/neural-cityscape.png",
    tags: ["neural-interface", "augmentation", "biotechnology"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "quantum-consciousness",
    title: "Quantum Consciousness: The Physics of Thought",
    excerpt: "Exploring the quantum mechanical basis of consciousness and its implications for AI.",
    category: "PHILOSOPHY",
    date: "January 29, 2025",
    readTime: "10 min read",
    image: "/neon-quantum-scape.png",
    tags: ["consciousness", "quantum-computing", "brain-computer"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "cybernetic-fashion",
    title: "Cybernetic Fashion: Wearable Tech Evolution",
    excerpt: "How cybernetic fashion is blending technology with clothing to create new forms of expression.",
    category: "CULTURE",
    date: "January 22, 2025",
    readTime: "4 min read",
    image: "/neon-augmented.png",
    tags: ["augmentation", "digital-art", "wearable-tech"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "holographic-interfaces",
    title: "Holographic Interfaces: Beyond Screens",
    excerpt: "The development of holographic user interfaces and how they're changing human-computer interaction.",
    category: "INTERFACE",
    date: "January 15, 2025",
    readTime: "5 min read",
    image: "/neon-cityscape-vr.png",
    tags: ["virtual-reality", "interface-design", "augmentation"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "neural-networks-art",
    title: "Neural Networks & Art: The Creative Algorithm",
    excerpt: "How neural networks are being used to create stunning and innovative digital art.",
    category: "CREATIVITY",
    date: "January 8, 2025",
    readTime: "6 min read",
    image: "/neon-cityscape.png",
    tags: ["digital-art", "ai-ethics", "neural-networks"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "memory-augmentation",
    title: "Memory Augmentation: Digital Memory Systems",
    excerpt: "The development of digital memory augmentation systems and their impact on human cognition.",
    category: "TECH",
    date: "January 1, 2025",
    readTime: "7 min read",
    image: "/neural-cityscape.png",
    tags: ["neural-interface", "augmentation", "brain-computer"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "virtual-identity",
    title: "Virtual Identity: The Digital Self",
    excerpt: "Exploring the concept of virtual identity and its relationship to our physical selves.",
    category: "PHILOSOPHY",
    date: "December 25, 2024",
    readTime: "8 min read",
    image: "/neon-ghost.png",
    tags: ["metaverse", "consciousness", "digital-identity"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "neural-hacking",
    title: "Neural Hacking: The New Frontier of Cybersecurity",
    excerpt: "The emerging threats of neural hacking and how to protect your brain-computer interfaces.",
    category: "SECURITY",
    date: "December 18, 2024",
    readTime: "9 min read",
    image: "/neon-grid-breach.png",
    tags: ["cybersecurity", "neural-interface", "privacy"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "ai-governance",
    title: "AI Governance: Regulating Artificial Minds",
    excerpt: "The challenges and approaches to governing increasingly autonomous artificial intelligence systems.",
    category: "AI",
    date: "December 11, 2024",
    readTime: "7 min read",
    image: "/neon-circuit-city.png",
    tags: ["ai-ethics", "governance", "consciousness"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
  {
    id: "synthetic-biology",
    title: "Synthetic Biology: Programming Life",
    excerpt: "How synthetic biology is allowing scientists to program living organisms like computers.",
    category: "BIOTECH",
    date: "December 4, 2024",
    readTime: "8 min read",
    image: "/neon-augmented.png",
    tags: ["biotechnology", "synthetic-biology", "programming"],
    author: {
      name: "Dr. Marcus Nexus",
      image: "/neon-cityscape-portrait.png",
    },
  },
]

export default function BlogSearchPage() {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [readTimeRange, setReadTimeRange] = useState([0, 10])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(allBlogPosts)
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState(true)
  const [expandedTags, setExpandedTags] = useState(true)
  const [expandedReadTime, setExpandedReadTime] = useState(true)

  // State for modal
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Apply filters when any filter state changes
  useEffect(() => {
    let result = allBlogPosts

    // Apply search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter((post) => selectedCategories.includes(post.category))
    }

    // Apply tag filter
    if (selectedTags.length > 0) {
      result = result.filter((post) => post.tags.some((tag) => selectedTags.includes(tag)))
    }

    // Apply read time filter
    result = result.filter((post) => {
      const minutes = Number.parseInt(post.readTime.split(" ")[0])
      return minutes >= readTimeRange[0] && minutes <= readTimeRange[1]
    })

    setFilteredPosts(result)
  }, [searchQuery, selectedCategories, selectedTags, readTimeRange])

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setSelectedTags([])
    setReadTimeRange([0, 10])
  }

  // Get category color
  const getCategoryColor = (categoryName: string) => {
    const category = categories.find((c) => c.name === categoryName)
    return category ? category.color : "purple"
  }

  // Open modal with selected post
  const openPostModal = (post: BlogPost) => {
    setSelectedPost(post)
    setIsModalOpen(true)
  }

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Group posts by category for display
  const postsByCategory = categories.map((category) => ({
    category: category.name,
    color: category.color,
    posts: filteredPosts.filter((post) => post.category === category.name),
  }))

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
      {/* Glitch overlay effect */}
      <div className="fixed inset-0 bg-[url('/neon-circuit-city.png')] opacity-5 pointer-events-none bg-cover"></div>

      {/* Header */}
      <header className="relative border-b border-purple-900/50 backdrop-blur-sm bg-black/70 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Terminal className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-bold tracking-tight text-future text-metallic-gradient">NEOCORTEX</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-zinc-900/30 py-8">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-future text-metallic-gradient text-center">
              NEURAL ARCHIVE
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-xl opacity-50"></div>
              <div className="relative flex items-center bg-black/60 border border-purple-500/30 rounded-lg overflow-hidden">
                <div className="flex-shrink-0 pl-4">
                  <Search className="h-5 w-5 text-purple-400" />
                </div>
                <input
                  type="text"
                  placeholder="SEARCH NEURAL ARCHIVES..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-0 py-4 pl-3 pr-10 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-0 font-mono"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 text-zinc-500 hover:text-purple-400"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Mobile Filter Toggle */}
      <div className="md:hidden sticky top-0 z-20 bg-black/80 backdrop-blur-sm border-b border-purple-900/30 p-4">
        <Button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="w-full bg-zinc-900 hover:bg-zinc-800 text-white border border-purple-500/30 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-purple-400" />
            <span>NEURAL FILTERS</span>
          </div>
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">
            {selectedCategories.length + selectedTags.length > 0
              ? `${selectedCategories.length + selectedTags.length} ACTIVE`
              : "NONE"}
          </Badge>
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside
          className={cn(
            "md:w-64 flex-shrink-0 md:block transition-all duration-300 overflow-hidden",
            showMobileFilters ? "block" : "hidden",
          )}
        >
          <AnimatedSection delay={0.1} className="sticky top-20">
            <div className="bg-zinc-900/30 border border-purple-900/50 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="p-4 border-b border-purple-900/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-purple-400" />
                  <h2 className="text-sm font-bold text-future text-metallic-purple">NEURAL FILTERS</h2>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="h-7 px-2 text-xs text-zinc-500 hover:text-purple-400 hover:bg-purple-500/10"
                >
                  CLEAR ALL
                </Button>
              </div>

              {/* Categories Filter */}
              <div className="border-b border-purple-900/50">
                <button
                  onClick={() => setExpandedCategories(!expandedCategories)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-zinc-900/50"
                >
                  <span className="text-sm font-bold text-zinc-300">CATEGORIES</span>
                  <ChevronDown
                    className={`h-4 w-4 text-zinc-500 transition-transform ${expandedCategories ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCategories ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-4 pt-0 space-y-2">
                    {categories.map((category) => (
                      <div key={category.name} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category.name}`}
                          checked={selectedCategories.includes(category.name)}
                          onCheckedChange={() => toggleCategory(category.name)}
                          className={`border-${category.color}-500/50 data-[state=checked]:bg-${category.color}-500 data-[state=checked]:border-${category.color}-500`}
                        />
                        <label
                          htmlFor={`category-${category.name}`}
                          className="text-sm text-zinc-400 hover:text-zinc-300 cursor-pointer"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tags Filter */}
              <div className="border-b border-purple-900/50">
                <button
                  onClick={() => setExpandedTags(!expandedTags)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-zinc-900/50"
                >
                  <span className="text-sm font-bold text-zinc-300">TAGS</span>
                  <ChevronDown
                    className={`h-4 w-4 text-zinc-500 transition-transform ${expandedTags ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandedTags ? "max-h-96" : "max-h-0"}`}>
                  <div className="p-4 pt-0 space-y-2">
                    {allTags.map((tag) => (
                      <div key={tag} className="flex items-center space-x-2">
                        <Checkbox
                          id={`tag-${tag}`}
                          checked={selectedTags.includes(tag)}
                          onCheckedChange={() => toggleTag(tag)}
                          className="border-cyan-500/50 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                        />
                        <label
                          htmlFor={`tag-${tag}`}
                          className="text-sm text-zinc-400 hover:text-zinc-300 cursor-pointer"
                        >
                          {tag.replace(/-/g, " ")}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Read Time Filter */}
              <div>
                <button
                  onClick={() => setExpandedReadTime(!expandedReadTime)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-zinc-900/50"
                >
                  <span className="text-sm font-bold text-zinc-300">READ TIME</span>
                  <ChevronDown
                    className={`h-4 w-4 text-zinc-500 transition-transform ${expandedReadTime ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${expandedReadTime ? "max-h-32" : "max-h-0"}`}
                >
                  <div className="p-4 pt-0">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs text-zinc-500">{readTimeRange[0]} min</span>
                      <span className="text-xs text-zinc-500">{readTimeRange[1]} min</span>
                    </div>
                    <Slider
                      value={readTimeRange}
                      min={0}
                      max={10}
                      step={1}
                      onValueChange={setReadTimeRange}
                      className="[&>span]:bg-purple-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Results Summary */}
          <AnimatedSection delay={0.2} className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-zinc-900/30 border border-purple-900/50 rounded-lg p-4 backdrop-blur-sm">
              <div>
                <h2 className="text-lg font-bold text-future text-metallic-gradient">SEARCH RESULTS</h2>
                <p className="text-sm text-zinc-400">
                  Found <span className="text-purple-400 font-mono">{filteredPosts.length}</span> neural archives
                  {searchQuery && (
                    <>
                      {" "}
                      for <span className="text-cyan-400 font-mono">{`"${searchQuery}"`}</span>
                    </>
                  )}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">
                  {selectedCategories.length > 0 ? `${selectedCategories.length} CATEGORIES` : "ALL CATEGORIES"}
                </Badge>
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
                  {selectedTags.length > 0 ? `${selectedTags.length} TAGS` : "ALL TAGS"}
                </Badge>
              </div>
            </div>
          </AnimatedSection>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <AnimatedSection delay={0.3} className="text-center py-12">
              <div className="bg-zinc-900/30 border border-purple-900/50 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2 text-future text-metallic-purple">NO NEURAL ARCHIVES FOUND</h3>
                <p className="text-zinc-400 mb-6">
                  Your search parameters did not match any archives in our neural database.
                </p>
                <Button onClick={clearFilters} className="bg-purple-600 hover:bg-purple-700 text-white">
                  CLEAR FILTERS
                </Button>
              </div>
            </AnimatedSection>
          )}

          {/* Blog Posts by Category */}
          {postsByCategory
            .filter((category) => category.posts.length > 0)
            .map((category, index) => (
              <div key={category.category} className="mb-12">
                <AnimatedSection delay={0.2 + index * 0.1} className="mb-4 flex items-center gap-2">
                  <Zap className={`h-5 w-5 text-${category.color}-500`} />
                  <h2 className={`text-xl font-bold text-future text-metallic-${category.color}`}>
                    {category.category}
                  </h2>
                  <span className="text-sm bg-zinc-900/50 text-zinc-400 px-2 py-0.5 rounded-md font-mono">
                    {category.posts.length}
                  </span>
                </AnimatedSection>

                <StaggeredList
                  delay={0.3 + index * 0.1}
                  staggerDelay={0.05}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {category.posts.map((post) => (
                    <StaggeredItem key={post.id}>
                      <Card
                        className="bg-zinc-900/50 border-purple-900/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 group h-full cursor-pointer"
                        onClick={() => openPostModal(post)}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                          <Badge
                            className={`absolute top-3 right-3 bg-${getCategoryColor(
                              post.category,
                            )}-500/80 hover:bg-${getCategoryColor(post.category)}-500 text-white text-future`}
                          >
                            {post.category}
                          </Badge>
                          {post.featured && (
                            <Badge className="absolute top-3 left-3 bg-purple-500/80 hover:bg-purple-500 text-white text-future">
                              FEATURED
                            </Badge>
                          )}
                        </div>
                        <CardHeader className="pb-2">
                          <div className="text-xs text-zinc-500 mb-1 flex items-center gap-2 font-mono">
                            <Cpu className="h-3 w-3" />
                            {post.date}
                          </div>
                          <h3
                            className={`text-lg font-bold tracking-tight text-white group-hover:text-${getCategoryColor(
                              post.category,
                            )}-400 transition-colors text-future text-metallic-${getCategoryColor(post.category)}`}
                          >
                            {post.title}
                          </h3>
                        </CardHeader>
                        <CardContent className="text-sm text-zinc-400">
                          <p className="line-clamp-2">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-zinc-500">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                          <Button
                            variant="link"
                            className={`px-0 text-${getCategoryColor(post.category)}-400 hover:text-${getCategoryColor(post.category)}-300 text-sm text-future`}
                            onClick={(e) => {
                              e.stopPropagation()
                              openPostModal(post)
                            }}
                          >
                            STATS <ChevronRight className="h-3 w-3 ml-1" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </StaggeredItem>
                  ))}
                </StaggeredList>
              </div>
            ))}
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-purple-900/50 backdrop-blur-sm bg-black/70">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Terminal className="h-5 w-5 text-purple-500" />
              <span className="text-lg font-bold tracking-tight text-future text-metallic-gradient">NEOCORTEX</span>
            </div>
            <div className="text-sm text-zinc-500 font-mono">
              &copy; {new Date().getFullYear()} NEOCORTEX. All neural pathways reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Blog Stats Modal */}
      {selectedPost && <BlogStatsModal isOpen={isModalOpen} onClose={closeModal} post={selectedPost} />}
    </div>
  )
}
