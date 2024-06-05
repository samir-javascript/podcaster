import EmptyShiit from '@/components/EmptyShiit'
import PodcastCard from '@/components/PodcastCard'
import SearchBar from '@/components/SearchBar'
import { Button } from '@/components/ui/button'
import { podcastData } from '@/contants'

import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='mt-9 flex-col flex gap-9 w-full'>
        <div>
            <SearchBar />
        </div>
        <div className='flex items-center justify-between'>
             <p className='text-white-4 font-normal text-base'>Search Results of <span className='text-white-1 font-bold'>Web development</span></p>
             <Button className='text-white-1 bg-black-1 flex items-center gap-1.5 whitespace-nowrap' type="button">
                  <Image src="/icons/filter.svg" alt='filter' width={18} height={18} />
                  <p className='whitespace-nowrap text-sm font-medium capitalize '>Apply filter</p>
             </Button>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
             {podcastData.map(item => (
                 <PodcastCard key={item.id} {...item} />
             ))}
         </div>
         {/* <EmptyShiit title="No Results found" desc='Try adjusting your search to find what you are looking for' /> */}
    </div>
  )
}

export default page