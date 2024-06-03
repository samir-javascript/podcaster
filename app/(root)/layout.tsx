import LeftSidebar from '@/components/LeftSidebar'
import MobileNav from '@/components/MobileNav'
import Image from 'next/image'
import React from 'react'
import { Toaster } from "@/components/ui/toaster"
import RightSidebar from '@/components/RightSidebar'
import BottomPlayer from '@/components/BottomPlayer'
const RootLayout = ({children}: { children: React.ReactNode}) => {
  return (
    <div className='relative flex flex-col'>
         <main className='bg-black-3 flex relative '>
              <LeftSidebar />
              <section className='flex flex-1 min-h-screen px-4 sm:px-14 flex-col '>
                  <div className='flex w-full mx-auto max-w-5xl flex-col max-sm:px-4'> 
                  <div className="flex h-16 items-center justify-between md:hidden">
              <Image 
                src="/icons/logo.svg"
                width={30}
                height={30}
                alt="menu icon"
              />
              <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14">
              <Toaster />

              {children}
            </div>
                  </div>
              </section>
              <RightSidebar />
         </main>
         <BottomPlayer />
    </div>
  )
}

export default RootLayout