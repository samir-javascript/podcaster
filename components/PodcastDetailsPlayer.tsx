import Image from 'next/image'
import React from 'react'
import { Progress } from './ui/progress'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const PodcastDetailsPlayer = () => {
  return (
    <div className='flex relative w-full justify-between max-md:justify-center'>
       <div className="flex flex-col gap-8 max-md:items-center md:flex-row">
       <Image
          src={"https://s3-alpha-sig.figma.com/img/566d/28c4/77120061dec7d5e8982bbaa5003b247c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AlB64Q9F~tRFY8D0nAou2H~vPJrChHJ86lqCU62sr2dRqi1pAzp~GrLNLMFbW6kxmn-5Vud3Z8xhoYj4mprCy4AKQkCV0LzhxCNe5DSyjF7ub7CdEgcDDlVxHZjjXFZohInI-x3hJlV69Q0tlDEKwXOSMUTF1AwrYSaHf1e-WN7yJXQS-nOtbH-gESnaKBpNncBOwv9stX0cTmKYa~zQp3zRBU7tj0VWbYwZX~PiwzP7SwZuKUYhNKmv9lUzetpwfBR2KW~vbPYmNLSogCn4Qhnbt86q9CTtyTpgWT6RyeILBr9ieP20fHxhHSUmpumR-GXkDVPG~LKhFphaL-90IA__"}
          width={250}
          height={250}
          alt="Podcast image"
          className="aspect-square rounded-lg"
        />
        <div className='flex w-full flex-col max-md:justify-center md:gap-9 gap-6'>
           <article className='flex flex-col gap-2'>
           
              <h2 className='text-[26px] font-bold text-white-1 '>Javascript Jungle</h2>
              
        
               
                 <div className='flex items-center gap-1.5'>
                      <Image src="https://www.github.com/shadcn.png" alt="" className='rounded-full' width={35} height={35} />
                      <p className='text-gray-1 font-normal text-14 '>Soufiane H</p>
                 </div>
           </article>
           <div className='flex items-center gap-5'>
                <Image src="/icons/reverse.svg" alt="" width={25} height={25} />
                <Image src="/icons/pause.svg" alt="" width={25} height={25} />
                <Image src="/icons/forward.svg" alt="" width={25} height={25} />
           </div>
           <div className='flex flex-col mt-4 gap-2'>
               <p className='text-gray-1 font-medium text-14'>1,45/4,25</p>
               <Progress value={33 

               } className='w-full' />
           </div>
        </div>
       </div>
       <div className="absolute right-0 mt-1">
       <DropdownMenu >
  <DropdownMenuTrigger className='border-none outline-none'>
  <Image className=' cursor-pointer ' src="/icons/three-dots.svg" width={25} height={25} alt="" />
  </DropdownMenuTrigger>
  <DropdownMenuContent className='w-32 bg-black-1 border border-black-2 outline-none'>
  
    <DropdownMenuItem>
      <div className='w-full flex cursor-pointer items-center gap-2.5'>
      <Image src="/icons/edit.svg" alt="edit" width={20} height={20} />
        <p className='text-white-2 font-medium text-sm'>Edit</p>
      </div>
      
    </DropdownMenuItem>
    <DropdownMenuItem>
      <div className='w-full cursor-pointer flex items-center gap-2.5'>
      <Image src="/icons/delete.svg" alt="trash" width={20} height={20} />
        <p className='text-white-2 font-medium text-sm'>Delete</p>
      </div>
    
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
       </div>
       
      
    </div>
  )
}

export default PodcastDetailsPlayer