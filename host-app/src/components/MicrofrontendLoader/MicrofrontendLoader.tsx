"use client"

import type React from "react"
import { Suspense, lazy } from "react"
import { useLanguage } from "../../contexts/LanguageContext"
import { LoadingSpinner } from "../UI/LoadingSpinner/LoadingSpinner"

interface MicrofrontendLoaderProps {
  microfrontendName: string
  componentName: string
}

export const MicrofrontendLoader: React.FC<MicrofrontendLoaderProps> = ({ microfrontendName, componentName }) => {
  const { language } = useLanguage()

  const LazyComponent = lazy(
    () =>
      // @ts-ignore - Module Federation dynamic import
      import(`${microfrontendName}/${componentName}`),
  )

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LazyComponent language={language} />
    </Suspense>
  )
}
