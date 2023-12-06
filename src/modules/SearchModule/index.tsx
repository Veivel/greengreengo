import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/ui/searchbar";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export const SearchModule = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="flex align-middle p-4 gap-2">
          <Image 
            src="/greengreengo2.png" 
            alt={"greengreengo logo"}          
            width={150}
            height={150}
            className="w-16 h-16 my-auto"
          />
          <div className="gap-0 p-0 font-serif">
            <h1 className="text-green-600"> green green <span className="text-black">go</span> </h1>
          </div>
        </div>
        <SearchBar 
          placeholder="Enter your query, e.g. climate change, carbon emissions, ..." 
        />
    </main>
  );
};