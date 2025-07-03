"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import {
  StyledDropdownMenuContent,
  StyledDropdownMenuItem,
  StyledDropdownMenuCheckboxItem,
  StyledDropdownMenuRadioItem,
  StyledDropdownMenuLabel,
  StyledDropdownMenuSeparator,
  StyledDropdownMenuShortcut,
  StyledDropdownMenuSubContent,
  StyledDropdownMenuSubTrigger,
} from "./DropdownMenu.styles"

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ inset, children, ...props }, ref) => (
  <StyledDropdownMenuSubTrigger
    as={DropdownMenuPrimitive.SubTrigger}
    ref={ref}
    $inset={inset}
    {...props}
  >
    {children}
    <ChevronRight className="dropdown-menu__chevron" />
  </StyledDropdownMenuSubTrigger>
))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ ...props }, ref) => (
  <StyledDropdownMenuSubContent as={DropdownMenuPrimitive.SubContent} ref={ref} {...props} />
))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <StyledDropdownMenuContent as={DropdownMenuPrimitive.Content} ref={ref} sideOffset={sideOffset} {...props} />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ inset, ...props }, ref) => (
  <StyledDropdownMenuItem as={DropdownMenuPrimitive.Item} ref={ref} $inset={inset} {...props} />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ children, checked, ...props }, ref) => (
  <StyledDropdownMenuCheckboxItem as={DropdownMenuPrimitive.CheckboxItem} ref={ref} checked={checked} {...props}>
    <span className="dropdown-menu__checkbox-indicator">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="dropdown-menu__check" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </StyledDropdownMenuCheckboxItem>
))
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ children, ...props }, ref) => (
  <StyledDropdownMenuRadioItem as={DropdownMenuPrimitive.RadioItem} ref={ref} {...props}>
    <span className="dropdown-menu__radio-indicator">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="dropdown-menu__circle" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </StyledDropdownMenuRadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ inset, ...props }, ref) => (
  <StyledDropdownMenuLabel as={DropdownMenuPrimitive.Label} ref={ref} $inset={inset} {...props} />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ ...props }, ref) => (
  <StyledDropdownMenuSeparator as={DropdownMenuPrimitive.Separator} ref={ref} {...props} />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({ ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <StyledDropdownMenuShortcut {...props} />
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
