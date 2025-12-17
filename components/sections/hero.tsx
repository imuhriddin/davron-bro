"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getPortfolioData } from "@/lib/data"
import Link from "next/link"

export function Hero() {
  const data = getPortfolioData()

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-4xl md:text-5xl font-bold text-primary-foreground shadow-lg">
              {data.personal.name.split(" ").map((n) => n[0]).join("")}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              {data.personal.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {data.personal.title}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {data.personal.bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/#contact">
              <Button size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </Link>
            <Link href="/#experience">
              <Button variant="outline" size="lg">
                View Experience
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm">Scroll</span>
              <ArrowDown className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


