'use client'

import { useMemo, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { GraduationCap, Shield, User } from 'lucide-react'
import type { UserProfile, UserRole } from '@/lib/types/database'

const roleIcons = {
  admin: Shield,
  instructor: GraduationCap,
  student: User,
} as const

const demoUsers: UserProfile[] = [
  {
    id: 'demo-admin',
    firstname: 'Ari',
    lastname: 'Admin',
    email: 'admin@masterjj.app',
    phone: '+10000000001',
    role: 'admin',
    created_at: new Date(2026, 0, 1).toISOString(),
    last_sign_in_at: new Date().toISOString(),
    is_anonymous: false,
    auth_provider: 'demo',
  },
  {
    id: 'demo-instructor',
    firstname: 'Maya',
    lastname: 'Instructor',
    email: 'coach@masterjj.app',
    phone: '+10000000002',
    role: 'instructor',
    created_at: new Date(2026, 0, 5).toISOString(),
    last_sign_in_at: new Date().toISOString(),
    is_anonymous: false,
    auth_provider: 'demo',
  },
  {
    id: 'demo-student',
    firstname: 'Sergio',
    lastname: 'Practitioner',
    email: 'demo@masterjj.app',
    phone: '+10000000003',
    role: 'student',
    created_at: new Date(2026, 0, 10).toISOString(),
    last_sign_in_at: new Date().toISOString(),
    is_anonymous: false,
    auth_provider: 'demo',
  },
]

export function UserManagement() {
  const [users, setUsers] = useState<UserProfile[]>(demoUsers)
  const [searchTerm, setSearchTerm] = useState('')

  function updateUserRole(userId: string, newRole: UserRole) {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    )

    toast({
      title: 'Role updated',
      description: 'Demo user role updated locally.',
    })
  }

  const filteredUsers = useMemo(() => {
    const searchLower = searchTerm.toLowerCase()
    return users.filter((user) => {
      return (
        user.email?.toLowerCase().includes(searchLower) ||
        user.firstname?.toLowerCase().includes(searchLower) ||
        user.lastname?.toLowerCase().includes(searchLower) ||
        user.role.toLowerCase().includes(searchLower)
      )
    })
  }, [searchTerm, users])

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">User Management</h2>
        <Input
          placeholder="Search users..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="max-w-xs"
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => {
            const RoleIcon = roleIcons[user.role] || User
            return (
              <TableRow key={user.id}>
                <TableCell>
                  {user.firstname} {user.lastname}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <RoleIcon className="h-4 w-4" />
                    <span className="capitalize">{user.role}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Select
                    value={user.role}
                    onValueChange={(value: UserRole) =>
                      updateUserRole(user.id, value)
                    }
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="instructor">Instructor</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
