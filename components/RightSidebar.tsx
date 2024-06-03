import Image from 'next/image'
import React from 'react'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import EmblaCarousel from './EmblaCarousel'

const Header = ({title}: {
  title: string
})=> {
  return (
      <div>
            <p className='text-white-1 font-semibold text-base  '>{title} </p>
      </div>
  )
}
const RightSidebar = () => {
   
  return (
    <div className='sticky top-0 right-0 w-[310px] overflow-x-hidden
     bg-black-1 border-none max-lg:hidden px-[30px] pt-8 flex flex-col
         
    '>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center gap-2'>
             <UserButton  />
             <p className='text-white-1 font-medium text-14'>Marvin james</p>
          </div>
          <Link href="/profile">
              <Image src="/icons/right-arrow.svg" width={20} height={20}  alt="arrow"  />
          </Link>
        
           
        </div>
        <div className='my-7 flex flex-col gap-2'>
        <div className='flex items-center  justify-between'>
            <Header title='Fans also Like' />
            <Link href="/discover">
                  <p className='text-[#F97535] font-medium text-sm '>See All</p>
            </Link>
         </div>
         <EmblaCarousel />
         
        </div>
        <div className='flex flex-col mt-7 gap-3'>
        <div className='flex items-center  justify-between'>
            <Header title='Top Podcastors' />
            <Link href="/discover">
                  <p className='text-[#F97535] font-medium text-sm '>See All</p>
            </Link>
         </div>
         {[0,1,2,3,4].map((_,i)=> (
            <div className='flex items-center justify-between' key={i}>
                  <div className='flex items-center gap-2'>
                       <Image src="https://www.github.com/shadcn.png" width={35} height={35} className='rounded-xl' alt="profile" />
                       <div className='flex flex-col gap-1'>
                           <p className='text-white-1 text-sm font-medium'>Andrew tate</p>
                           <p className='font-normal text-white-3 text-sm'>trump</p>
                       </div>
                  </div>
                <p className="text-white-2 font-medium  text-[12px] ">3 Podcasts</p>
            </div>
         ))}
        </div>
        
    </div>
  )
}

export default RightSidebar