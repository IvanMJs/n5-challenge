import type React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { I18nextProvider } from "react-i18next"
import i18n from "../../../i18n"
import { LanguageProvider } from "../../../contexts/LanguageContext"
import { LanguageSwitcher } from "../../../components/UI/LanguageSwitcher/LanguageSwitcher"

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>{component}</LanguageProvider>
    </I18nextProvider>,
  )
}

describe("LanguageSwitcher Component", () => {
  it("renders language switcher with options", () => {
    renderWithProviders(<LanguageSwitcher />)

    expect(screen.getByLabelText(/switch language/i)).toBeInTheDocument()
    expect(screen.getByDisplayValue("English")).toBeInTheDocument()
  })

  it("changes language when option is selected", () => {
    renderWithProviders(<LanguageSwitcher />)

    const select = screen.getByDisplayValue("English")
    fireEvent.change(select, { target: { value: "es" } })

    expect(select).toHaveValue("es")
  })
})
