'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-base font-bold transition-all',
  {
    variants: {
      variant: {
        default: 'bg-main text-text border-4 border-border shadow-brutal hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none',
        neutral: 'bg-background text-text border-4 border-border shadow-brutal hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none',
        link: 'text-text hover:underline',
        noShadow: 'bg-main text-text border-4 border-border',
        reverse: 'bg-background text-text border-4 border-border hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY hover:shadow-brutal',
      },
      size: {
        default: 'h-11 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-12 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
