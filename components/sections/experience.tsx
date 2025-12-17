"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getPortfolioData } from "@/lib/data"

export function Experience() {
  const data = getPortfolioData()

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-8">
            {data.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle>{exp.position}</CardTitle>
                        <CardDescription className="text-lg mt-1">
                          {exp.company}
                        </CardDescription>
                        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{exp.description}</p>
                    {exp.practices && exp.practices.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Professional Practices:</h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          {exp.practices.map((practice) => (
                            <div
                              key={practice.id}
                              className="p-4 rounded-lg border bg-muted/50"
                            >
                              <h5 className="font-semibold mb-1">{practice.organization}</h5>
                              <p className="text-sm text-muted-foreground mb-2">{practice.period}</p>
                              <p className="text-sm">{practice.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

