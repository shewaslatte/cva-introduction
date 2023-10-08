import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader as Buffer, Loader2 as Circle, PenToolIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const loaderVariants = cva("", {
  variants: {
    variant: {
      default: "text-primary dark:text-white",
      destructive: "text-destructive dark:text-red-400",
      secondary: "text-secondary dark:text-secondary-foreground",
      ghost: "text-accen dark:text-primary-foreground",
    },
    size: {
      default: "h-10 w-10",
      sm: "h-9 w-9",
      lg: "h-11 w-11",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface LoaderVariants
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loaderVariants> {
  type?: "buffer" | "circle" | "penis"
}

const Loader = React.forwardRef<HTMLDivElement, LoaderVariants>(
  ({ className, variant, size, type = "buffer", ...props }, ref) => {
    return (
      <>
        {type === "buffer" && (
          <Buffer
            className={cn(
              loaderVariants({ variant, size, className }),
              "animate-spin rounded-full"
            )}
            ref={ref}
            {...props}
          />
        )}
        {type === "circle" && (
          <Circle
            className={cn(
              loaderVariants({ variant, size, className }),
              "animate-spin rounded-full"
            )}
            ref={ref}
            {...props}
          />
        )}
        {type === "penis" && (
          <PenToolIcon
            className={cn(
              loaderVariants({ variant, size, className }),
              "animate-spin rounded-full"
            )}
            ref={ref}
            {...props}
          />
        )}
      </>
    )
  }
)

Loader.displayName = "Loader"

export { Loader, loaderVariants }
