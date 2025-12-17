"use client"

import { motion } from "framer-motion"
import { getPortfolioData } from "@/lib/data"

export function About() {
  const data = getPortfolioData()

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>
          <div className="bg-card rounded-lg shadow-sm p-8 space-y-6">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-48 h-48 rounded-lg bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-6xl font-bold text-primary-foreground shadow-lg flex-shrink-0">
                {data.personal.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {data.personal.name}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {data.personal.title}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {data.personal.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

