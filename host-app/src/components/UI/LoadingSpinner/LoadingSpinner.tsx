import type React from "react"
import { useTranslation } from "react-i18next"
import { SpinnerContainer } from "./LoadingSpinner.styles"

export const LoadingSpinner: React.FC = () => {
  const { t } = useTranslation()

  return (
    <SpinnerContainer className="loading-spinner">
      <div className="loading-spinner__spinner" />
      <span className="loading-spinner__text">{t("loading")}</span>
    </SpinnerContainer>
  )
}
