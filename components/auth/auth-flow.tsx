'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { toast } from '@/components/ui/use-toast'
import { Icons } from '@/components/ui/icons'

export function AuthFlow() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleGoogleSignIn = async () => {
    setLoading(true)
    toast({
      title: 'Demo mode',
      description: 'Opening the dashboard without an external auth provider.',
    })
    router.push('/dashboard')
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
          <CardDescription>
            Sign in with Google to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            type="button"
            disabled={loading}
            className="w-full"
            onClick={handleGoogleSignIn}
          >
            <span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
              {loading ? (
                <Icons.spinner className="h-4 w-4 animate-spin" />
              ) : (
                <Icons.google className="h-4 w-4" />
              )}
            </span>
            Continue with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
