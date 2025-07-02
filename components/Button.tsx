"use client"

import type React from "react"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "danger" | "rick" | "harry"
  disabled?: boolean
  icon?: string
}

export function Button({ children, onClick, variant = "primary", disabled = false, icon }: ButtonProps) {
  const baseClasses =
    "button relative overflow-hidden px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 active:scale-95 shadow-2xl border-2 backdrop-blur-md"

  const variantClasses = {
    primary:
      "button--primary bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-blue-400/50 hover:border-blue-300 shadow-blue-500/25",
    secondary:
      "button--secondary bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white border-gray-400/50 hover:border-gray-300 shadow-gray-500/25",
    danger:
      "button--danger bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white border-red-400/50 hover:border-red-300 shadow-red-500/25",
    rick: "button--rick bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white border-green-300/50 hover:border-green-200 shadow-green-500/25",
    harry:
      "button--harry bg-gradient-to-r from-purple-600 to-yellow-500 hover:from-purple-700 hover:to-yellow-600 text-white border-purple-400/50 hover:border-purple-300 shadow-purple-500/25",
  }

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed transform-none" : ""

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} group`}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      <span className="relative flex items-center justify-center gap-3">
        {icon && <span className="text-xl group-hover:animate-bounce">{icon}</span>}
        {children}
      </span>
    </button>
  )
}
