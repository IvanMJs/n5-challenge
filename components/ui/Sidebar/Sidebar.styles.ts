import styled, { css } from "styled-components"
import { Separator } from "../Separator/Separator"

export const SidebarWrapper = styled.div`
  display: flex;
  min-height: 100svh;
  width: 100%;
  /* BEM: modificador para variante 'inset' */
  &[data-variant="inset"] {
    background: var(--color-sidebar-background, #f8f9fa);
  }
`;

export const SidebarContainer = styled.div<{
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}>`
  position: fixed;
  inset-block: 0;
  z-index: 10;
  display: none;
  height: 100svh;
  width: var(--sidebar-width);
  transition: left 0.2s, right 0.2s, width 0.2s;
  transition-timing-function: linear;
  @media (min-width: 768px) {
    display: flex;
  }

  ${({ side, collapsible }) =>
    side === "left"
      ? css`
          left: 0;
          ${collapsible === "offcanvas" &&
          css`
            left: calc(var(--sidebar-width) * -1);
          `}
        `
      : css`
          right: 0;
          ${collapsible === "offcanvas" &&
          css`
            right: calc(var(--sidebar-width) * -1);
          `}
        `}

  ${({ variant, collapsible, side }) =>
    (variant === "floating" || variant === "inset")
      ? css`
          padding: 0.5rem;
          ${collapsible === "icon" &&
          css`
            width: calc(var(--sidebar-width-icon) + 1rem + 2px);
          `}
        `
      : css`
          ${collapsible === "icon" &&
          css`
            width: var(--sidebar-width-icon);
            ${side === "left" ? "border-right: 1px solid var(--color-border);" : ""}
            ${side === "right" ? "border-left: 1px solid var(--color-border);" : ""}
          `}
        `}
`;

