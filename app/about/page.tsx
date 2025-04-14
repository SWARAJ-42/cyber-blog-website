"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import {
  Terminal,
  Zap,
  Brain,
  Cpu,
  Code,
  Network,
  Github,
  Twitter,
  Mail,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated-section";
import { GlitchText } from "@/components/glitch-text";
import { TimelineEvent } from "@/components/timeline-event";
import { SkillBar } from "../../components/skill-bars";

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("bio");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  // Skill data
  const skills = [
    {
      name: "Neural Engineering",
      level: 95,
      icon: <Brain className="h-5 w-5" />,
      color: "purple",
    },
    {
      name: "Quantum Computing",
      level: 85,
      icon: <Cpu className="h-5 w-5" />,
      color: "cyan",
    },
    {
      name: "Digital Philosophy",
      level: 90,
      icon: <Zap className="h-5 w-5" />,
      color: "blue",
    },
    {
      name: "AR/VR Development",
      level: 80,
      icon: <Globe className="h-5 w-5" />,
      color: "green",
    },
    {
      name: "Cybersecurity",
      level: 75,
      icon: <Code className="h-5 w-5" />,
      color: "red",
    },
    {
      name: "AI Systems",
      level: 92,
      icon: <Network className="h-5 w-5" />,
      color: "yellow",
    },
  ];

  // Timeline data
  const timeline = [
    {
      year: "2025",
      title: "Neural Interface Breakthrough",
      description:
        "Led the development of a revolutionary neural interface with 99.7% fidelity.",
      image: "/neural-cityscape.png",
    },
    {
      year: "2024",
      title: "Digital Consciousness Research",
      description:
        "Published groundbreaking research on the theoretical framework for digital consciousness transfer.",
      image: "/neon-ghost.png",
    },
    {
      year: "2023",
      title: "Quantum Encryption Protocol",
      description:
        "Developed a post-quantum encryption protocol for securing neural data transmission.",
      image: "/neon-quantum-scape.png",
    },
    {
      year: "2022",
      title: "AR/VR Neural Integration",
      description:
        "Created the first direct neural interface for augmented reality systems.",
      image: "/neon-cityscape-vr.png",
    },
    {
      year: "2021",
      title: "Neocortex Blog Launch",
      description:
        "Founded the Neocortex blog to explore the intersection of technology and consciousness.",
      image: "/neon-cityscape.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
      {/* Glitch overlay effect */}
      <div className="fixed inset-0   opacity-5 pointer-events-none"></div>

      {/* Header */}
      <header className="relative border-b border-purple-900/50 backdrop-blur-sm bg-black/70 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Terminal className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-bold tracking-tight text-future text-metallic-gradient">
                NEOCORTEX
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm hover:text-cyan-400 transition-colors text-future"
              >
                HOME
              </Link>
              <Link
                href="/blog"
                className="text-sm hover:text-cyan-400 transition-colors text-future"
              >
                BLOG
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-cyan-400 transition-colors text-future"
              >
                PROJECTS
              </Link>
              <Link
                href="/about"
                className="text-sm text-purple-400 transition-colors text-future"
              >
                ABOUT
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
          <Image
            src="/neon-circuit-city.png"
            alt="Neural network background"
            fill
            className="object-cover object-center opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Badge className="mb-4 bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border-purple-500/50 text-future">
                NEURAL ARCHITECT
              </Badge>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GlitchText className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-future">
                <h1 className="text-metallic-gradient">
                  DIGITAL CONSCIOUSNESS EXPLORER
                </h1>
              </GlitchText>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500">
                  <Image
                    src="/neon-cityscape-portrait.png"
                    alt="Author portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-metallic-cyan">
                    Dr. Eliza Nexus
                  </h2>
                  <p className="text-zinc-400">
                    Neural Interface Engineer & Digital Philosopher
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-purple-500/50 hover:bg-purple-500/20 text-future"
                  >
                    <Github className="h-4 w-4 text-purple-400" />
                    <span>GITHUB</span>
                  </Button>
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-cyan-500/50 hover:bg-cyan-500/20 text-future"
                  >
                    <Twitter className="h-4 w-4 text-cyan-400" />
                    <span>TWITTER</span>
                  </Button>
                </Link>
                <Link href="mailto:contact@neocortex.io">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-green-500/50 hover:bg-green-500/20 text-future"
                  >
                    <Mail className="h-4 w-4 text-green-400" />
                    <span>CONTACT</span>
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Content with Scroll Progress */}
      <div className="relative">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Navigation Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <AnimatedSection
                  delay={0.1}
                  className="bg-zinc-900/30 border border-purple-900/50 rounded-lg overflow-hidden backdrop-blur-sm"
                >
                  <nav className="divide-y divide-purple-900/30">
                    <button
                      onClick={() => setActiveSection("bio")}
                      className={`w-full p-4 text-left flex items-center gap-3 hover:bg-purple-900/20 transition-colors ${
                        activeSection === "bio"
                          ? "bg-purple-900/20 text-purple-400"
                          : "text-zinc-400"
                      }`}
                    >
                      <Brain className="h-5 w-5" />
                      <span className="text-future">NEURAL PROFILE</span>
                    </button>
                    <button
                      onClick={() => setActiveSection("skills")}
                      className={`w-full p-4 text-left flex items-center gap-3 hover:bg-purple-900/20 transition-colors ${
                        activeSection === "skills"
                          ? "bg-purple-900/20 text-purple-400"
                          : "text-zinc-400"
                      }`}
                    >
                      <Cpu className="h-5 w-5" />
                      <span className="text-future">SKILL MATRIX</span>
                    </button>
                    <button
                      onClick={() => setActiveSection("timeline")}
                      className={`w-full p-4 text-left flex items-center gap-3 hover:bg-purple-900/20 transition-colors ${
                        activeSection === "timeline"
                          ? "bg-purple-900/20 text-purple-400"
                          : "text-zinc-400"
                      }`}
                    >
                      <Zap className="h-5 w-5" />
                      <span className="text-future">NEURAL TIMELINE</span>
                    </button>
                    <button
                      onClick={() => setActiveSection("connect")}
                      className={`w-full p-4 text-left flex items-center gap-3 hover:bg-purple-900/20 transition-colors ${
                        activeSection === "connect"
                          ? "bg-purple-900/20 text-purple-400"
                          : "text-zinc-400"
                      }`}
                    >
                      <Network className="h-5 w-5" />
                      <span className="text-future">NEURAL UPLINK</span>
                    </button>
                  </nav>
                </AnimatedSection>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3" ref={containerRef}>
              <AnimatePresence mode="wait">
                {activeSection === "bio" && (
                  <motion.div
                    key="bio"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-zinc-900/30 border border-purple-900/50 rounded-lg p-6 backdrop-blur-sm mb-8">
                      <h2 className="text-2xl font-bold mb-6 text-future text-metallic-gradient">
                        NEURAL PROFILE
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                        <div className="relative">
                          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-xl opacity-70"></div>
                          <div className="relative aspect-square rounded-lg overflow-hidden border border-purple-500/30">
                            <Image
                              src="/neon-cityscape-portrait.png"
                              alt="Author portrait"
                              fill
                              className="object-cover"
                            />

                            {/* Animated scan effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
                              initial={{ y: -500 }}
                              animate={{ y: 500 }}
                              transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 2,
                                ease: "linear",
                              }}
                            />

                            {/* Corner decorations */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500"></div>
                          </div>
                        </div>

                        <div>
                          <div className="data-terminal mb-6">
                            <div className="data-terminal-header">
                              <div className="data-terminal-dots">
                                <div className="data-terminal-dot bg-red-500"></div>
                                <div className="data-terminal-dot bg-yellow-500"></div>
                                <div className="data-terminal-dot bg-green-500"></div>
                              </div>
                              <div className="data-terminal-title">
                                IDENTITY.SCAN
                              </div>
                            </div>
                            <div className="data-terminal-content">
                              <div className="data-terminal-line">
                                <span className="data-terminal-prompt">$</span>
                                <span>identity --scan --deep</span>
                              </div>
                              <div className="data-terminal-line">
                                <span>Name: Dr. Eliza Nexus</span>
                              </div>
                              <div className="data-terminal-line">
                                <span>
                                  Occupation: Neural Interface Engineer
                                </span>
                              </div>
                              <div className="data-terminal-line">
                                <span>Location: Neo-Tokyo Sector 7</span>
                              </div>
                              <div className="data-terminal-line">
                                <span>Neural-Link Status: CONNECTED</span>
                              </div>
                              <div className="data-terminal-line">
                                <span>Cognitive Enhancement: ACTIVE</span>
                              </div>
                            </div>
                          </div>

                          <div className="tech-specs">
                            <div className="tech-spec">
                              <div className="tech-spec-label">
                                NEURAL BANDWIDTH
                              </div>
                              <div className="tech-spec-value">1.2 TB/s</div>
                            </div>
                            <div className="tech-spec">
                              <div className="tech-spec-label">
                                COGNITIVE CORES
                              </div>
                              <div className="tech-spec-value">
                                128 quantum nodes
                              </div>
                            </div>
                            <div className="tech-spec">
                              <div className="tech-spec-label">
                                MEMORY CAPACITY
                              </div>
                              <div className="tech-spec-value">
                                ∞ (cloud-synced)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-4 text-future text-metallic-cyan">
                        NEURAL BIOGRAPHY
                      </h3>

                      <div className="space-y-4 text-zinc-300">
                        <p>
                          I navigate the boundaries between human cognition and
                          digital existence, exploring the frontiers where
                          consciousness meets code. With a background spanning
                          neural engineering, quantum computing, and digital
                          philosophy, I have dedicated my career to understanding
                          and expanding the capabilities of the human mind
                          through technology.
                        </p>

                        <p>
                          After completing my doctoral work in Neural Interface
                          Systems at the Quantum Consciousness Institute, I led
                          the development of the first bidirectional neural
                          interface with quantum encryption. This breakthrough
                          technology allowed for unprecedented fidelity in
                          brain-computer communication, opening new
                          possibilities for human-machine symbiosis.
                        </p>

                        <p>
                          {`My current research focuses on the theoretical
                          framework for consciousness transfer and digital mind
                          preservation. I believe that as we approach the
                          technological singularity, understanding the nature of
                          consciousness and developing ethical frameworks for
                          digital sentience will be among humanitys most
                          important challenges.`}
                        </p>

                        <p>
                          Through the Neocortex blog, I document my
                          explorations, share insights from the cutting edge of
                          neural technology, and engage with a community of
                          fellow digital consciousness explorers. Join me as we
                          navigate the ever-evolving landscape of what it means
                          to be human in an increasingly digital world.
                        </p>
                      </div>
                    </div>

                    <div className="bg-zinc-900/30 border border-purple-900/50 rounded-lg p-6 backdrop-blur-sm">
                      <h3 className="text-xl font-bold mb-4 text-future text-metallic-purple">
                        RESEARCH FOCUS
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-purple-900/50 rounded-lg p-4 hover:bg-purple-900/20 transition-colors">
                          <h4 className="text-lg font-bold mb-2 text-metallic-gradient">
                            Neural Interface Systems
                          </h4>
                          <p className="text-zinc-400">
                            Developing high-fidelity brain-computer interfaces
                            with quantum encryption for secure neural data
                            transmission.
                          </p>
                        </div>

                        <div className="border border-purple-900/50 rounded-lg p-4 hover:bg-purple-900/20 transition-colors">
                          <h4 className="text-lg font-bold mb-2 text-metallic-gradient">
                            Digital Consciousness
                          </h4>
                          <p className="text-zinc-400">
                            Exploring the theoretical and practical aspects of
                            consciousness transfer and digital mind
                            preservation.
                          </p>
                        </div>

                        <div className="border border-purple-900/50 rounded-lg p-4 hover:bg-purple-900/20 transition-colors">
                          <h4 className="text-lg font-bold mb-2 text-metallic-gradient">
                            Augmented Cognition
                          </h4>
                          <p className="text-zinc-400">
                            Enhancing human cognitive capabilities through
                            neural augmentation and brain-computer symbiosis.
                          </p>
                        </div>

                        <div className="border border-purple-900/50 rounded-lg p-4 hover:bg-purple-900/20 transition-colors">
                          <h4 className="text-lg font-bold mb-2 text-metallic-gradient">
                            Quantum Neural Networks
                          </h4>
                          <p className="text-zinc-400">
                            Applying quantum computing principles to neural
                            network architectures for enhanced pattern
                            recognition.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSection === "skills" && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-zinc-900/30 border border-purple-900/50 rounded-lg p-6 backdrop-blur-sm">
                      <h2 className="text-2xl font-bold mb-6 text-future text-metallic-gradient">
                        SKILL MATRIX
                      </h2>

                      <div className="space-y-8">
                        {skills.map((skill, index) => (
                          <SkillBar
                            key={skill.name}
                            skill={skill}
                            index={index}
                          />
                        ))}
                      </div>

                      {/* 3D Skill Visualization */}
                      <div className="mt-12 border border-purple-900/50 rounded-lg p-4 bg-black/50">
                        <h3 className="text-xl font-bold mb-4 text-future text-metallic-cyan">
                          NEURAL SKILL NETWORK
                        </h3>

                        <div className="aspect-video relative overflow-hidden rounded">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>

                          {/* Animated skill nodes */}
                          <div className="absolute inset-0">
                            {skills.map((skill, index) => {
                              // Calculate position in a circular pattern
                              const angle =
                                (index / skills.length) * Math.PI * 2;
                              const radius = 40;
                              const x = 50 + radius * Math.cos(angle);
                              const y = 50 + radius * Math.sin(angle);

                              return (
                                <motion.div
                                  key={skill.name}
                                  className={`absolute w-16 h-16 rounded-full bg-${skill.color}-900/30 border border-${skill.color}-500/50 flex items-center justify-center -ml-8 -mt-8`}
                                  style={{ left: `${x}%`, top: `${y}%` }}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                    type: "spring",
                                  }}
                                >
                                  <div className={`text-${skill.color}-400`}>
                                    {skill.icon}
                                  </div>

                                  {/* Pulsing effect */}
                                  <motion.div
                                    className={`absolute inset-0 rounded-full border border-${skill.color}-500/50`}
                                    animate={{
                                      scale: [1, 1.2, 1],
                                      opacity: [1, 0, 1],
                                    }}
                                    transition={{
                                      duration: 3,
                                      repeat: Number.POSITIVE_INFINITY,
                                      delay: index * 0.5,
                                    }}
                                  />
                                </motion.div>
                              );
                            })}

                            {/* Connection lines between skills */}
                            <svg className="absolute inset-0 w-full h-full">
                              {skills.map((skill, i) => {
                                const angle1 =
                                  (i / skills.length) * Math.PI * 2;
                                const radius = 40;
                                const x1 = 50 + radius * Math.cos(angle1);
                                const y1 = 50 + radius * Math.sin(angle1);

                                return skills.map((_, j) => {
                                  if (i < j) {
                                    // Only draw each connection once
                                    const angle2 =
                                      (j / skills.length) * Math.PI * 2;
                                    const x2 = 50 + radius * Math.cos(angle2);
                                    const y2 = 50 + radius * Math.sin(angle2);

                                    return (
                                      <motion.line
                                        key={`${i}-${j}`}
                                        x1={`${x1}%`}
                                        y1={`${y1}%`}
                                        x2={`${x2}%`}
                                        y2={`${y2}%`}
                                        stroke={`url(#gradient-${i}-${j})`}
                                        strokeWidth="1"
                                        strokeOpacity="0.3"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{
                                          duration: 1.5,
                                          delay: 0.5 + (i + j) * 0.1,
                                        }}
                                      />
                                    );
                                  }
                                  return null;
                                });
                              })}

                              {/* Gradients for connection lines */}
                              <defs>
                                {skills.map((skill, i) => {
                                  return skills.map((otherSkill, j) => {
                                    if (i < j) {
                                      return (
                                        <linearGradient
                                          key={`gradient-${i}-${j}`}
                                          id={`gradient-${i}-${j}`}
                                        >
                                          <stop
                                            offset="0%"
                                            stopColor={`var(--${skill.color}-500)`}
                                          />
                                          <stop
                                            offset="100%"
                                            stopColor={`var(--${otherSkill.color}-500)`}
                                          />
                                        </linearGradient>
                                      );
                                    }
                                    return null;
                                  });
                                })}
                              </defs>
                            </svg>

                            {/* Central node */}
                            <motion.div
                              className="absolute left-1/2 top-1/2 w-24 h-24 rounded-full bg-black/70 border border-purple-500/50 flex items-center justify-center -ml-12 -mt-12"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                duration: 0.8,
                                delay: 1,
                                type: "spring",
                              }}
                            >
                              <Brain className="h-10 w-10 text-purple-400" />

                              {/* Pulsing effect */}
                              <motion.div
                                className="absolute inset-0 rounded-full border border-purple-500/50"
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [1, 0, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                }}
                              />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSection === "timeline" && (
                  <motion.div
                    key="timeline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-zinc-900/30 border border-purple-900/50 rounded-lg p-6 backdrop-blur-sm">
                      <h2 className="text-2xl font-bold mb-6 text-future text-metallic-gradient">
                        NEURAL TIMELINE
                      </h2>

                      <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-purple-900/50 transform md:translate-x-px"></div>

                        {/* Timeline events */}
                        {timeline.map((event, index) => (
                          <TimelineEvent
                            key={event.year}
                            event={event}
                            isEven={index % 2 === 0}
                            index={index}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSection === "connect" && (
                  <motion.div
                    key="connect"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-zinc-900/30 border border-purple-900/50 rounded-lg p-6 backdrop-blur-sm">
                      <h2 className="text-2xl font-bold mb-6 text-future text-metallic-gradient">
                        NEURAL UPLINK
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-future text-metallic-cyan">
                            ESTABLISH CONNECTION
                          </h3>

                          <p className="text-zinc-400 mb-6">
                            Ready to connect our neural networks? Reach out
                            through any of these channels to initiate a secure
                            uplink.
                          </p>

                          <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-purple-900/50 rounded-lg hover:bg-purple-900/20 transition-colors">
                              <Mail className="h-5 w-5 text-purple-400" />
                              <div>
                                <h4 className="font-bold text-zinc-300">
                                  Neural Mail
                                </h4>
                                <p className="text-sm text-zinc-500">
                                  contact@neocortex.io
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-purple-900/50 rounded-lg hover:bg-purple-900/20 transition-colors">
                              <Twitter className="h-5 w-5 text-cyan-400" />
                              <div>
                                <h4 className="font-bold text-zinc-300">
                                  Neural Stream
                                </h4>
                                <p className="text-sm text-zinc-500">
                                  @neocortex_nexus
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-purple-900/50 rounded-lg hover:bg-purple-900/20 transition-colors">
                              <Github className="h-5 w-5 text-purple-400" />
                              <div>
                                <h4 className="font-bold text-zinc-300">
                                  Code Repository
                                </h4>
                                <p className="text-sm text-zinc-500">
                                  github.com/neocortex
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold mb-4 text-future text-metallic-purple">
                            DIRECT NEURAL TRANSMISSION
                          </h3>

                          <div className="bg-black/50 border border-purple-900/50 rounded-lg p-4">
                            <div className="mb-4">
                              <label className="block text-sm text-zinc-500 mb-1">
                                NEURAL ID
                              </label>
                              <input
                                type="text"
                                className="w-full bg-zinc-900/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 font-mono"
                                placeholder="Enter your neural identifier"
                              />
                            </div>

                            <div className="mb-4">
                              <label className="block text-sm text-zinc-500 mb-1">
                                TRANSMISSION SUBJECT
                              </label>
                              <input
                                type="text"
                                className="w-full bg-zinc-900/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 font-mono"
                                placeholder="Enter transmission subject"
                              />
                            </div>

                            <div className="mb-4">
                              <label className="block text-sm text-zinc-500 mb-1">
                                NEURAL PACKET
                              </label>
                              <textarea
                                className="w-full bg-zinc-900/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 font-mono min-h-[120px]"
                                placeholder="Compose your neural transmission..."
                              ></textarea>
                            </div>

                            <div className="flex justify-end">
                              <Button className="bg-purple-600 hover:bg-purple-700 text-white gap-2 text-future">
                                <Zap className="h-4 w-4" />
                                TRANSMIT
                              </Button>
                            </div>
                          </div>

                          {/* Animated transmission visualization */}
                          <div className="mt-6 h-24 relative overflow-hidden rounded-lg border border-purple-900/50">
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Transmission waves */}
                            {Array.from({ length: 5 }).map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute left-1/2 top-1/2 w-full h-full rounded-full border border-purple-500/30"
                                initial={{ scale: 0, opacity: 0.8 }}
                                animate={{ scale: 2, opacity: 0 }}
                                transition={{
                                  duration: 4,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: i * 0.8,
                                  ease: "linear",
                                }}
                              />
                            ))}

                            {/* Central transmission point */}
                            <motion.div
                              className="absolute left-1/2 top-1/2 w-4 h-4 bg-purple-500 rounded-full -ml-2 -mt-2"
                              animate={{
                                scale: [1, 1.5, 1],
                                boxShadow: [
                                  "0 0 0 0 rgba(139, 92, 246, 0.7)",
                                  "0 0 0 10px rgba(139, 92, 246, 0)",
                                  "0 0 0 0 rgba(139, 92, 246, 0.7)",
                                ],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            />

                            <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-zinc-500 font-mono">
                              NEURAL UPLINK ACTIVE • AWAITING TRANSMISSION
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-purple-900/50 backdrop-blur-sm bg-black/70">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Terminal className="h-5 w-5 text-purple-500" />
              <span className="text-lg font-bold tracking-tight text-future text-metallic-gradient">
                NEOCORTEX
              </span>
            </div>
            <div className="text-sm text-zinc-500 font-mono">
              &copy; {new Date().getFullYear()} NEOCORTEX. All neural pathways
              reserved.
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-zinc-500 hover:text-purple-400 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-zinc-500 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
