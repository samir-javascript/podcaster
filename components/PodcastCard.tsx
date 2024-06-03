import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
type CardTypes =  {
     id:number;
     description: string;
     title: string;
     imgURL: string
}
const PodcastCard = ({id, description, title, imgURL}:CardTypes) => {
   
  return (
    <Link  href={`/podcast/${id}`} >
       <figure className='flex w-full   flex-col gap-2'>
            <Image src={imgURL} alt={title}  width={174}
          height={174} className='w-full h-full  aspect-square rounded-xl 2xl:size-[200px] ' />
          <div className='flex flex-col'>
              <h1 className='text-16 font-bold text-white-1 truncate '>{title} </h1>
              <h2 className='text-12 font-normal capitalize text-white-4 truncate '>{description} </h2>
          </div>
       </figure>
     </Link>
  )
}

export default PodcastCard