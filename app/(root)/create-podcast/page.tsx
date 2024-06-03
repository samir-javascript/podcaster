import PodcastForm from '@/components/PodcastForm'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col mt-9 gap-9 md:overflow-hidden ">
        <div className='flex flex-col gap-5'>
             <h2 className='text-white-1 text-[20px] font-bold '>Create a Podcast</h2>
             <div>
                 <PodcastForm />
             </div>
        </div>
    </div>
  )
}

export default page