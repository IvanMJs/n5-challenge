"use client"

import { useState } from "react"
import { Header } from "../components/Header"
import { CharacterGrid } from "../components/CharacterGrid"
import { LanguageSwitcher } from "../components/LanguageSwitcher"
import { Button } from "../components/Button"
import { FloatingElements } from "../components/FloatingElements"

export default function HomePage() {
  const [language, setLanguage] = useState("en")
  const [showRickAndMorty, setShowRickAndMorty] = useState(false)
  const [showHarryPotter, setShowHarryPotter] = useState(false)

  const translations = {
    en: {
      title: "Character Universe Explorer",
      subtitle: "Discover amazing characters from your favorite universes",
      rickAndMorty: "Rick & Morty Universe",
      harryPotter: "Wizarding World",
      showCharacters: "Explore Characters",
      hideCharacters: "Hide Characters",
      languageSwitch: "Language",
      rickDescription: "Dive into the multiverse with Rick and Morty's crazy adventures",
      harryDescription: "Enter the magical world of Hogwarts and beyond",
    },
    es: {
      title: "Explorador de Universos de Personajes",
      subtitle: "Descubre personajes increíbles de tus universos favoritos",
      rickAndMorty: "Universo Rick & Morty",
      harryPotter: "Mundo Mágico",
      showCharacters: "Explorar Personajes",
      hideCharacters: "Ocultar Personajes",
      languageSwitch: "Idioma",
      rickDescription: "Sumérgete en el multiverso con las locas aventuras de Rick y Morty",
      harryDescription: "Entra al mundo mágico de Hogwarts y más allá",
    },
  }

  const t = translations[language as keyof typeof translations]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      <FloatingElements />

      {/* Animated background (tiled SVG pattern) */}
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>

      <Header title={t.title} subtitle={t.subtitle} />

      <div className="max-w-7xl mx-auto p-6 relative z-10">
        <div className="mb-12 flex justify-center">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20">
            <LanguageSwitcher language={language} onLanguageChange={setLanguage} label={t.languageSwitch} />
          </div>
        </div>

        {/* Rick and Morty Section */}
        <section className="mb-12 group">
          <div className="backdrop-blur-xl bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-green-400/40">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <span className="text-2xl">🛸</span>
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                  {t.rickAndMorty}
                </h2>
                <p className="text-white/80 text-sm max-w-md">{t.rickDescription}</p>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <Button
                onClick={() => setShowRickAndMorty(!showRickAndMorty)}
                variant={showRickAndMorty ? "danger" : "rick"}
                icon={showRickAndMorty ? "👁️" : "🚀"}
              >
                {showRickAndMorty ? t.hideCharacters : t.showCharacters}
              </Button>
            </div>

            <div
              className={`transition-all duration-700 ${showRickAndMorty ? "opacity-100 max-h-none" : "opacity-0 max-h-0 overflow-hidden"}`}
            >
              {showRickAndMorty && <CharacterGrid type="rick-and-morty" language={language} />}
            </div>
          </div>
        </section>

        {/* Harry Potter Section */}
        <section className="group">
          <div className="backdrop-blur-xl bg-gradient-to-r from-purple-600/20 to-yellow-500/20 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-purple-400/40">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  {t.harryPotter}
                </h2>
                <p className="text-white/80 text-sm max-w-md">{t.harryDescription}</p>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <Button
                onClick={() => setShowHarryPotter(!showHarryPotter)}
                variant={showHarryPotter ? "danger" : "harry"}
                icon={showHarryPotter ? "👁️" : "🪄"}
              >
                {showHarryPotter ? t.hideCharacters : t.showCharacters}
              </Button>
            </div>

            <div
              className={`transition-all duration-700 ${showHarryPotter ? "opacity-100 max-h-none" : "opacity-0 max-h-0 overflow-hidden"}`}
            >
              {showHarryPotter && <CharacterGrid type="harry-potter" language={language} />}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-white/60 pb-8">
        <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 mx-6 border border-white/10">
          <p className="text-sm">✨ Built with React, TypeScript & Module Federation ✨</p>
          <p className="text-xs mt-2 opacity-75">Explore infinite possibilities across universes</p>
        </div>
      </footer>
    </div>
  )
}
