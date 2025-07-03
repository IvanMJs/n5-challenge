"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import {
  StyledDrawerOverlay,
  StyledDrawerContent,
  StyledDrawerHeader,
  StyledDrawerFooter,
  StyledDrawerTitle,
  StyledDrawerDescription,
  StyledDrawerClose,
  StyledDrawerHandle,
} from "./Drawer.styles"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger
const DrawerPortal = DrawerPrimitive.Portal
const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ ...props }, ref) => (
  <StyledDrawerOverlay as={DrawerPrimitive.Overlay} ref={ref} {...props} />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <StyledDrawerContent as={DrawerPrimitive.Content} ref={ref} {...props}>
      <StyledDrawerHandle />
      {children}
    </StyledDrawerContent>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <StyledDrawerHeader ref={ref} {...props} />)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <StyledDrawerFooter ref={ref} {...props} />)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ ...props }, ref) => (
  <StyledDrawerTitle as={DrawerPrimitive.Title} ref={ref} {...props} />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ ...props }, ref) => (
  <StyledDrawerDescription as={DrawerPrimitive.Description} ref={ref} {...props} />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
