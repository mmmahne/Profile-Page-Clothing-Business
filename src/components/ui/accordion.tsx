"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import * as React from "react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'group relative mb-4',
      'before:absolute before:-inset-1 before:block before:rounded-base before:bg-main before:transition-transform',
      'hover:before:translate-x-2 hover:before:translate-y-2',
      className
    )}
    {...props}
  >
    <div className="relative border-4 border-border bg-background rounded-base">
      {props.children}
    </div>
  </AccordionPrimitive.Item>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 px-6',
        'font-heading text-lg transition-all',
        'hover:text-main [&[data-state=open]]:text-main',
        '[&[data-state=open]>svg]:rotate-180',
        'group-hover:-translate-y-0.5 transition-transform',
        className
      )}
      {...props}
    >
      <span className="text-left">{children}</span>
      <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-300 text-main" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden text-base transition-all',
      'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      'border-t-4 border-border bg-main/5'
    )}
    {...props}
  >
    <div className={cn('pb-6 px-6 pt-4', className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
