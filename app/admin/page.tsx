"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PortfolioData } from "@/lib/types"
import { Save, Lock } from "lucide-react"

const ADMIN_PASSWORD = "admin123" // In production, use environment variables

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [data, setData] = useState<PortfolioData | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      fetchData()
    }
  }, [isAuthenticated])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/portfolio")
      if (response.ok) {
        const portfolioData = await response.json()
        setData(portfolioData)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setPassword("")
    } else {
      alert("Incorrect password")
    }
  }

  const handleSave = async () => {
    if (!data) return
    setIsSaving(true)
    try {
      const response = await fetch("/api/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        alert("Data saved successfully!")
        // Reload the page to reflect changes
        window.location.reload()
      } else {
        throw new Error("Failed to save data")
      }
    } catch (error) {
      alert("Error saving data. Please check the console.")
      console.error(error)
    } finally {
      setIsSaving(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Admin Access
            </CardTitle>
            <CardDescription>
              Enter password to access the admin panel
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (isLoading || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 py-20">
      <div className="container mx-auto max-w-6xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <p className="text-muted-foreground">
              Manage your portfolio content
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => router.push("/")}>
              View Site
            </Button>
            <Button onClick={handleSave} disabled={isSaving}>
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>

        {/* Personal Info */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={data.personal.name}
                onChange={(e) =>
                  setData({
                    ...data,
                    personal: { ...data.personal, name: e.target.value },
                  })
                }
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={data.personal.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    personal: { ...data.personal, title: e.target.value },
                  })
                }
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>
              <textarea
                value={data.personal.bio}
                onChange={(e) =>
                  setData({
                    ...data,
                    personal: { ...data.personal, bio: e.target.value },
                  })
                }
                rows={3}
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                value={data.personal.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    personal: {
                      ...data.personal,
                      description: e.target.value,
                    },
                  })
                }
                rows={5}
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={data.contact.email}
                onChange={(e) =>
                  setData({
                    ...data,
                    contact: { ...data.contact, email: e.target.value },
                  })
                }
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="text"
                value={data.contact.phone}
                onChange={(e) =>
                  setData({
                    ...data,
                    contact: { ...data.contact, phone: e.target.value },
                  })
                }
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <input
                type="text"
                value={data.contact.address}
                onChange={(e) =>
                  setData({
                    ...data,
                    contact: { ...data.contact, address: e.target.value },
                  })
                }
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
              />
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {data.skills.map((skill, index) => (
              <div key={skill.id} className="flex gap-4 items-center">
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => {
                    const newSkills = [...data.skills]
                    newSkills[index] = { ...skill, name: e.target.value }
                    setData({ ...data, skills: newSkills })
                  }}
                  className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                />
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={skill.level}
                  onChange={(e) => {
                    const newSkills = [...data.skills]
                    newSkills[index] = {
                      ...skill,
                      level: parseInt(e.target.value) || 0,
                    }
                    setData({ ...data, skills: newSkills })
                  }}
                  className="w-24 px-4 py-2 rounded-md border border-input bg-background"
                />
                <span className="text-sm text-muted-foreground">%</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Languages */}
        <Card>
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {data.languages.map((lang, index) => (
              <div key={lang.id} className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  value={lang.name}
                  onChange={(e) => {
                    const newLangs = [...data.languages]
                    newLangs[index] = { ...lang, name: e.target.value }
                    setData({ ...data, languages: newLangs })
                  }}
                  placeholder="Language"
                  className="px-4 py-2 rounded-md border border-input bg-background"
                />
                <input
                  type="text"
                  value={lang.level}
                  onChange={(e) => {
                    const newLangs = [...data.languages]
                    newLangs[index] = { ...lang, level: e.target.value }
                    setData({ ...data, languages: newLangs })
                  }}
                  placeholder="Level (e.g., IELTS 5.5)"
                  className="px-4 py-2 rounded-md border border-input bg-background"
                />
                <input
                  type="text"
                  value={lang.proficiency}
                  onChange={(e) => {
                    const newLangs = [...data.languages]
                    newLangs[index] = { ...lang, proficiency: e.target.value }
                    setData({ ...data, languages: newLangs })
                  }}
                  placeholder="Proficiency"
                  className="px-4 py-2 rounded-md border border-input bg-background"
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

