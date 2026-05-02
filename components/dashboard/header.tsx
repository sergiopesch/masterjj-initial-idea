"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { getUser } from "@/lib/auth"
import { useAuth } from "@/providers/auth-provider"

export function DashboardHeader() {
  const { theme, setTheme } = useTheme()
  const { profile } = useAuth()

  const getRoleDisplay = () => {
    if (!profile) return ""
    switch (profile.role) {
      case "instructor":
        return "Instructor"
      case "admin":
        return "Admin"
      default:
        return "Student"
    }
  }

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/82 backdrop-blur-xl">
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="flex-1">
          <h2 className="text-lg font-semibold">
            Welcome back, {profile?.firstname} {profile?.lastname}
          </h2>
          <p className="text-sm text-muted-foreground">
            {getRoleDisplay()}
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-md"
        >
          {theme === "dark" ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}
