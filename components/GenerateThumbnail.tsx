"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Label } from './ui/label';

import * as LR from '@uploadcare/blocks';
import { Textarea } from './ui/textarea';

import '@uploadcare/blocks/web/lr-file-uploader-regular.min.css'; // Import Uploadcare CSS

LR.registerBlocks(LR);

const GenerateThumbnail = ({image,setImage,imageId,setImageId, imagePrompt,setImagePrompt}: {
   image: string;
   setImage: (v:string)=> void;
   imageId: string;
   setImageId: (v:string) => void;
   imagePrompt: string;
   setImagePrompt: (v:string)=> void;
}) => {
  const [isAiThumbnail, setIsAiThumbnail] = useState(false);
  const [loading,setLoading] = useState(false)
 
  const ctxProviderRef = useRef<typeof LR.UploadCtxProvider.prototype & UploadCtxProvider>(null);
 
  useEffect(() => {
    const handleUploadComplete = (e: LR.EventMap["done-click"]) => {
      // console.log(e, "Upload complete event");
     
      const file = e.detail.allEntries.filter((f) => f.status === "success")
      if(file.length > 0) {
          setImageId(file[0].cdnUrl || "")
          ctxProviderRef.current?.uploadCollection.clearAll()
      }
     
    };

    // @ts-ignore
    ctxProviderRef.current?.addEventListener("done-click", handleUploadComplete);

    return () => {
      // @ts-ignore
      ctxProviderRef.current?.removeEventListener("done-click", handleUploadComplete);
    };
  }, []);

  const generateOpenaiImage  = async()=> {
     setLoading(true)
     if(!imagePrompt) {
        throw new Error('image prompt missing')
     }
     try {
        const response = await fetch('http://localhost:3000/api/openAi', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
             prompt: imagePrompt
          })
        })
        if(!response.ok) {
            throw new Error('error')
        }
        const { image_url } = await response.json();
        console.log(image_url,"image url")
        setImage(image_url);
     } catch (error) {
       console.log(error)
     }finally {
       setLoading(false)
     }
  }

  return (
    <>
      <div className="generate_thumbnail">
        <Button 
          className={cn("text-white-1 flex-1", { "bg-black-6": isAiThumbnail })} 
          type="button" 
          onClick={() => setIsAiThumbnail(true)}
        >
          Ai Prompt to generate thumbnail
        </Button>
        <Button 
          className={cn("text-white-1 flex-1", { "bg-black-6": !isAiThumbnail })} 
          onClick={() => setIsAiThumbnail(false)} 
          type="button"
        >
          Upload custom Image
        </Button>
      </div>
      {isAiThumbnail ? (
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-2.5 mt-5'>
            <Label className='text-16 text-white-1 font-bold'>Ai Prompt to generate Thumbnail</Label>
            <Textarea 
              rows={5} 
              required={isAiThumbnail}
              value={imagePrompt}
              onChange={(e)=> setImagePrompt(e.target.value)}
              placeholder='Provide text to generate thumbnail' 
              className='input-class font-light focus-visible:ring-offset-orange-1' 
            />
          </div>
          <div className='w-full max-w-[200px]'>
            <Button onClick={generateOpenaiImage} className='bg-orange-1 text-white-1 py-4 font-bold' type="button">
             {loading ? "loading...": "Generate"} 
            </Button>
          </div>
        </div>
      ) : (
        <div className='flex w-full mt-5 cursor-pointer items-center justify-center gap-3 h-[142px] border-[3.2px] border-dashed border-black-6 bg-black-1 rounded-xl flex-col'>
          <Image src="/icons/upload-image.svg" alt="upload" width={40} height={40} />
            
         
          <p className="text-12 font-normal text-gray-1">SVG, PNG, JPG, or GIF (max. 1080x1080px)</p>
          <>
            <lr-config imgOnly multiple={false}
             maxLocalFileSizeBytes={10000000} sourceList='local, url, camera, instagram, dropbox, gdrive'  ctx-name="my-uploader" pubkey={"9ac3da2d6690edb9c7fe"}></lr-config>
            <lr-file-uploader-regular class='my-config' ctx-name="my-uploader"></lr-file-uploader-regular> 
            <lr-upload-ctx-provider ctx-name='my-uploader' ref={ctxProviderRef} />
          </>
        </div>
      )}
      {imageId && !isAiThumbnail && (
 <div className="flex-center w-full">
 <Image 
   src={imageId}
   width={200}
   
   height={200}
   className="mt-5"
  
   alt="thumbnail"
 />
</div>
      )}
   {image && isAiThumbnail && (
 <div className="flex-center w-full">
 <Image 
   src={image }
   width={200}
   
   height={200}
   className="mt-5 rounded-xl"
    
   alt="thumbnail"
 />
 </div>
   )}


      
       
      
    </>
  );
};

export default GenerateThumbnail;
