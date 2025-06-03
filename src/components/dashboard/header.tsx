"use client"

import { signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  const { data: session } = useSession()

  const handleSignOut = () => {
    signOut({ callbackUrl: "/login" })
  }

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-semibold">Labwear Studios</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {session?.user?.email}
            </span>
            <Button
              variant="outline"
              onClick={handleSignOut}
              className="text-sm"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
