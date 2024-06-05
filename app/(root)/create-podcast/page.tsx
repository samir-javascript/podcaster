
import { getCurrentUser } from '@/actions/user.actions'
import PodcastForm from '@/components/PodcastForm'
import { auth } from '@clerk/nextjs/server'
import React from 'react'


const page = async() => {
  const { userId } = auth()
  const  user = await getCurrentUser({clerkId: userId!})

  return (
    <div className="flex flex-col mt-9 gap-9 md:overflow-hidden ">
        <div className='flex flex-col gap-5'>
             <h2 className='text-white-1 text-[20px] font-bold '>Create a Podcast</h2>
             <div>
              // @ts-ignore
                <PodcastForm userId={user?._id} />
             </div>
        </div>
    </div>
  )
}

export default page