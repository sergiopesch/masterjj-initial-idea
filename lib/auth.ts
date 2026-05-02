import type { UpdateUserProfile, UserProfile } from './types/database'

interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'instructor' | 'practitioner'
}

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

const users = {
  admin: {
    id: '1',
    email: 'admin@example.com',
    password: 'password',
    name: 'Admin User',
    role: 'admin',
  },
  instructor: {
    id: '2',
    email: 'instructor@example.com',
    password: 'password',
    name: 'Instructor User',
    role: 'instructor',
  },
  user: {
    id: '3',
    email: 'user@example.com',
    password: 'password',
    name: 'Regular User',
    role: 'practitioner',
  },
} as const

export async function authenticate(
  email: string,
  password: string
): Promise<User | null> {
  const user = Object.values(users).find(
    (candidate) => candidate.email === email && candidate.password === password
  )

  if (!user) return null

  const userWithoutPassword: User = {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  }
  return userWithoutPassword
}

export async function getUserProfile(): Promise<UserProfile> {
  return demoProfile
}

export async function updateUserProfile(
  updates: UpdateUserProfile
): Promise<UserProfile> {
  return {
    ...demoProfile,
    ...updates,
    last_sign_in_at: new Date().toISOString(),
  }
}

export async function checkUserRole(allowedRoles: string[]) {
  return allowedRoles.includes(demoProfile.role)
}

export async function isAdmin() {
  return checkUserRole(['admin'])
}

export async function isInstructor() {
  return checkUserRole(['admin', 'instructor'])
}

export function getRoleBasedRedirect(role: string) {
  switch (role) {
    case 'admin':
      return '/admin/dashboard'
    case 'instructor':
      return '/instructor/dashboard'
    default:
      return '/dashboard'
  }
}

export async function signOut() {
  removeUser()
  return { error: null }
}

export function getUser(): User | null {
  if (typeof window === 'undefined') return null
  const userStr = localStorage.getItem('user')
  if (!userStr) return null
  return JSON.parse(userStr)
}

export function setUser(user: User) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(user))
  }
}

export function removeUser() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user')
  }
}
