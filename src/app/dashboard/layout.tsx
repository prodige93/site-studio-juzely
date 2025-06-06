import { redirect } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // For now, we'll skip session checking to avoid NextAuth issues
  // In production, you would implement proper session validation

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}
