'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import type { UpdateUserProfile, UserProfile } from '@/lib/types/database'

interface DemoUser {
  id: string
  email: string
  name: string
}

interface AuthState {
  user: DemoUser | null
  profile: UserProfile | null
  isLoading: boolean
}

interface AuthContextType extends AuthState {
  signOut: () => Promise<void>
  refreshProfile: () => Promise<void>
  updateProfile: (data: Partial<UpdateUserProfile>) => Promise<void>
}

const STORAGE_KEY = 'masterjj_demo_profile'

const demoProfile: UserProfile = {
  id: 'demo-user',
  firstname: 'Sergio',
  lastname: 'Practitioner',
  email: 'demo@masterjj.app',
  phone: '+10000000000',
  role: 'student',
  created_at: new Date(2026, 0, 1).toISOString(),
  last_sign_in_at: new Date().toISOString(),
  is_anonymous: false,
  auth_provider: 'demo',
}

const demoUser: DemoUser = {
  id: demoProfile.id,
  email: demoProfile.email ?? 'demo@masterjj.app',
  name: `${demoProfile.firstname} ${demoProfile.lastname}`,
}

function readProfile(): UserProfile {
  if (typeof window === 'undefined') return demoProfile

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (!stored) return demoProfile

  try {
    return { ...demoProfile, ...JSON.parse(stored) }
  } catch {
    return demoProfile
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [state, setState] = useState<AuthState>({
    user: null,
    profile: null,
    isLoading: true,
  })

  const refreshProfile = async () => {
    const profile = readProfile()
    setState({
      user: {
        id: profile.id,
        email: profile.email ?? demoUser.email,
        name: `${profile.firstname ?? ''} ${profile.lastname ?? ''}`.trim(),
      },
      profile,
      isLoading: false,
    })
  }

  const updateProfile = async (data: Partial<UpdateUserProfile>) => {
    const nextProfile = {
      ...(state.profile ?? demoProfile),
      ...data,
      last_sign_in_at: new Date().toISOString(),
    }

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProfile))
    }

    setState({
      user: {
        id: nextProfile.id,
        email: nextProfile.email ?? demoUser.email,
        name: `${nextProfile.firstname ?? ''} ${nextProfile.lastname ?? ''}`.trim(),
      },
      profile: nextProfile,
      isLoading: false,
    })

    toast.success('Profile updated')
  }

  const signOut = async () => {
    setState({ user: null, profile: null, isLoading: false })
    router.push('/')
  }

  useEffect(() => {
    refreshProfile()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signOut,
        refreshProfile,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
