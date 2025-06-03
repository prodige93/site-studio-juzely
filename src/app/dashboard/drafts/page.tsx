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

export default function DraftsPage() {
  const [drafts] = useState<Draft[]>(demoData)

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Drafts</h1>
        <Button
          className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6"
        >
          New Draft
        </Button>
      </div>

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
    </div>
  )
}
