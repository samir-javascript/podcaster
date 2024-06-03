import EmptyShiit from '@/components/EmptyShiit'
import PodcastCard from '@/components/PodcastCard'
import PodcastDetailsPlayer from '@/components/PodcastDetailsPlayer'
import { Button } from '@/components/ui/button'
import { podcastData } from '@/contants'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='mt-9 w-full flex flex-col gap-9'>
       
             <h2 className='text-white-1 text-[20px] font-bold capitalize '> Podcastor Profile</h2>
             
            
    
             <div className='flex relative w-full justify-between max-md:justify-center'>
       <div className="flex flex-col gap-8 max-md:items-center md:flex-row">
       <Image
          src={"/icons/user.svg"}
          width={250}
          height={250}
          alt="Podcast image"
          className="aspect-square rounded-lg"
        />
        <div className='flex w-full flex-col max-md:justify-center md:gap-9 gap-6'>
           <article className='flex flex-col gap-2'>
              <div>
                <div className='flex items-center gap-2'>
                    <Image src="/icons/verified.svg" alt="verified creator" width={18} height={18} />
                    <p className='text-white-4 font-medium text-sm'>Verified Creator</p>

                </div>
              <h2 className='text-[26px] font-bold text-white-1 '>Marvin James</h2>
              </div>
            
              
        
               
                 <div className='flex items-center gap-1.5'>
                      <Image src="/icons/microphone.svg" alt="microphone"  width={35} height={35} />
                      <p className='text-white-1 font-normal text-14 '>93,525,192 <span className='text-gray-1'>monthly listeners</span> </p>
                 </div>
           </article>
           
           <Button className='text-white-1 bg-orange-1 flex items-center gap-2 ' type="button">
                <Image  src="/icons/play.svg" alt='play' width={30} height={30} />
                <p>Play random Podcast</p>
           </Button>
        </div>
       </div>
      
       
      
    </div>
       
      
      
        <div>
          <div className='flex items-center justify-between mb-3'>
            <h2 className='font-bold  text-white-1 text-[20px] '>All Podcasts</h2>
            <Button className='text-white-1 bg-black-1 flex items-center gap-1.5 whitespace-nowrap' type="button">
                  <Image src="/icons/filter.svg" alt='filter' width={18} height={18} />
                  <p className='whitespace-nowrap text-sm font-medium capitalize '>Apply filter</p>
             </Button>
          </div>
           
           
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {podcastData.slice(0,3).map(item => (
                 <PodcastCard key={item.id} {...item} />
             ))}
            
         </div>
         {/* <EmptyShiit title='you have not created any Podcasts yet' textButton='Create a Podcast' route="/create-podcast" /> */}
        </div>
    </div>
  )
}

export default page