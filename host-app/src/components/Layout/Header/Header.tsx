import type React from "react"
import { useTranslation } from "react-i18next"
import { useLanguage } from "../../../contexts/LanguageContext"
import { HeaderContainer } from "./Header.styles"
import { LanguageSwitcher } from "../../UI/LanguageSwitcher/LanguageSwitcher"

export const Header: React.FC = () => {
  const { t } = useTranslation()
  const { language, changeLanguage } = useLanguage()

  return (
    <HeaderContainer className="header">
      <h1 className="header__title">{t("app.title")}</h1>
      <p className="header__subtitle">{t("app.subtitle")}</p>
      <LanguageSwitcher
        language={language}
        onLanguageChange={changeLanguage}
        label={t("language.switch")}
      />
    </HeaderContainer>
  )
}
