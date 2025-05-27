"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden gold-hover-effect",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-all duration-300",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline transition-all duration-300",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg",
        gold: "bg-gradient-to-r from-gold-300/90 via-gold-400/90 to-gold-300/90 text-gold-900 hover:from-gold-400/90 hover:via-gold-500/90 hover:to-gold-400/90 transition-all duration-300 shadow-md hover:shadow-lg border border-gold-200/50 backdrop-blur-sm glow-gold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const [ripples, setRipples] = useState<Array<{left: number, top: number, id: number}>>([]);
    const [nextId, setNextId] = useState(0);
    
    // クリック時の波紋エフェクト
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const left = e.clientX - rect.left;
      const top = e.clientY - rect.top;
      
      const newRipple = {
        left,
        top,
        id: nextId
      };
      
      setRipples(prev => [...prev, newRipple]);
      setNextId(prev => prev + 1);
      
      // 波紋を一定時間後に削除
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 1000);
    };
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={(e) => {
          handleClick(e);
          props.onClick?.(e);
        }}
        {...props}
      >
        {asChild ? props.children : <span className="relative z-10">{props.children}</span>}
        <span className="gold-line-effect"></span>
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-gold-400/40 animate-ripple"
            style={{
              left: ripple.left,
              top: ripple.top,
              transform: 'translate(-50%, -50%)',
              width: '200%',
              height: '200%',
              opacity: 0.6,
            }}
          />
        ))}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