export const SidebarTriggerButton = styled.button`
  height: 1.75rem;
  width: 1.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const SidebarInput = styled.input`
  height: 2rem;
  width: 100%;
  background: var(--color-background);
  box-shadow: none;
  &:focus-visible {
    outline: 2px solid var(--color-sidebar-ring, #a0aec0);
    outline-offset: 2px;
  }
`;

export const SidebarInset = styled.main`
  position: relative;
  display: flex;
  min-height: 100svh;
  flex: 1 1 0%;
  flex-direction: column;
  background: var(--color-background);
  /* BEM: modificadores para variantes y estados */
  &[data-variant="inset"] {
    min-height: calc(100svh - 1rem);
    margin: 0.5rem;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
`;

export const SidebarRail = styled.button`
  position: absolute;
  inset-block: 0;
  z-index: 20;
  display: none;
  width: 1rem;
  transform: translateX(-50%);
  transition: all 0.2s linear;
  @media (min-width: 640px) {
    display: flex;
  }
  &[data-side="left"] {
    right: -1rem;
    cursor: w-resize;
    &[data-state="collapsed"] {
      cursor: e-resize;
    }
    &[data-collapsible="offcanvas"] {
      right: -0.5rem;
    }
  }
  &[data-side="right"] {
    left: 0;
    cursor: e-resize;
    &[data-state="collapsed"] {
      cursor: w-resize;
    }
    &[data-collapsible="offcanvas"] {
      left: -0.5rem;
    }
  }
  &::after {
    content: "";
    position: absolute;
    inset-block: 0;
    left: 50%;
    width: 2px;
    background: transparent;
    transition: background 0.2s;
  }
  &:hover::after {
    background: var(--color-sidebar-border, #e2e8f0);
  }
`;

export const SidebarMenuButton = styled.button<{
  $variant?: "default" | "outline";
  $size?: "default" | "sm" | "lg";
  $active?: boolean;
}>`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  border-radius: 0.375rem;
  padding: 0.5rem;
  text-align: left;
  font-size: 0.875rem;
  outline: none;
  transition: width 0.2s, height 0.2s, padding 0.2s;
  background: transparent;
  color: var(--color-sidebar-foreground, #222);

  &:hover,
  &:focus-visible,
  &:active {
    background: var(--color-sidebar-accent, #e2e8f0);
    color: var(--color-sidebar-accent-foreground, #111);
  }

  ${({ $variant }) =>
    $variant === "outline" &&
    css`
      background: var(--color-background, #fff);
      box-shadow: 0 0 0 1px var(--color-sidebar-border, #e2e8f0);
      &:hover,
      &:focus-visible,
      &:active {
        box-shadow: 0 0 0 1px var(--color-sidebar-accent, #cbd5e1);
      }
    `}

  ${({ $size }) =>
    $size === "sm"
      ? css`
          height: 1.75rem;
          font-size: 0.75rem;
        `
      : $size === "lg"
      ? css`
          height: 3rem;
          font-size: 0.875rem;
          padding: 0;
        `
      : css`
          height: 2rem;
        `}

  ${({ $active }) =>
    $active &&
    css`
      background: var(--color-sidebar-accent, #e2e8f0);
      color: var(--color-sidebar-accent-foreground, #111);
      font-weight: 500;
    `}
`;

export const SidebarMenu = styled.ul`
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: 0.25rem;
`;

export const SidebarMenuItem = styled.li`
  position: relative;
  width: 100%;
`;

export const SidebarGroup = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  padding: 0.5rem;
`;

export const SidebarGroupLabel = styled.div`
  display: flex;
  height: 2rem;
  align-items: center;
  border-radius: 0.375rem;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-sidebar-foreground, #222);
  opacity: 0.7;
`;

export const SidebarGroupAction = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 0.875rem;
  display: flex;
  aspect-ratio: 1 / 1;
  width: 1.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  padding: 0;
  color: var(--color-sidebar-foreground, #222);
  background: transparent;
  transition: background 0.2s, color 0.2s;
  &:hover,
  &:focus-visible {
    background: var(--color-sidebar-accent, #e2e8f0);
    color: var(--color-sidebar-accent-foreground, #111);
  }
`;

export const SidebarGroupContent = styled.div`
  width: 100%;
  font-size: 0.875rem;
`;

export const SidebarMenuAction = styled.button`
  position: absolute;
  right: 0.25rem;
  top: 0.375rem;
  display: flex;
  aspect-ratio: 1 / 1;
  width: 1.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  padding: 0;
  color: var(--color-sidebar-foreground, #222);
  background: transparent;
  transition: background 0.2s, color 0.2s;
  &:hover,
  &:focus-visible {
    background: var(--color-sidebar-accent, #e2e8f0);
    color: var(--color-sidebar-accent-foreground, #111);
  }
`;

export const SidebarSeparator = styled(Separator)`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: auto;
  background: var(--color-sidebar-border, #e2e8f0);
`;

export const SidebarContent = styled.div`
  display: flex;
  min-height: 0;
  flex: 1 1 0%;
  flex-direction: column;
  gap: 0.5rem;
  overflow: auto;
  &[data-collapsible="icon"] {
    overflow: hidden;
  }
`;

export const SidebarMenuBadge = styled.div`
  position: absolute;
  right: 0.25rem;
  display: flex;
  height: 1.25rem;
  min-width: 1.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  padding: 0 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-sidebar-foreground, #222);
  background: transparent;
  user-select: none;
  pointer-events: none;
`;

export const SidebarMenuSkeleton = styled.div`
  border-radius: 0.375rem;
  height: 2rem;
  display: flex;
  gap: 0.5rem;
  padding: 0 0.5rem;
  align-items: center;
`;

export const SidebarMenuSub = styled.ul`
  margin-left: 0.875rem;
  display: flex;
  min-width: 0;
  transform: translateX(1px);
  flex-direction: column;
  gap: 0.25rem;
  border-left: 1px solid var(--color-sidebar-border, #e2e8f0);
  padding: 0.125rem 0.625rem;
`;

export const SidebarMenuSubButton = styled.a<{
  $size?: "sm" | "md";
  $active?: boolean;
}>`
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 0.5rem;
  overflow: hidden;
  border-radius: 0.375rem;
  padding: 0 0.5rem;
  color: var(--color-sidebar-foreground, #222);
  outline: none;
  background: transparent;
  transition: background 0.2s, color 0.2s;
  height: ${({ $size }) => ($size === "sm" ? "1.75rem" : "2rem")};
  font-size: ${({ $size }) => ($size === "sm" ? "0.75rem" : "0.875rem")};
  ${({ $active }) =>
    $active &&
    `
      background: var(--color-sidebar-accent, #e2e8f0);
      color: var(--color-sidebar-accent-foreground, #111);
      font-weight: 500;
    `}
  &:hover,
  &:focus-visible {
    background: var(--color-sidebar-accent, #e2e8f0);
    color: var(--color-sidebar-accent-foreground, #111);
  }
`;

export const SidebarNone = styled.div`
  display: flex;
  height: 100%;
  width: var(--sidebar-width);
  flex-direction: column;
  background: var(--color-sidebar, #f8f9fa);
  color: var(--color-sidebar-foreground, #222);
`; 