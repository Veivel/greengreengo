import * as React from "react"

import { cn } from "@/lib/utils"
import { FaSearch } from "react-icons/fa"
import { Switch } from "./switch"
import { IoIosHelpCircleOutline } from "react-icons/io";
import { HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card"
import { HoverCard } from "./hover-card"
import { useSearchParams } from "next/navigation"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchBar = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, defaultValue, ...props }, ref) => {
    const initialQuery = useSearchParams().get('q')
    const initialWithLetor = useSearchParams().get('with_letor')
    
    const [query, setQuery] = React.useState<string>(initialQuery as string || "");
    const [isLetor, setIsLetor] = React.useState<boolean | null>(initialWithLetor === 'true' ? true : null);

    React.useEffect(() => {
      if (!Boolean(query)) {
        setQuery((prev) => initialQuery as string)
      }
      setIsLetor(initialWithLetor === 'true' ? true : false)
    }, [initialQuery, initialWithLetor])

    function search(e: React.BaseSyntheticEvent) {
      e.preventDefault()
      let additionalParam = ""
      if (isLetor) {
        additionalParam = `&with_letor=true`
      }
      window.location.replace(`/search?q=${query}${additionalParam}`)
    }
    
    function handleQueryChange(e: any) {
      setQuery(e.target.value)
    }

    return (
      <div className="flex flex-col gap-2 w-full">
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
          <button className="px-4 hover:scale-110 hover:cursor-pointer transition">
            <FaSearch/>
          </button>
        </form>
        <div className="flex justify-end transition-all text-sm items-center gap-1">
          <label htmlFor="letor-mode">Enhanced Search</label>
          <HoverCard>
            <HoverCardTrigger className="hover:scale-105">
              <IoIosHelpCircleOutline size={24} color="#1A1A1A" />
            </HoverCardTrigger>
            <HoverCardContent className="mt-2 shadow-md p-4 bg-white border border-gray-200 rounded-md">
              With Enhanced Search, we will use <br/>LETOR to rank your results.
            </HoverCardContent>
          </HoverCard>
          <Switch 
            className="my-auto ml-2" 
            value="a" 
            id="letor-mode" 
            checked={Boolean(isLetor)} 
            onCheckedChange={() => {setIsLetor((prev) => !prev)}}
          />
        </div>
      </div>
    )
  }
)
SearchBar.displayName = "SearchBar"

export { SearchBar }
