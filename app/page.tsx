"use client"

import { useEffect, useState } from "react"
import GitHubRepoVisualization from "./components/github-repo-visualization";
import { RepoData } from './types/repo-data';

export default function Home() {
  const [repoData, setRepoData] = useState<RepoData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/repo-data")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setRepoData(data)
      } catch (error) {
        console.error("Could not load data:", error)
        setError("Error loading repository data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <main className="w-full h-screen relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-10">
          <div className="text-white text-xl">Loading repository data...</div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-10">
          <div className="text-white text-xl">{error}</div>
        </div>
      )}

      {repoData && <GitHubRepoVisualization repoData={repoData} />}

      <div id="info" className="absolute top-0 left-0 p-4 text-white z-10 bg-gray-900 bg-opacity-70 rounded-br-lg">
        GitHub Repo Visualization: <span id="repo-name">{repoData?.metadata?.full_name || "Loading..."}</span>
      </div>

      <div
        id="tooltip"
        className="absolute hidden p-3 bg-gray-900 bg-opacity-90 text-white text-sm rounded shadow-lg z-20 max-w-xs whitespace-pre-line"
      />
    </main>
  )
}

