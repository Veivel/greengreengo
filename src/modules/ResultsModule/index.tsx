import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { SearchBar } from "@/components/ui/searchbar"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Results } from './interface';
import axios from "axios"
import { FaSpinner } from "react-icons/fa"
import { CgSpinner } from "react-icons/cg"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@radix-ui/react-hover-card"
import { IoIosHelpCircleOutline } from "react-icons/io"
import { Switch } from "@/components/ui/switch"

export const ResultsModule = () => {
  const initialQuery = useSearchParams().get('q')
  const initialWithLetor = useSearchParams().get('with_letor')
  const router = useRouter()
  const [data, setData] = useState<Results | undefined>();

  useEffect(() => {
    if (!data && initialQuery) {
      const prom = axios.get(`https://ir.veivelp.com/retrieve?query=${initialQuery}&with_letor=${initialWithLetor}`)
      prom.then((res) => {
        setData(res.data)
      })
    }
  }, [initialQuery, data, initialWithLetor])

  return(
    <main className="p-24">
      <SearchBar 
        placeholder="Enter your query here..."
        defaultValue={initialQuery as string}
      />
      <div className="flex flex-row justify-start text-sm mt-2">
        { data?.results && 
          <p className="text-neutral-600">
            Showing {data.results.length} results for <b>{initialQuery}</b>
            { initialWithLetor ? " with LETOR." : ""}
          </p> 
        }
      </div>

      <div className="flex flex-col gap-4 align-middle items-center">
        { data ? <>
          { Boolean(data) && data.results.length > 0 ?
            <>
              { data.results.map((doc, i) => (
                <button 
                  className="my-1 p-2 rounded-md border border-gray-200 hover:shadow-sm hover:border-gray-700 text-left w-full min-h-[90px]" 
                  key={i} 
                  onClick={() => {router.push(`/doc/${doc.file_name}`)}}
                >
                  <p className="mb-1 font-bold">{doc.title}</p>
                  <CardDescription>
                    {doc.content.substring(0, 250)}
                    {doc.content.length > 250 && "...."}
                  </CardDescription>
                </button>
              ))}
            </>
            :
            <>
              <p>No results found.</p>
            </>
          }
        </> : <>
          <FaSpinner className="animate-spin mx-auto my-24" size={64} />
        </> }
      </div>
    </main>
  )
}