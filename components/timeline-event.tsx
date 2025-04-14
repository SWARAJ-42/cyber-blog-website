import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

type TimelineEventProps = {
  event: {
    year: string
    title: string
    description: string
    image?: string
  }
  isEven: boolean
  index: number
}

export function TimelineEvent({ event, isEven, index }: TimelineEventProps) {
  const timelineRef = useRef<HTMLDivElement>(null)
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
      { threshold: 0.3 }
    )

    if (timelineRef.current) observer.observe(timelineRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      key={index}
      ref={timelineRef}
      className={`relative flex mb-12 md:mb-24 px-4 ${isEven ? "md:ml-auto" : ""} md:w-1/2`}
    >
      <motion.div
        className={`relative ml-10 md:ml-0 ${isEven ? "md:mr-10 text-right" : "md:ml-10"}`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : isEven ? 50 : -50 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div
          className={`bg-zinc-900/50 border border-purple-900/50 rounded-lg overflow-hidden ${
            isEven ? "md:rounded-tr-none" : "md:rounded-tl-none"
          }`}
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <Badge className="mb-2 bg-purple-500/20 text-purple-400 border-purple-500/50 text-future">
                {event.year}
              </Badge>
              <h3 className="text-lg font-bold text-white">{event.title}</h3>
            </div>
          </div>

          <div className="p-4">
            <p className="text-zinc-400">{event.description}</p>
          </div>
        </div>

        {/* Timeline connector */}
        <div
          className={`absolute top-6 ${
            isEven
              ? "md:left-0 md:right-auto md:border-l-0 md:border-r md:rounded-r-lg"
              : "left-0 md:left-auto md:right-0 md:border-l md:border-r-0 md:rounded-l-lg"
          } w-10 h-0.5 bg-purple-500/50 border-t border-purple-500/50`}
        ></div>
      </motion.div>
    </div>
  )
}
