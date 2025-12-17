import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Davron Rustamov - PR Manager Portfolio",
  description: "Professional portfolio of Davron Rustamov, PR Manager specializing in media relations, branding, and strategic communications.",
  keywords: ["PR Manager", "Public Relations", "Media Relations", "Branding", "Communications"],
  authors: [{ name: "Davron Rustamov" }],
  openGraph: {
    title: "Davron Rustamov - PR Manager Portfolio",
    description: "Professional portfolio of Davron Rustamov, PR Manager",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

