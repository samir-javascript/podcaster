"use client"

import Image from "next/image"
import { Input } from "./ui/input"
import { useState , useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useDebounce } from "@/utils"
const SearchBar = () => {
    const [value,setValue] = useState("")
     const router = useRouter()
     const pathname = usePathname()
     const deBouncedValue = useDebounce(value,500)
    useEffect(()=> {
       if(deBouncedValue) {
           router.push(`/discover?search=${deBouncedValue}`)
       }else if (!deBouncedValue && pathname === "/discover"){
           router.push("/discover")
       }
    }, [router, pathname, deBouncedValue])
  return (
    <div className="w-full rounded-xl px-3 py-1.5 bg-black-1 flex items-center justify-between ">
          <div className="flex flex-1 w-full items-center gap-1">
               <Image src="/icons/search.svg" alt='search' width={22} height={22} />
               <Input value={value}  onChange={(e)=> setValue(e.target.value)} className="bg-transparent text-white-1 border-none focus-within:ring-0 focus-within:ring-offset-0 outline-none ring-0 ring-offset-transparent focus-visible:ring-offset-0 flex-1 ring-offset-0" placeholder="Search for podcasts..." />
          </div>
         {value && <Image onClick={()=> setValue("")} className="cursor-pointer" src="/icons/x.svg" width={18} height={18} alt="remove" />} 
    </div>
  )
}

export default SearchBar