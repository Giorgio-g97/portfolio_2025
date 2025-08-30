import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border-2 border-tertiary bg-tertiary/50 px-4 py-3 text-base transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-secondary/60 focus-visible:outline-none focus-visible:border-primary focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }