import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { SearchBar } from "@/components/ui/searchbar"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export const ResultsModule = () => {
  const initialQuery = useSearchParams().get('q')
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    setQuery((prev) => {
      if (prev === "") {
        return initialQuery as string
      } else return ""
    })
  }, [initialQuery])

  // TODO search function

  return(
    <main className="p-24">
      <SearchBar 
        value={query}
        placeholder="No..."
      />
      <div className="flex flex-col">
        <div className="py-4">
          <h2 className="mb-2 font-bold">NextJS Global App Router</h2>
          <CardDescription>The following is the definition of the router object returned by both useRouter and withRouter: pathname: String - The path for current route file that comes after /pages. Therefore, basePath, locale and trailing slash ( trailingSlash: true) are not included. query: Object - The query string parsed...</CardDescription>
        </div>
        <div className="py-4">
          <h2 className="mb-2 font-bold">NextJS Global App Router</h2>
          <CardDescription>The following is the definition of the router object returned by both useRouter and withRouter: pathname: String - The path for current route file that comes after /pages. Therefore, basePath, locale and trailing slash ( trailingSlash: true) are not included. query: Object - The query string parsed...</CardDescription>
        </div>
        <div className="py-4">
          <h2 className="mb-2 font-bold">NextJS Global App Router</h2>
          <CardDescription>The following is the definition of the router object returned by both useRouter and withRouter: pathname: String - The path for current route file that comes after /pages. Therefore, basePath, locale and trailing slash ( trailingSlash: true) are not included. query: Object - The query string parsed...</CardDescription>
        </div>
      </div>
    </main>
  )
}