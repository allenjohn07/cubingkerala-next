'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function LoginComponent() {
  const router = useRouter()

  const handleLogin =() => {
    router.push('/api/auth/login')
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex w-full max-w-md flex-col gap-6 px-8 py-20 md:py-20 md:px-8">
        <div className="flex flex-col items-center gap-2">
          <CuboidIcon className="h-12 w-12 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Cubing Kerala</h2>
        </div>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="font-semibold text-xl">Login</CardTitle>
            <CardDescription>Enter your credentials.</CardDescription>
          </CardHeader>
          <CardFooter>
              <Button onClick={handleLogin} className="bg-green-400 gap-2 hover:bg-green-500 rounded-none text-black w-full">
                <img src="/WCALogo.svg" className="h-5 w-5" alt="wca-logo" />
                Login with WCA
              </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function CuboidIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" />
      <path d="M10 22v-8L2.25 9.15" />
      <path d="m10 14 11.77-6.87" />
    </svg>
  )
}