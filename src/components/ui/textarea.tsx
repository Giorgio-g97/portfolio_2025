import * as React from "react"
import { cn } from "@/lib/utils"
const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(({ className, ...props }, ref) => <textarea className={cn("flex min-h-[150px] w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white transition-all duration-300 placeholder:text-white/30 focus-visible:outline-none focus-visible:border-[#bcd1d6] focus-visible:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50 resize-none", className)} ref={ref} {...props} />)
Textarea.displayName = "Textarea"
export { Textarea }
