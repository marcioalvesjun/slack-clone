import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useAuthActions } from '@convex-dev/auth/react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { SignInFlow } from '../types'

interface SignInCardProps {
  setState: (sate: SignInFlow) => void
}

export const SignInCard = ({ setState }: SignInCardProps) => {
  const { signIn } = useAuthActions()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleProviderSignIn = (value: 'github' | 'google') => {
    signIn(value)
  }

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to continue</CardTitle>
      </CardHeader>
      <CardDescription className="">
        Use your email or another service to continue
      </CardDescription>
      <CardContent className="px-0 pb-0 space-y-5">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            disabled={false}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            required
          />
          <Button type="submit" className="w-full" size="lg" disabled={false}>
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={false}
            onClick={() => {}}
            variant="outline"
            size="lg"
            className="relative w-full"
          >
            <FcGoogle className="size-5 absolute top-3 left-2.5" />
            Continue with Google
          </Button>
          <Button
            disabled={false}
            onClick={() => handleProviderSignIn('github')}
            variant="outline"
            size="lg"
            className="relative w-full"
          >
            <FaGithub className="size-5 absolute top-3 left-2.5" />
            Continue with Github
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Don&apos;t have an account?{' '}
          <span
            onClick={() => setState('signUp')}
            className="cursor-pointer text-sky-700 hover:underline"
          >
            Sign up
          </span>
        </p>
      </CardContent>
    </Card>
  )
}
