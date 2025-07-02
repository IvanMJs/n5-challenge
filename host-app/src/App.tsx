"use client"

import type React from "react"
import { useState, Suspense, lazy } from "react"


const RickAndMortyCharacters = lazy(() => import("rickandmortymf/CharacterList"))
const HarryPotterCharacters = lazy(() => import("harrypottermf/CharacterList"))

const App: React.FC = () => {
  const [showRick, setShowRick] = useState(false)
  const [showHarry, setShowHarry] = useState(false)

  return (
    <div
      style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", padding: "20px" }}
    >
      <header style={{ textAlign: "center", color: "white", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "3rem", margin: "0 0 10px 0" }}>🚀 Character Universe Explorer</h1>
        <p style={{ fontSize: "1.2rem" }}>Discover amazing characters from your favorite universes</p>
      </header>

      <main style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <section
          style={{ background: "rgba(255,255,255,0.1)", borderRadius: "20px", padding: "30px", marginBottom: "30px" }}
        >
          <h2 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>🛸 Rick & Morty Universe</h2>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <button
              onClick={() => setShowRick(!showRick)}
              style={{
                background: showRick ? "#dc3545" : "#28a745",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {showRick ? "Hide Characters" : "Show Characters"}
            </button>
          </div>
          {showRick && (
            <Suspense fallback={<div style={{ textAlign: "center", color: "white" }}>Loading...</div>}>
              <RickAndMortyCharacters language="en" />
            </Suspense>
          )}
        </section>

        <section style={{ background: "rgba(255,255,255,0.1)", borderRadius: "20px", padding: "30px" }}>
          <h2 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>⚡ Harry Potter Universe</h2>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <button
              onClick={() => setShowHarry(!showHarry)}
              style={{
                background: showHarry ? "#dc3545" : "#6f42c1",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {showHarry ? "Hide Characters" : "Show Characters"}
            </button>
          </div>
          {showHarry && (
            <Suspense fallback={<div style={{ textAlign: "center", color: "white" }}>Loading...</div>}>
              <HarryPotterCharacters language="en" />
            </Suspense>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
