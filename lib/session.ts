'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'

const SESSION_TIMEOUT = 30 * 60 * 1000
const ACTIVITY_TIMEOUT = 15 * 60 * 1000
let activityTimeout: NodeJS.Timeout
let sessionTimeout: NodeJS.Timeout

interface SessionHook {
  handleLogout: () => Promise<void>
  resetTimeouts: () => void
}

export function useSession(): SessionHook {
  const router = useRouter()

  const handleLogout = React.useCallback(async () => {
    router.push('/')
  }, [router])

  const resetTimeouts = React.useCallback(() => {
    if (activityTimeout) clearTimeout(activityTimeout)
    if (sessionTimeout) clearTimeout(sessionTimeout)

    activityTimeout = setTimeout(handleLogout, ACTIVITY_TIMEOUT)
    sessionTimeout = setTimeout(handleLogout, SESSION_TIMEOUT)
  }, [handleLogout])

  React.useEffect(() => {
    resetTimeouts()

    const activityEvents = ['mousedown', 'keydown', 'touchstart', 'mousemove']
    const handleActivity = () => {
      resetTimeouts()
    }

    activityEvents.forEach((event) => {
      window.addEventListener(event, handleActivity)
    })

    return () => {
      if (activityTimeout) clearTimeout(activityTimeout)
      if (sessionTimeout) clearTimeout(sessionTimeout)
      activityEvents.forEach((event) => {
        window.removeEventListener(event, handleActivity)
      })
    }
  }, [resetTimeouts])

  return {
    handleLogout,
    resetTimeouts,
  }
}

type WithSessionProps = Record<string, unknown>

export function withSession<P extends WithSessionProps>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> {
  const WithSessionComponent: React.FC<P> = (props) => {
    const { resetTimeouts } = useSession()

    React.useEffect(() => {
      resetTimeouts()
    }, [resetTimeouts])

    return React.createElement(WrappedComponent, props)
  }

  WithSessionComponent.displayName = `withSession(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`

  return WithSessionComponent
}
