import type React from "react"
import "./globals.css"
import { ScrollProgress } from "@/components/scroll-progress"

export const metadata = {
  title: "NEOCORTEX | Digital Frontier Blog",
  description: "Exploring the intersection of technology, consciousness, and the future of humanity",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
