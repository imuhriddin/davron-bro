import { getPortfolioData } from "@/lib/data"

export function Footer() {
  const data = getPortfolioData()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {data.personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href={`mailto:${data.contact.email}`}
              className="hover:text-primary transition-colors"
            >
              {data.contact.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

