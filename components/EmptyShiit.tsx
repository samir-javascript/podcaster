import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

function EmptyShiit({title, textButton, route, desc}: {
    title: string;
    textButton?: string;
    route?: string;
    desc?: string
}) {
  return (
    <div className='flex items-center justify-center mx-auto w-full text-center flex-col gap-3'>
       <Image src="/icons/emptyState.svg" alt="empty" width={140} height={120} />
       <div className='mt-5 flex gap-3 flex-col'>
            <p className='text-white-1 font-bold text-[20px] '>{title}</p>
            {textButton &&  <Link href={route || ""}>
                 <Button  className='bg-orange-1 text-white-1 py-4 font-semibold' type="button">
                     {textButton}
                 </Button>
             </Link>}
             {desc && (
               <p className='text-white-4 max-w-[350px] text-center text-sm font-medium'>{desc} </p>
             )}
       </div>
    </div>
  )
}

export default EmptyShiit