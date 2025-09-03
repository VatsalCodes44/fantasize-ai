"use client"
import * as React from "react"
import TextareaAutosize from "react-textarea-autosize"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.ComponentPropsWithoutRef<typeof TextareaAutosize> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <TextareaAutosize
        maxRows={20}
        ref={ref}
        className={cn(
          "flex min-h-[40px] w-full rounded-md resize-none border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
