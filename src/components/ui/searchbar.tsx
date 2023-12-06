import * as React from "react"

import { cn } from "@/lib/utils"
import { FaSearch } from "react-icons/fa"
import axios from "axios"
import { useRouter } from "next/router"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchBar = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, defaultValue, ...props }, ref) => {
    const [query, setQuery] = React.useState<string>(defaultValue as string || "");
    const router = useRouter()

    function search(e: React.BaseSyntheticEvent) {
      e.preventDefault()
      // router.push(`/search?q=${query}`)
      window.location.replace(`/search?q=${query}`)
    }
    
    function handleQueryChange(e: any) {
      // console.log(e.target.value)
      setQuery(e.target.value)
    }

    return (
      <form 
        className="flex h-10 w-full rounded-md justify-between border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        onSubmit={search}
      >
        <input
          type={type}
          className={cn(
            'w-full h-full px-3 py-2',
            className
          )}
          ref={ref}
          onChange={handleQueryChange}
          value={query}
          name="query"
          {...props}
        />
        <button className="px-4">
          <FaSearch />
        </button>
      </form>
    )
  }
)
SearchBar.displayName = "SearchBar"

export { SearchBar }
