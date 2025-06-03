"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [activeTab, setActiveTab] = useState("Bulks")
  const tabs = [
    { name: "Drafts", count: 1 },
    { name: "Samples", count: 0 },
    { name: "Bulks", count: 0 },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <header className="flex items-center justify-between w-full max-w-6xl mb-8 px-4">
        <h1 className="text-lg font-semibold">Labwear Studios</h1>
        <div className="flex items-center gap-4">
          <Button className="px-4 py-2 text-sm" variant="default">
            Upgrade plan
          </Button>
          <div className="w-10 h-10 rounded-full bg-gray-300" title="User avatar" />
        </div>
      </header>

      <main className="w-full max-w-6xl px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">My Orders</h2>

          <div className="flex items-center gap-4">
            <button className="rounded-full bg-white border border-gray-300 px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16h6" />
              </svg>
              Chat
            </button>
            <button className="rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50">
              + Start new design
            </button>
            <Button className="px-4 py-2 text-sm" variant="default">
              + Add new collection
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                activeTab === tab.name
                  ? "bg-gray-500 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {tab.name} {tab.count > 0 && <span className="ml-1">{tab.count}</span>}
            </button>
          ))}
        </div>

        <div className="bg-gray-200 rounded-3xl p-8 shadow-md flex justify-center gap-4 border border-gray-300">
          <button className="rounded-full border border-gray-300 px-6 py-2 text-sm text-gray-600 hover:bg-gray-50">
            Start design
          </button>
          <Button className="px-6 py-2 text-sm" variant="default">
            Start new collection
          </Button>
        </div>
      </main>
    </div>
  )
}
