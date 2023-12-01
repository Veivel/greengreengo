import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchBar = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex h-10 w-full rounded-md justify-between border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
        <input
          type={type}
          className={cn(
            'w-full h-full px-3 py-2',
            className
          )}
          ref={ref}
          {...props}
        />
        <button>//todo</button>
      </div>
    )
  }
)
SearchBar.displayName = "SearchBar"

export { SearchBar }
