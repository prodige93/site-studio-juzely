"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface Draft {
  id: string
  name: string
  status: "draft" | "in-progress" | "completed"
  lastModified: string
}

// Demo data - in a real app, this would come from an API
const demoData: Draft[] = [
  {
    id: "1",
    name: "Summer Collection 2024",
    status: "draft",
    lastModified: "2024-02-20T10:00:00Z",
  },
  {
    id: "2",
    name: "Winter Essentials",
    status: "in-progress",
    lastModified: "2024-02-19T15:30:00Z",
  },
  {
    id: "3",
    name: "Spring Collection",
    status: "completed",
    lastModified: "2024-02-18T09:15:00Z",
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState("Drafts")
  const [drafts] = useState<Draft[]>(demoData)
  
  const tabs = [
    { name: "Drafts", count: 1 },
    { name: "Samples", count: 0 },
    { name: "Bulks", count: 0 },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getStatusColor = (status: Draft["status"]) => {
    switch (status) {
      case "draft":
        return "bg-gray-100 text-gray-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const renderTabContent = () => {
    if (activeTab === "Drafts" && drafts.length > 0) {
      return (
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Name</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Status</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Last Modified</th>
                  <th className="text-right py-4 px-6 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {drafts.map((draft) => (
                  <tr key={draft.id} className="border-b border-gray-200 last:border-0">
                    <td className="py-4 px-6">{draft.name}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(draft.status)}`}>
                        {draft.status.charAt(0).toUpperCase() + draft.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {formatDate(draft.lastModified)}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Button
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    }

    // Empty state for all tabs
    return (
      <div className="bg-gray-200 rounded-3xl p-8 shadow-md flex justify-center gap-4 border border-gray-300">
        <button className="rounded-full border border-gray-300 px-6 py-2 text-sm text-gray-600 hover:bg-gray-50">
          Start design
        </button>
        <Button className="px-6 py-2 text-sm" variant="default">
          Start new collection
        </Button>
      </div>
    )
  }

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
          <h2 className="text-2xl font-bold" style={{ color: "rgb(70, 71, 84)" }}>
            My Orders
          </h2>

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

        {renderTabContent()}
      </main>
    </div>
  )
}
