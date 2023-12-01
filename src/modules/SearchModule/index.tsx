import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchBar } from "@/components/ui/searchbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export const SearchModule = () => {
  const router = useRouter()
  const [query, setQuery] = useState<string>("");

  const handleQueryChange = (e: any) => {
    setQuery(e.target.value)
    // TODO
  }

  const handleQuerySubmit = (e: any) => {
    // TODO: redirect to results page
    router.push(`/search?q=${query}`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="flex align-middle p-4 gap-2">
          <Image 
            src="/pypygo.png" 
            alt={"pypygo logo"}          
            width={150}
            height={150}
            className="w-16 h-16 my-auto"
          />
          <div className="gap-0 p-0">
            <h1> pypy <span className="text-yellow-500">go</span> </h1>
            {/* idk how to rapetin */}
          </div>
        </div>
        <SearchBar 
          placeholder="Enter your query here..." 
          name="query"
          id="query"
          value={query}
          onChange={handleQueryChange}
        />
        <Button onClick={handleQuerySubmit}>test</Button>
    </main>
  );
};