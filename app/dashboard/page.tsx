'use client'

import { useAuth } from "@/providers/auth-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, GraduationCap, Trophy, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardPage() {
  const { profile, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // If not loading and no profile, redirect to sign in
    if (!isLoading && !profile) {
      router.push('/auth/sign-in')
    }
  }, [isLoading, profile, router])

  // Don't render anything while loading or if no profile
  if (isLoading || !profile) {
    return null
  }

  const stats = [
    {
      title: "Next Session",
      value: "3",
      description: "This week",
      icon: Calendar,
    },
    {
      title: "Current Focus",
      value: "Mount",
      description: "Base and pressure",
      icon: GraduationCap,
    },
    {
      title: "Corrections",
      value: "5",
      description: "To revisit",
      icon: Trophy,
    },
    {
      title: profile.role === 'instructor' ? "Practitioners" : "Training Partners",
      value: "12",
      description: "In your circle",
      icon: Users,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flow-panel overflow-hidden p-6 md:p-8">
        <p className="mb-3 text-xs font-semibold uppercase text-primary">
          Today&apos;s rhythm
        </p>
        <h1 className="text-3xl font-bold">
          Welcome back, {profile.firstname}.
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Set the intention, review the last lesson, and keep the path simple.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={stat.title} className={index % 2 === 1 ? "lg:mt-5" : ""}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
