"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { useActiveSection } from "@/lib/hooks"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Education", href: "/#education", id: "education" },
  { name: "Experience", href: "/#experience", id: "experience" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Languages", href: "/#languages", id: "languages" },
  { name: "Contact", href: "/#contact", id: "contact" },
]

export function Header() {
  const pathname = usePathname()
  const activeSection = useActiveSection()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      const id = href.replace("/#", "")
      const element = document.getElementById(id)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            DR
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative",
                    activeSection === item.id && "text-primary"
                  )}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

