import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { ChevronDown } from "lucide-react"
import {
  StyledNavigationMenuRoot,
  StyledNavigationMenuList,
  StyledNavigationMenuContent,
  StyledNavigationMenuTrigger,
  StyledNavigationMenuViewport,
  StyledNavigationMenuIndicator,
} from "./NavigationMenu.styles"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <StyledNavigationMenuRoot
    as={NavigationMenuPrimitive.Root}
    ref={ref}
    className={className}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </StyledNavigationMenuRoot>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <StyledNavigationMenuList
    as={NavigationMenuPrimitive.List}
    ref={ref}
    className={className}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <StyledNavigationMenuTrigger
    as={NavigationMenuPrimitive.Trigger}
    ref={ref}
    className={className}
    {...props}
  >
    {children}
    <ChevronDown className="navigation-menu__chevron" aria-hidden="true" />
  </StyledNavigationMenuTrigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <StyledNavigationMenuContent
    as={NavigationMenuPrimitive.Content}
    ref={ref}
    className={className}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <StyledNavigationMenuViewport
    as={NavigationMenuPrimitive.Viewport}
    ref={ref}
    className={className}
    {...props}
  />
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <StyledNavigationMenuIndicator
    as={NavigationMenuPrimitive.Indicator}
    ref={ref}
    className={className}
    {...props}
  >
    <div className="navigation-menu__indicator" />
  </StyledNavigationMenuIndicator>
))
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
