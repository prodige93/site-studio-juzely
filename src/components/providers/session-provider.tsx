"use client"

interface SessionProviderProps {
  children: React.ReactNode
}

export function SessionProvider({ children }: SessionProviderProps) {
  // Simplified session provider without NextAuth for now
  return <>{children}</>
}
