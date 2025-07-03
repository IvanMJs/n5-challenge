"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { TabsListWrapper, TabsTriggerButton, TabsContentWrapper } from "./Tabs.styles"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className = "", ...props }, ref) => (
  <TabsPrimitive.List ref={ref} asChild {...props}>
    <TabsListWrapper className={`tabs__list${className ? ` ${className}` : ""}`} />
  </TabsPrimitive.List>
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className = "", ...props }, ref) => (
  <TabsPrimitive.Trigger ref={ref} asChild {...props}>
    <TabsTriggerButton className={`tabs__trigger${className ? ` ${className}` : ""}`} />
  </TabsPrimitive.Trigger>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className = "", ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} asChild {...props}>
    <TabsContentWrapper className={`tabs__content${className ? ` ${className}` : ""}`} />
  </TabsPrimitive.Content>
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
