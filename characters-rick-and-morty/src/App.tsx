import type React from "react"
import CharacterList from "./components/CharacterList/CharacterList"

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px", background: "#f0f0f0", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}>
        🛸 Rick & Morty Characters - Standalone
      </h1>
      <CharacterList language="en" />
    </div>
  )
}

export default App
