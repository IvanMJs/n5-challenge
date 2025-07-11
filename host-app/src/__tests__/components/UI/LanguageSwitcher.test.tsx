import React from "react"
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
  const defaultProps = {
    language: "en",
    onLanguageChange: () => {},
    label: "Switch Language",
  }

  it("renders language switcher with options", () => {
    renderWithProviders(<LanguageSwitcher {...defaultProps} />)

    expect(screen.getByLabelText(/switch language/i)).toBeInTheDocument()
    expect(screen.getByDisplayValue("us English")).toBeInTheDocument()
  })

  it("changes language when option is selected", () => {
    // Wrapper con estado para simular el cambio de idioma
    const Wrapper = () => {
      const [lang, setLang] = React.useState("en");
      return (
        <LanguageSwitcher
          language={lang}
          onLanguageChange={setLang}
          label="Switch Language"
        />
      );
    };

    renderWithProviders(<Wrapper />);

    const select = screen.getByDisplayValue("us English");
    fireEvent.change(select, { target: { value: "es" } });

    expect(select).toHaveValue("es");
  });

  it("renders without crashing", () => {
    renderWithProviders(<LanguageSwitcher {...defaultProps} />)
  })

  it("renders with Spanish language", () => {
    renderWithProviders(<LanguageSwitcher {...defaultProps} language="es" />)
  })
})
