"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { toast } from '@/components/ui/use-toast'
import { Icons } from "@/components/ui/icons"

interface LoginState {
  isLoading: boolean;
  error: string;
  showProfileForm: boolean;
  userId: string;
}

type LoginAction =
  | { type: 'START_LOADING' }
  | { type: 'STOP_LOADING' }
  | { type: 'SET_ERROR'; error: string }
  | { type: 'SET_SHOW_PROFILE'; value: boolean }
  | { type: 'SET_USER_ID'; id: string }
  | { type: 'RESET_FORM' };

const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true, error: '' };
    case 'STOP_LOADING':
      return { ...state, isLoading: false };
    case 'SET_ERROR':
      return { ...state, error: action.error, isLoading: false };
    case 'SET_SHOW_PROFILE':
      return { ...state, showProfileForm: action.value };
    case 'SET_USER_ID':
      return { ...state, userId: action.id };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const initialState: LoginState = {
  isLoading: false,
  error: '',
  showProfileForm: false,
  userId: '',
};

export function LoginForm() {
  const router = useRouter()
  const [state, dispatch] = React.useReducer(loginReducer, initialState)

  const handleSignInWithGoogle = async () => {
    dispatch({ type: 'START_LOADING' })
    toast({
      title: 'Demo mode',
      description: 'Opening the dashboard without an external auth provider.',
    })
    router.push('/dashboard')
    dispatch({ type: 'STOP_LOADING' })
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
        <CardDescription>
          Continue with Google to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          variant="outline"
          type="button"
          disabled={state.isLoading}
          className="w-full"
          onClick={handleSignInWithGoogle}
        >
          <span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
            {state.isLoading ? (
              <Icons.spinner className="h-4 w-4 animate-spin" />
            ) : (
              <Icons.google className="h-4 w-4" />
            )}
          </span>
          Continue with Google
        </Button>
      </CardContent>
    </Card>
  )
}
