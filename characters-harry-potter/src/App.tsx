import type React from "react"
import "../styles/globals.css"
import CharacterList from "./components/CharacterList/CharacterList"

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px", background: "#f8f9fa", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}>
        ⚡ Harry Potter Characters - Standalone
      </h1>
      <CharacterList language="en" />
    </div>
  )
}

export default App
