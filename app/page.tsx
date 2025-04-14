"use client";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Zap,
  Terminal,
  Cpu,
  Wifi,
  ChevronRight,
  Github,
  Twitter,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { StaggeredList, StaggeredItem } from "@/components/staggered-list";
import { ParallaxSection } from "@/components/parallax-section";
import { InteractiveHeading } from "@/components/interactive-heading";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col pt-0">
      {/* Glitch overlay effect */}
      <div className="fixed inset-0   opacity-5 pointer-events-none"></div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-none ${
          scrolled
            ? "backdrop-blur-sm bg-black/70"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Terminal className="h-6 w-6 text-purple-500" />
              <h1 className="text-2xl font-bold tracking-tight text-future text-metallic-gradient">
                NEOCORTEX
              </h1>
            </div>
            <nav className="flex items-center gap-6">
              <Link
                href="#"
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
                href="/about"
                className="text-sm hover:text-cyan-400 transition-colors text-future"
              >
                ABOUT
              </Link>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-500/20 hover:text-purple-300 text-future"
              >
                CONNECT
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image - Full Viewport Height */}
      <section className="relative hero-image min-h-screen flex items-center overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cyberpunk-urban-scenery.jpg"
            alt="Cyberpunk cityscape"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 hero-content mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection delay={0.1}>
              <Badge className="mb-4 bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border-purple-500/50 text-future">
                NEURAL INTERFACE v3.7
              </Badge>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <InteractiveHeading className="mb-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-future text-metallic-gradient">
                  Thoughts from the Digital Frontier
                </h1>
              </InteractiveHeading>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="text-lg text-zinc-200 mb-8 leading-relaxed font-body">
                Exploring the intersection of technology, consciousness, and the
                future of humanity in a world where the lines between reality
                and digital existence blur.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white text-future">
                  READ LATEST
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 text-future"
                >
                  SUBSCRIBE
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => scrollToSection("featured-posts")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="text-zinc-400 text-sm mb-2 text-future">
              SCROLL DOWN
            </span>
            <div className="w-8 h-12 rounded-full border-2 border-purple-500/50 flex justify-center p-1">
              <motion.div
                className="w-1 h-3 bg-purple-500 rounded-full"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts - Bento Box Layout */}
      <section id="featured-posts" className="py-16 relative">
        <ParallaxSection
          speed={0.2}
          direction="up"
          className="absolute inset-0 z-0"
        >
          <div className="bg-gradient-to-b from-black/80 to-black h-full w-full"></div>
        </ParallaxSection>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2 text-future text-metallic-purple">
              <Zap className="h-5 w-5 text-purple-500" />
              <span>FEATURED POSTS</span>
            </h2>
            <Link
              href="/blog"
              className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-future"
            >
              VIEW ALL <ChevronRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6">
            {/* Featured post - Large */}
            <StaggeredList
              className="col-span-1 md:col-span-6 lg:col-span-8 row-span-2"
              delay={0.1}
              staggerDelay={0.15}
            >
              <StaggeredItem>
                <Link href="/blog/neural-revolution" className="block h-full">
                  <div className="relative h-full group">
                    <Card className="bg-zinc-900/50 border-purple-900/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full z-10 relative">
                      <div className="relative h-48 md:h-[612px] overflow-hidden">
                        <Image
                          src="/neural-cityscape.png"
                          alt="The Neural Revolution"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                        <Badge className="absolute top-3 right-3 bg-purple-500/80 hover:bg-purple-500 text-white text-future">
                          FEATURED
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="text-xs text-zinc-500 mb-1 flex items-center gap-2 font-mono">
                          <Cpu className="h-3 w-3" />
                          04.13.2025
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors text-future text-metallic-purple">
                          The Neural Revolution
                        </h3>
                      </CardHeader>
                      <CardContent className="text-sm text-zinc-400">
                        <p className="line-clamp-3 md:line-clamp-4">
                          How brain-computer interfaces are reshaping human
                          cognition and our relationship with technology. As we
                          delve deeper into the integration of neural networks
                          with biological systems, we are witnessing the birth of
                          a new era of human-machine symbiosis.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="link"
                          className="px-0 text-purple-400 hover:text-purple-300 text-future"
                        >
                          READ MORE <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                    <motion.div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <motion.rect
                          x="0"
                          y="0"
                          width="100"
                          height="100"
                          stroke="url(#laser-gradient)"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                        <defs>
                          <linearGradient
                            id="laser-gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#7928CA"
                              stopOpacity="0"
                            />
                            <stop
                              offset="50%"
                              stopColor="#FF0080"
                              stopOpacity="1"
                            />
                            <stop
                              offset="100%"
                              stopColor="#0070F3"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  </div>
                </Link>
              </StaggeredItem>
            </StaggeredList>

            {/* Medium post 1 */}
            <StaggeredList
              className="col-span-1 md:col-span-3 lg:col-span-4"
              delay={0.2}
              staggerDelay={0.15}
            >
              <StaggeredItem>
                <Link
                  href="/blog/neural-revolution"
                  className="block h-full"
                >
                  <div className="relative h-full group">
                    <Card className="bg-zinc-900/50 border-purple-900/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full z-10 relative">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src="/neon-ghost.png"
                          alt="Digital Consciousness"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                        <Badge className="absolute top-3 right-3 bg-cyan-500/80 hover:bg-cyan-500 text-white text-future">
                          PHILOSOPHY
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="text-xs text-zinc-500 mb-1 flex items-center gap-2 font-mono">
                          <Cpu className="h-3 w-3" />
                          04.07.2025
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors text-future text-metallic-cyan">
                          Digital Consciousness
                        </h3>
                      </CardHeader>
                      <CardContent className="text-sm text-zinc-400">
                        <p className="line-clamp-2">
                          Exploring the philosophical implications of uploaded
                          minds and artificial consciousness.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="link"
                          className="px-0 text-purple-400 hover:text-purple-300 text-future"
                        >
                          READ MORE <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                    <motion.div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <motion.rect
                          x="0"
                          y="0"
                          width="100"
                          height="100"
                          stroke="url(#laser-gradient-cyan)"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                        <defs>
                          <linearGradient
                            id="laser-gradient-cyan"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#0070F3"
                              stopOpacity="0"
                            />
                            <stop
                              offset="50%"
                              stopColor="#00FFFF"
                              stopOpacity="1"
                            />
                            <stop
                              offset="100%"
                              stopColor="#0070F3"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  </div>
                </Link>
              </StaggeredItem>
            </StaggeredList>

            {/* Medium post 2 */}
            <StaggeredList
              className="col-span-1 md:col-span-3 lg:col-span-4"
              delay={0.3}
              staggerDelay={0.15}
            >
              <StaggeredItem>
                <Link href="/blog/neural-revolution" className="block h-full">
                  <div className="relative h-full group">
                    <Card className="bg-zinc-900/50 border-purple-900/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full z-10 relative">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src="/neon-grid-breach.png"
                          alt="Hacking Reality"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                        <Badge className="absolute top-3 right-3 bg-green-500/80 hover:bg-green-500 text-white text-future">
                          CULTURE
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="text-xs text-zinc-500 mb-1 flex items-center gap-2 font-mono">
                          <Cpu className="h-3 w-3" />
                          03.29.2025
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors text-future text-metallic-purple">
                          Hacking Reality
                        </h3>
                      </CardHeader>
                      <CardContent className="text-sm text-zinc-400">
                        <p className="line-clamp-2">
                          The thin line between perception and reality in an age
                          of advanced augmented reality systems.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="link"
                          className="px-0 text-purple-400 hover:text-purple-300 text-future"
                        >
                          READ MORE <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                    <motion.div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <motion.rect
                          x="0"
                          y="0"
                          width="100"
                          height="100"
                          stroke="url(#laser-gradient-green)"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                        <defs>
                          <linearGradient
                            id="laser-gradient-green"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#0070F3"
                              stopOpacity="0"
                            />
                            <stop
                              offset="50%"
                              stopColor="#10B981"
                              stopOpacity="1"
                            />
                            <stop
                              offset="100%"
                              stopColor="#0070F3"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  </div>
                </Link>
              </StaggeredItem>
            </StaggeredList>

            {/* Small post 1 */}
            <StaggeredList
              className="col-span-1 md:col-span-2 lg:col-span-3"
              delay={0.4}
              staggerDelay={0.15}
            >
              <StaggeredItem>
                <Link href="/blog/neural-revolution" className="block h-full">
                  <div className="relative h-full group">
                    <Card className="bg-zinc-900/50 border-purple-900/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full z-10 relative">
                      <div className="relative h-36 overflow-hidden">
                        <Image
                          src="/neon-quantum-scape.png"
                          alt="Quantum Encryption"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                        <Badge className="absolute top-3 right-3 bg-yellow-500/80 hover:bg-yellow-500 text-white text-future">
                          SECURITY
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors text-future text-metallic-cyan">
                          Quantum Encryption
                        </h3>
                      </CardHeader>
                      <CardContent className="text-xs text-zinc-400">
                        <p className="line-clamp-1">
                          Post-quantum security protocols for the digital age.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="link"
                          className="px-0 text-purple-400 hover:text-purple-300 text-sm text-future"
                        >
                          READ <ChevronRight className="h-3 w-3 ml-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                    <motion.div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <motion.rect
                          x="0"
                          y="0"
                          width="100"
                          height="100"
                          stroke="url(#laser-gradient-yellow)"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                        <defs>
                          <linearGradient
                            id="laser-gradient-yellow"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#0070F3"
                              stopOpacity="0"
                            />
                            <stop
                              offset="50%"
                              stopColor="#EAB308"
                              stopOpacity="1"
                            />
                            <stop
                              offset="100%"
                              stopColor="#0070F3"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  </div>
                </Link>
              </StaggeredItem>
            </StaggeredList>

            {/* Small post 2 */}
            <StaggeredList
              className="col-span-1 md:col-span-2 lg:col-span-3"
              delay={0.5}
              staggerDelay={0.15}
            >
              <StaggeredItem>
                <Link href="/blog/neural-revolution" className="block h-full">
                  <div className="relative h-full group">
                    <Card className="bg-zinc-900/50 border-purple-900/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full z-10 relative">
                      <div className="relative h-36 overflow-hidden">
                        <Image
                          src="/neon-augmented.png"
                          alt="Biotech Implants"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                        <Badge className="absolute top-3 right-3 bg-red-500/80 hover:bg-red-500 text-white text-future">
                          BIOTECH
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors text-future text-metallic-purple">
                          Biotech Implants
                        </h3>
                      </CardHeader>
                      <CardContent className="text-xs text-zinc-400">
                        <p className="line-clamp-1">
                          The evolution of human enhancement technologies.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="link"
                          className="px-0 text-purple-400 hover:text-purple-300 text-sm text-future"
                        >
                          READ <ChevronRight className="h-3 w-3 ml-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                    <motion.div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <motion.rect
                          x="0"
                          y="0"
                          width="100"
                          height="100"
                          stroke="url(#laser-gradient-red)"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                        <defs>
                          <linearGradient
                            id="laser-gradient-red"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#0070F3"
                              stopOpacity="0"
                            />
                            <stop
                              offset="50%"
                              stopColor="#EF4444"
                              stopOpacity="1"
                            />
                            <stop
                              offset="100%"
                              stopColor="#0070F3"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  </div>
                </Link>
              </StaggeredItem>
            </StaggeredList>

            {/* Small post 3 */}
            <StaggeredList
              className="col-span-1 md:col-span-2 lg:col-span-3"
              delay={0.6}
              staggerDelay={0.15}
            >
              <StaggeredItem>
                <Link href="/blog/neural-revolution" className="block h-full">
                  <div className="relative h-full group">
                    <Card className="bg-zinc-900/50 border-purple-900/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full z-10 relative">
                      <div className="relative h-36 overflow-hidden">
                        <Image
                          src="/neon-cityscape-vr.png"
                          alt="VR Interfaces"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                        <Badge className="absolute top-3 right-3 bg-blue-500/80 hover:bg-blue-500 text-white text-future">
                          INTERFACE
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors text-future text-metallic-cyan">
                          VR Interfaces
                        </h3>
                      </CardHeader>
                      <CardContent className="text-xs text-zinc-400">
                        <p className="line-clamp-1">
                          Next-gen neural interfaces for immersive experiences.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="link"
                          className="px-0 text-purple-400 hover:text-purple-300 text-sm text-future"
                        >
                          READ <ChevronRight className="h-3 w-3 ml-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                    <motion.div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <motion.rect
                          x="0"
                          y="0"
                          width="100"
                          height="100"
                          stroke="url(#laser-gradient-blue)"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                        <defs>
                          <linearGradient
                            id="laser-gradient-blue"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#0070F3"
                              stopOpacity="0"
                            />
                            <stop
                              offset="50%"
                              stopColor="#3B82F6"
                              stopOpacity="1"
                            />
                            <stop
                              offset="100%"
                              stopColor="#0070F3"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  </div>
                </Link>
              </StaggeredItem>
            </StaggeredList>

            {/* Small post 4 - Wide */}
            <StaggeredList
              className="col-span-1 md:col-span-2 lg:col-span-3"
              delay={0.7}
              staggerDelay={0.15}
            >
              <StaggeredItem>
                <Link href="/blog/neural-revolution" className="block h-full">
                  <div className="relative h-full group">
                    <Card className="bg-zinc-900/50 border-purple-900/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full z-10 relative">
                      <div className="relative h-36 overflow-hidden">
                        <Image
                          src="/neon-cityscape.png"
                          alt="AI Art Revolution"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                        <Badge className="absolute top-3 right-3 bg-purple-500/80 hover:bg-purple-500 text-white text-future">
                          CREATIVITY
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors text-future text-metallic-gradient">
                          AI Art Revolution
                        </h3>
                      </CardHeader>
                      <CardContent className="text-xs text-zinc-400">
                        <p className="line-clamp-1">
                          How artificial intelligence is redefining creative
                          expression.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="link"
                          className="px-0 text-purple-400 hover:text-purple-300 text-sm text-future"
                        >
                          READ <ChevronRight className="h-3 w-3 ml-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                    <motion.div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <motion.rect
                          x="0"
                          y="0"
                          width="100"
                          height="100"
                          stroke="url(#laser-gradient-purple)"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                        <defs>
                          <linearGradient
                            id="laser-gradient-purple"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#0070F3"
                              stopOpacity="0"
                            />
                            <stop
                              offset="50%"
                              stopColor="#8B5CF6"
                              stopOpacity="1"
                            />
                            <stop
                              offset="100%"
                              stopColor="#0070F3"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  </div>
                </Link>
              </StaggeredItem>
            </StaggeredList>
          </div>
        </div>
      </section>

      {/* Divider with cyberpunk styling */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-8">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full glow-sm"></div>
      </div>   

      {/* About Section */}
      <section className="py-16 relative">
        {/* Gradient background with fading edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-900/30 to-black"></div>

        {/* Vertical fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

        {/* <ParallaxSection
          speed={0.3}
          direction="down"
          className="absolute inset-0"
        >
          <div className="bg-[url('/neon-circuit-city.png')] bg-cover bg-center opacity-10 h-full w-full"></div>
        </ParallaxSection> */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-xl opacity-70"></div>
                <div className="relative aspect-square rounded-lg overflow-hidden border border-purple-500/30">
                  <Image
                    src="/neon-cityscape-portrait.png"
                    alt="Author"
                    fill
                    className="object-cover"
                  />

                  {/* Add scan effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"
                    initial={{ y: -500 }}
                    animate={{ y: 500 }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      ease: "linear",
                    }}
                  />
                </div>
              </div>
            </AnimatedSection>
            <div>
              <AnimatedSection direction="right" delay={0.2}>
                <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 border-cyan-500/50 text-future">
                  ABOUT THE AUTHOR
                </Badge>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.3}>
                <h2 className="text-3xl font-bold mb-6 tracking-tight text-future text-metallic-gradient">
                  Neural Interface Engineer & Digital Philosopher
                </h2>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.4}>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  I explore the boundaries between human and machine, reality
                  and simulation. With a background in neural engineering and
                  digital philosophy, I document my journey through the
                  ever-evolving technological landscape.
                </p>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.5}>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  This blog serves as my digital journal—a collection of
                  thoughts, discoveries, and speculations about our collective
                  future in an increasingly connected world.
                </p>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.6}>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 gap-2 text-future"
                  >
                    <Github className="h-4 w-4" /> GITHUB
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 gap-2 text-future"
                  >
                    <Twitter className="h-4 w-4" /> TWITTER
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>


      {/* Divider with cyberpunk styling */}
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-8">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full glow-sm"></div>
        </div>   
               
      {/* Footer */}
      <footer className="mt-auto backdrop-blur-sm bg-gradient-to-b from-black/90 to-purple-950/20">

        {/* Newsletter */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection delay={0.1}>
              <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-8 border border-purple-500/20 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      duration: 15,
                      ease: "linear",
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <Wifi className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-future text-metallic-gradient">
                    NEURAL UPLINK SUBSCRIPTION
                  </h3>
                  <p className="text-zinc-400 text-center mb-6">
                    Subscribe to receive the latest posts directly to your neural
                    interface. No spam, just pure digital insights.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="ENTER YOUR EMAIL"
                      className="flex-1 bg-black/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 font-mono"
                    />
                    <Button className="bg-cyan-600 hover:bg-cyan-700 text-white text-future">
                      SUBSCRIBE
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Top section with logo and quick links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo and about */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-6 w-6 text-purple-500" />
                <span className="text-xl font-bold tracking-tight text-future text-metallic-gradient">NEOCORTEX</span>
              </div>
              <p className="text-sm text-zinc-400 mt-2">
                Exploring the digital frontier where technology and consciousness converge. Join us on this neural
                journey.
              </p>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="text-zinc-500 hover:text-purple-400 transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-zinc-500 hover:text-cyan-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-zinc-500 hover:text-pink-400 transition-colors">
                  <Wifi className="h-5 w-5" />
                  <span className="sr-only">RSS</span>
                </Link>
                <Link href="#" className="text-zinc-500 hover:text-green-400 transition-colors">
                  <Cpu className="h-5 w-5" />
                  <span className="sr-only">Discord</span>
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4 text-future">
                Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4 text-future">
                Categories
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-purple-400 text-sm transition-colors">
                    Neural Interfaces
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-green-400 text-sm transition-colors">
                    Digital Culture
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                    Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-yellow-400 text-sm transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-red-400 text-sm transition-colors">
                    Biotech
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4 text-future">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider with cyberpunk styling */}
          <div className="relative h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-8">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full glow-sm"></div>
          </div>

          {/* Bottom section with copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-4">
            <div className="text-sm text-zinc-500 font-mono mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} NEOCORTEX. All neural pathways reserved.
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500">Made with</span>
              <span className="text-purple-500">❮❯</span>
              <span className="text-xs text-zinc-500">in the digital realm</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
