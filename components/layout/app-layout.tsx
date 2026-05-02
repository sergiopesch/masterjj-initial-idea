'use client'

import { AdminDashboard } from '@/components/dashboard/admin-dashboard'
import { InstructorDashboard } from '@/components/dashboard/instructor-dashboard'
import { StudentDashboard } from '@/components/dashboard/student-dashboard'
import { RoleBasedNav } from '@/components/layout/role-based-nav'
import { useAuth } from '@/providers/auth-provider'

interface AppLayoutProps {
  requireAuth?: boolean
  children?: React.ReactNode
}

export function AppLayout({ requireAuth = false, children }: AppLayoutProps) {
  const { profile, isLoading } = useAuth()

  if (!requireAuth) {
    return <>{children}</>
  }

  if (isLoading || !profile) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-foreground" />
      </div>
    )
  }

  return (
    <div className="flex h-screen">
      <RoleBasedNav />
      <main className="flex-1 overflow-auto">
        <div className="p-4">
          <h1 className="mb-8 text-2xl font-bold">
            Welcome back, {profile.firstname}!
          </h1>
          {children || (
            <>
              {profile.role === 'admin' && <AdminDashboard />}
              {profile.role === 'instructor' && <InstructorDashboard />}
              {profile.role === 'student' && <StudentDashboard />}
            </>
          )}
        </div>
      </main>
    </div>
  )
}
