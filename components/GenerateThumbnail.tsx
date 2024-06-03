"use client"
import React, { useRef, useState } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'

const GenerateThumbnail = () => {
    const [isAiThumbnail,setIsAiThumbnail] = useState(false)
    const [image,setImage] = useState('')
    const ref = useRef<HTMLInputElement>(null)
  return (
    <>
    <div className="generate_thumbnail">
    <Button className={cn("text-white-1 flex-1", {
       "bg-black-6" : isAiThumbnail
    })} type="button" onClick={()=> setIsAiThumbnail(true)}>Ai Prompt to generate thumbnail</Button>
    <Button className={cn("text-white-1 flex-1", {
       "bg-black-6" : !isAiThumbnail
    })} onClick={()=> setIsAiThumbnail(false)} type="button">Upload custom Image</Button>
</div>
  {isAiThumbnail ? (
     <div className='flex flex-col gap-5'>
       <div className='flex flex-col gap-2.5 mt-5'>
            <Label className='text-16 text-white-1 font-bold'>Ai Prompt to generate Thumbnail</Label>
            <Textarea rows={5} 
            placeholder='Provide text to generate thumbnail'
             className='input-class font-light focus-visible:ring-offset-orange-1 ' />
           
       </div>
       <div className='w-full max-w-[200px] '>
             <Button className='bg-orange-1 text-white-1 py-4 font-bold' type="submit">
                Generate
             </Button>
       </div>
     </div>
  ): (
     <div onClick={()=> ref?.current?.click()} className='flex w-full mt-5 cursor-pointer items-center justify-center gap-3 h-[142px] border-[3.2px] border-dashed border-black-6 bg-black-1 rounded-xl flex-col  '>
          <Image src="/icons/upload-image.svg" alt="upload" width={40} height={40} />
          <Input type="file" className='hidden' ref={ref} />
          
          <p className='text-orange-1 text-14 font-medium'> Click to Upload <span className='text-gray-1'>or drag and drop</span></p>
          <p className="text-12 font-normal text-gray-1">SVG, PNG, JPG, or GIF (max. 1080x1080px)</p> 

     </div>
  )}
</>
  )
}

export default GenerateThumbnail