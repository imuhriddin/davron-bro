"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getPortfolioData } from "@/lib/data"

export function Languages() {
  const data = getPortfolioData()

  const getProficiencyColor = (proficiency: string) => {
    if (proficiency === "Native") return "bg-green-500"
    if (proficiency === "Intermediate") return "bg-blue-500"
    return "bg-yellow-500"
  }

  return (
    <section id="languages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Languages
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {data.languages.map((lang, index) => (
              <motion.div
                key={lang.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle>{lang.name}</CardTitle>
                        <CardDescription>{lang.level}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Proficiency:</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getProficiencyColor(lang.proficiency)}`}>
                        {lang.proficiency}
                      </span>
                    </div>
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


