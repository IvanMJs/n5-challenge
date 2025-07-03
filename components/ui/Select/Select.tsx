"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import {
  SelectTriggerStyled,
  SelectContentStyled,
  SelectViewportStyled,
  SelectLabelStyled,
  SelectItemStyled,
  SelectSeparatorStyled,
  SelectScrollUpButtonStyled,
  SelectScrollDownButtonStyled,
  SelectIconStyled,
  SelectItemIndicatorStyled,
  SelectValueStyled
} from "./Select.styles"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectValueStyled

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectTriggerStyled ref={ref} className={className} {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <SelectIconStyled>
        <ChevronDown />
      </SelectIconStyled>
    </SelectPrimitive.Icon>
  </SelectTriggerStyled>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectScrollUpButtonStyled ref={ref} className={className} {...props}>
    <ChevronUp />
  </SelectScrollUpButtonStyled>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectScrollDownButtonStyled ref={ref} className={className} {...props}>
    <ChevronDown />
  </SelectScrollDownButtonStyled>
))
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectContentStyled
      ref={ref}
      className={className}
      $position={position}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectViewportStyled $position={position}>
        {children}
      </SelectViewportStyled>
      <SelectScrollDownButton />
    </SelectContentStyled>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectLabelStyled ref={ref} className={className} {...props} />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectItemStyled ref={ref} className={className} {...props}>
    <SelectItemIndicatorStyled>
      <Check />
    </SelectItemIndicatorStyled>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectItemStyled>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectSeparatorStyled ref={ref} className={className} {...props} />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
