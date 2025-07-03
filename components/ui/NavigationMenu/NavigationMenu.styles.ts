import styled, { css } from "styled-components"

export const StyledNavigationMenuRoot = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  max-width: max-content;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledNavigationMenuList = styled.ul`
  display: flex;
  flex: 1;
  list-style: none;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

export const StyledNavigationMenuTrigger = styled.button`
  display: inline-flex;
  height: 2.5rem;
  min-width: max-content;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  background: var(--background, #fff);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
  outline: none;
  cursor: pointer;
  &:hover, &:focus, &[data-state="open"] {
    background: var(--accent, #f3f4f6);
    color: var(--accent-foreground, #111827);
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const StyledNavigationMenuContent = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  @media (min-width: 768px) {
    position: absolute;
    width: auto;
  }
`;

export const StyledNavigationMenuViewport = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0.375rem;
  height: var(--radix-navigation-menu-viewport-height);
  width: 100%;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid var(--border, #e5e7eb);
  background: var(--popover, #fff);
  color: var(--popover-foreground, #111827);
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  @media (min-width: 768px) {
    width: var(--radix-navigation-menu-viewport-width);
  }
`;

export const StyledNavigationMenuIndicator = styled.div`
  position: absolute;
  top: 100%;
  z-index: 1;
  display: flex;
  height: 0.375rem;
  align-items: end;
  justify-content: center;
  overflow: hidden;
  & .navigation-menu__indicator {
    position: relative;
    top: 60%;
    height: 0.5rem;
    width: 0.5rem;
    transform: rotate(45deg);
    border-radius: 0.125rem 0 0 0.125rem;
    background: var(--border, #e5e7eb);
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
`; 