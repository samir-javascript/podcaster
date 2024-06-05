"use client"
import { Loader } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'

import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { audioProps } from '@/types'

const useGeneratePodcast = ({setAudio,voicePrompt,voiceType}: {
 
   setAudio: (v:string)=> void;
   voiceType: string;
   voicePrompt: string;
})=> {
  const [isGenerating,setIsGenerating] = useState(false)

  const generatePodcast = async () => {
    setIsGenerating(true);
    if (!voicePrompt) {
      // todo toast notification;
      return setIsGenerating(false);
    }
    try {
      const response = await fetch('/api/chatgpt', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          voiceType,
          voicePrompt
        })
      });

      if (!response.ok) {
        throw new Error("Failed to generate audio");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setAudio(url);
     
    } catch (error) {
      console.log(error);
    } finally {
      setIsGenerating(false);
    }
  }
  return {
    isGenerating,
    generatePodcast
  }
}
const GeneratePodcast = ({audio,setAudio,setAudioDuration,voicePrompt,setVoicePrompt,voiceType}: audioProps) => {
   
     const  {isGenerating,generatePodcast} = useGeneratePodcast({setAudio,voicePrompt,voiceType})
    
  return (

    <div>
        
        <div className="flex flex-col gap-2.5">
        <Label className="text-16 font-bold text-white-1">
          AI Prompt to generate Podcast
        </Label>
        <Textarea
          className="input-class font-light focus-visible:ring-offset-orange-1"
          placeholder='Provide text to generate audio'
          rows={5}
          required
          value={voicePrompt}
          onChange={(e) => setVoicePrompt(e.target.value)}
        />
      </div>
       
         <div className="mt-5 w-full max-w-[200px]">
      <Button onClick={generatePodcast} type="button" className="text-16 bg-orange-1 py-4 font-bold text-white-1" >
        {isGenerating ? (
          <>
            Generating
            <Loader size={20} className="animate-spin ml-2" />
          </>
        ) : (
          'Generate'
        )}
      </Button>
      </div>
      {audio && (
        <audio 
          controls
          src={audio}
          autoPlay
          className="mt-5"
          onLoadedMetadata={(e) => setAudioDuration(e.currentTarget.duration)}
        />
      )}
    </div>
  )
}

export default GeneratePodcast