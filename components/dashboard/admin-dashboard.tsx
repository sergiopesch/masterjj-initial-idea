'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { UserManagement } from '@/components/admin/user-management'
import { Users, Award, Calendar, TrendingUp } from 'lucide-react'

interface DashboardStat {
  title: string
  value: number
  icon: React.ElementType
  description: string
}

export function AdminDashboard() {
  const stats: DashboardStat[] = [
    { title: 'Total Users', value: 3, icon: Users, description: 'Demo users in the system' },
    { title: 'Instructors', value: 1, icon: Award, description: 'Active instructors' },
    { title: 'Classes', value: 6, icon: Calendar, description: 'Total classes scheduled' },
    { title: 'Growth', value: 2, icon: TrendingUp, description: 'New users this month' },
  ]

  return (
    <div className="space-y-8 p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
        </CardHeader>
        <CardContent>
          <UserManagement />
        </CardContent>
      </Card>
    </div>
  )
}
