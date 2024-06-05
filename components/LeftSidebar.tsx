"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'
import { sidebarLinks } from '@/contants'
import { usePathname, useRouter } from 'next/navigation'
import { SignedIn, SignedOut, useClerk } from '@clerk/nextjs'
import { Button } from './ui/button'

const LeftSidebar = () => {
  const pathname = usePathname()
  const { signOut } = useClerk();
  const router = useRouter()
  return (
    <div className='flex flex-col sticky top-0  left-0 justify-between w-fit lg:w-[270px]
     bg-black-1 text-white-1 max-md:hidden pt-8 lg:pl-8 border-none overflow-hidden
    '>
       <nav className='flex flex-col gap-6'>
             <Link  className='flex items-center pb-10 max-lg:justify-center  gap-2' href="/">
                  <Image  src="/icons/logo.svg" alt="Mr podcast" width={40} height={40} className='object-contain' />
                  <h2 className='text-[24px] font-extrabold leading-[32px] max-lg:hidden text-white-1'>Mr Podcast</h2>
             </Link>
             <div className=''>
                  {sidebarLinks.map((item)=> {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                     return (
                        <Link className={cn("flex gap-3 items-center py-4 max-lg:px-4  lg:justify-start", {
                          'bg-nav-focus border-r-4 border-orange-1': isActive
                        })}
                         key={item.label} href={item.route}>
                            <Image src={item.imgURL} alt={item.label} width={24} height={24} />
                            <p className='text-white-2'>{item.label} </p>
                        </Link>
                     )
                  })}
             </div>

       </nav>
       <SignedOut>
        <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
          <Button asChild className="text-16 w-full bg-orange-1 font-extrabold">
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
          <Button className="text-16 w-full bg-orange-1 font-extrabold"  onClick={() => signOut(() => router.push('/'))} >
            Log Out
          </Button>
        </div>
      </SignedIn>
    </div>
  )
}

export default LeftSidebar