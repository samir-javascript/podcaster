import EmptyShiit from '@/components/EmptyShiit'
import PodcastCard from '@/components/PodcastCard'
import PodcastDetailsPlayer from '@/components/PodcastDetailsPlayer'
import { podcastData } from '@/contants'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='mt-9 w-full flex flex-col gap-9'>
        <div className='flex items-center justify-between'>
             <h2 className='text-white-1 text-[20px] font-bold capitalize '> currently playing</h2>
             <div className='flex items-center gap-2.5'>
             <Image width={25} height={25} src="/icons/headphone.svg" alt="views"  />
              <p className='text-white-1 text-14 font-normal '>137,154</p>
              
             </div>
            
        </div>
        <PodcastDetailsPlayer />
        <div>
            <p className='text-16 text-white-2 font-normal '>Welcome to the "Javascript Jungle Podcast"! Join us as we navigate through the dense and ever-evolving world of JavaScript. Whether you're a seasoned developer or just starting your journey, our podcast has something for everyone. </p>
        </div>
        <div>
            <h2 className='font-bold mb-3 text-white-1 text-[20px] '>Transcription</h2>
            <p className='text-white-2 font-medium text-base'>Introduction:</p>
            <p className='text-white-3 text-sm mt-1'>Welcome to JavaScript Jungle, your go-to podcast for all things JavaScript! In today's episode, we're diving deep into the fascinating world of JavaScript and exploring some of the most interesting aspects of this powerful programming language.</p>
        </div>
        <div>
            <h2 className='font-bold mb-3 text-white-1 text-[20px] '>Thumbnail Prompt</h2>
           
            <p className='text-white-3 text-sm mt-1'>Welcome to JavaScript Jungle, your go-to podcast for all things JavaScript! In today's episode, we're diving deep into the fascinating world of JavaScript and exploring some of the most interesting aspects of this powerful programming language.</p>
        </div>
        <div>
            <h2 className='font-bold mb-3 text-white-1 text-[20px] '>Similar Podcasts</h2>
           
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