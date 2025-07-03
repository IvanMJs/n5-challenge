"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { AccordionItemWrapper, AccordionHeader, AccordionTrigger as StyledTrigger, AccordionContentWrapper } from "./Accordion.styles"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className = "", ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={className}
    {...props}
    asChild
  >
    <AccordionItemWrapper className={`accordion__item${className ? ` ${className}` : ""}`} />
  </AccordionPrimitive.Item>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className = "", children, ...props }, ref) => (
  <AccordionPrimitive.Header asChild>
    <AccordionHeader className="accordion__header">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={`accordion__trigger${className ? ` ${className}` : ""}`}
        {...props}
        asChild
      >
        <StyledTrigger className={`accordion__trigger${className ? ` ${className}` : ""}`}>{children}<ChevronDown /></StyledTrigger>
      </AccordionPrimitive.Trigger>
    </AccordionHeader>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className = "", children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={className}
    {...props}
    asChild
  >
    <AccordionContentWrapper className={`accordion__content${className ? ` ${className}` : ""}`}>{children}</AccordionContentWrapper>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
