import React from 'react'
import { Progress } from "@/components/ui/progress"

import Image from 'next/image'


const BottomPlayer = () => {
  return (
    <div className='sticky flex flex-col  bottom-0 left-0 glassmorphism-black size-full z-10 '>
          <Progress    className="w-full" value={33} />
          <div className='px-4 my-5 flex items-center w-full justify-between'>
              <div className='flex items-center gap-2 '>
                  <Image alt="profile" src="https://www.github.com/shadcn.png" width={42} height={42} className='rounded-xl max-md:w-[30px] max-md:h-[30px] ' />
                  <div className='flex flex-col'>
                      <h2 className='text-16 max-md:text-12 text-white-1 font-medium '>Liam switchs</h2>
                      <p className='text-gray-1 max-md:text-12 font-normal text-14 '>Khawla</p>
                  </div>
              </div>
              <div className='flex  gap-3 md:gap-6 items-center justify-center'>
              <div className="flex items-center gap-1.5">
            <Image
              src={"/icons/reverse.svg"}
              width={24}
              height={24}
              alt="rewind"
              
            />
            <h2 className="text-12 font-bold text-white-4">-5</h2>
          </div>
           <Image src="/icons/Play.svg" alt="play" width={30} height={30} />
           <div className="flex items-center gap-1.5">
            <Image
              src={"/icons/forward.svg"}
              width={24}
              height={24}
              alt="rewind"
              
            />
            <h2 className="text-12 font-bold text-white-4">+5</h2>
          </div>
              </div>
              <div className="flex items-center gap-6">
          <h2 className="text-16 font-normal whitespace-nowrap text-white-2 max-md:hidden">
            1:45/4:25
          </h2>
          <div className="flex w-full gap-2">
            <Image
              src={"/icons/mute.svg"}
              width={24}
              height={24}
              alt="mute unmute"
             
              className="cursor-pointer"
            />
          </div>
        </div>
          </div>
    </div>
  )
}

export default BottomPlayer