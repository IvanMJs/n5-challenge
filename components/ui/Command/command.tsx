"use client"

import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  StyledCommand,
  StyledCommandInputWrapper,
  StyledCommandInput,
  StyledCommandList,
  StyledCommandEmpty,
  StyledCommandGroup,
  StyledCommandItem,
  StyledCommandShortcut,
  StyledCommandSeparator,
} from "./Command.styles"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ ...props }, ref) => (
  <StyledCommand as={CommandPrimitive} ref={ref} {...props} />
))
Command.displayName = CommandPrimitive.displayName

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <StyledCommand>{children}</StyledCommand>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ ...props }, ref) => (
  <StyledCommandInputWrapper>
    <Search className="command__icon" />
    <StyledCommandInput as={CommandPrimitive.Input} ref={ref} {...props} />
  </StyledCommandInputWrapper>
))
CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ ...props }, ref) => (
  <StyledCommandList as={CommandPrimitive.List} ref={ref} {...props} />
))
CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <StyledCommandEmpty as={CommandPrimitive.Empty} ref={ref} {...props} />
))
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ ...props }, ref) => (
  <StyledCommandGroup as={CommandPrimitive.Group} ref={ref} {...props} />
))
CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ ...props }, ref) => (
  <StyledCommandSeparator as={CommandPrimitive.Separator} ref={ref} {...props} />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ ...props }, ref) => (
  <StyledCommandItem as={CommandPrimitive.Item} ref={ref} {...props} />
))
CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({ ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <StyledCommandShortcut {...props} />
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
