"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"
import {
  StyledMenubarRoot,
  StyledMenubarContent,
  StyledMenubarItem,
  StyledMenubarCheckboxItem,
  StyledMenubarRadioItem,
  StyledMenubarLabel,
  StyledMenubarSeparator,
  StyledMenubarShortcut,
  StyledMenubarSubContent,
  StyledMenubarSubTrigger,
  StyledMenubarTrigger,
} from "./Menubar.styles"

const MenubarMenu = MenubarPrimitive.Menu
const MenubarGroup = MenubarPrimitive.Group
const MenubarPortal = MenubarPrimitive.Portal
const MenubarSub = MenubarPrimitive.Sub
const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <StyledMenubarRoot as={MenubarPrimitive.Root} ref={ref} className={className} {...props} />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ ...props }, ref) => (
  <StyledMenubarTrigger as={MenubarPrimitive.Trigger} ref={ref} {...props} />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ inset, children, ...props }, ref) => (
  <StyledMenubarSubTrigger as={MenubarPrimitive.SubTrigger} ref={ref} $inset={inset} {...props}>
    {children}
    <ChevronRight className="menubar__chevron" />
  </StyledMenubarSubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ ...props }, ref) => (
  <StyledMenubarSubContent as={MenubarPrimitive.SubContent} ref={ref} {...props} />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ ...props }, ref) => (
  <StyledMenubarContent as={MenubarPrimitive.Content} ref={ref} {...props} />
))
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ inset, ...props }, ref) => (
  <StyledMenubarItem as={MenubarPrimitive.Item} ref={ref} $inset={inset} {...props} />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ children, checked, ...props }, ref) => (
  <StyledMenubarCheckboxItem as={MenubarPrimitive.CheckboxItem} ref={ref} checked={checked} {...props}>
    <span className="menubar__checkbox-indicator">
      <MenubarPrimitive.ItemIndicator>
        <Check className="menubar__check" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </StyledMenubarCheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ children, ...props }, ref) => (
  <StyledMenubarRadioItem as={MenubarPrimitive.RadioItem} ref={ref} {...props}>
    <span className="menubar__radio-indicator">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="menubar__circle" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </StyledMenubarRadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ inset, ...props }, ref) => (
  <StyledMenubarLabel as={MenubarPrimitive.Label} ref={ref} $inset={inset} {...props} />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ ...props }, ref) => (
  <StyledMenubarSeparator as={MenubarPrimitive.Separator} ref={ref} {...props} />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({ ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <StyledMenubarShortcut {...props} />
}
MenubarShortcut.displayName = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarGroup,
  MenubarPortal,
  MenubarSub,
  MenubarRadioGroup,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
}
