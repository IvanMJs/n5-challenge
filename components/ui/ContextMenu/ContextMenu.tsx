"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import {
  StyledContextMenuContent,
  StyledContextMenuItem,
  StyledContextMenuCheckboxItem,
  StyledContextMenuRadioItem,
  StyledContextMenuLabel,
  StyledContextMenuSeparator,
  StyledContextMenuShortcut,
  StyledContextMenuSubContent,
  StyledContextMenuSubTrigger,
} from "./ContextMenu.styles"

const ContextMenu = ContextMenuPrimitive.Root
const ContextMenuTrigger = ContextMenuPrimitive.Trigger
const ContextMenuGroup = ContextMenuPrimitive.Group
const ContextMenuPortal = ContextMenuPrimitive.Portal
const ContextMenuSub = ContextMenuPrimitive.Sub
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ inset, children, ...props }, ref) => (
  <StyledContextMenuSubTrigger
    as={ContextMenuPrimitive.SubTrigger}
    ref={ref}
    $inset={inset}
    {...props}
  >
    {children}
    <ChevronRight className="context-menu__chevron" />
  </StyledContextMenuSubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ ...props }, ref) => (
  <StyledContextMenuSubContent as={ContextMenuPrimitive.SubContent} ref={ref} {...props} />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ ...props }, ref) => (
  <StyledContextMenuContent as={ContextMenuPrimitive.Content} ref={ref} {...props} />
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ inset, ...props }, ref) => (
  <StyledContextMenuItem as={ContextMenuPrimitive.Item} ref={ref} $inset={inset} {...props} />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ children, checked, ...props }, ref) => (
  <StyledContextMenuCheckboxItem as={ContextMenuPrimitive.CheckboxItem} ref={ref} checked={checked} {...props}>
    <span className="context-menu__checkbox-indicator">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="context-menu__check" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </StyledContextMenuCheckboxItem>
))
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ children, ...props }, ref) => (
  <StyledContextMenuRadioItem as={ContextMenuPrimitive.RadioItem} ref={ref} {...props}>
    <span className="context-menu__radio-indicator">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="context-menu__circle" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </StyledContextMenuRadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ inset, ...props }, ref) => (
  <StyledContextMenuLabel as={ContextMenuPrimitive.Label} ref={ref} $inset={inset} {...props} />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ ...props }, ref) => (
  <StyledContextMenuSeparator as={ContextMenuPrimitive.Separator} ref={ref} {...props} />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({ ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <StyledContextMenuShortcut {...props} />
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
