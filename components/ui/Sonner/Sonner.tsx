"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"
import styled from "styled-components"

type ToasterProps = React.ComponentProps<typeof Sonner>

const SonnerContainer = styled.div`
  &.sonner {
    /* estilos BEM para el contenedor principal */
  }
  &.sonner--group {
    /* estilos BEM para el grupo */
  }
`;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="sonner sonner--group"
      toastOptions={{
        classNames: {
          toast: "sonner__toast sonner--group sonner--toaster-bg-background sonner--toaster-text-foreground sonner--toaster-border-border sonner--toaster-shadow-lg",
          description: "sonner__description sonner--toast-text-muted-foreground",
          actionButton: "sonner__action-button sonner--toast-bg-primary sonner--toast-text-primary-foreground",
          cancelButton: "sonner__cancel-button sonner--toast-bg-muted sonner--toast-text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
