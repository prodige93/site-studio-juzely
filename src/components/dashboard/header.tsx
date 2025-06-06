"use client"

import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-semibold">Labwear Studios</span>
          </div>
          <div className="flex items-center gap-4">
            <Button className="px-4 py-2 text-sm" variant="default">
              Upgrade plan
            </Button>
            <div className="w-10 h-10 rounded-full bg-gray-300" title="User avatar" />
          </div>
        </div>
      </div>
    </nav>
  )
}
