"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { voiceDetails } from "@/contants"
import { Button } from "@/components/ui/button"
import { createPodcast } from "@/actions/podcast.actions"
const NoSSR = dynamic(() => import('./GenerateThumbnail'), { ssr: false })
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
import { useForm } from "react-hook-form"

import { Label } from "./ui/label"
import { useState } from "react"


import GeneratePodcast from "./GeneratePodcast"
import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"
import { useUser } from "@clerk/nextjs"
const formSchema = z.object({
  podcastTitle: z.string().min(2),
  podcastDescription: z.string().min(2),
 
})
const PodcastForm = () => {
  const pathname = usePathname()
  const user =   useUser()
  const voiceCategories = ["alloy" , "echo" , "fable" , "onyx" , "nova" , "shimmer"]
  const [imagePrompt,setImagePrompt] = useState("")
  const [imageUrl,setImageUrl] = useState("")
  const [uploadCareImage,setUploadCareImage] = useState("")
  const [voiceType,setVoiceType] = useState("")
  const [audio,setAudio] = useState<string | null>(null)
  const [audioDuration,setAudioDuration] = useState(0)
  const [voicePrompt,setVoicePrompt] = useState('')
 
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      podcastTitle: "",
      podcastDescription: ""
    },
  })
 async function onSubmit(values: z.infer<typeof formSchema>) {
   
     try {
        const res = await createPodcast({
           user: user.user?.id!,
           path: pathname,
           podcastDescription: values.podcastDescription,
           podcastTitle: values.podcastTitle,
           audioDuration: audioDuration,
           audioUrl: audio!,
           imageUrl: imageUrl || uploadCareImage,
           imagePrompt: imagePrompt,
           views: 0,
           voiceType: voiceType,
           voicePrompt: voicePrompt

        })
         console.log(res, "res")
     } catch (error) {
       console.log(error)
  }}
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="podcastTitle"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white-1 font-medium">Podcast title</FormLabel>
            <FormControl>
              <Input className="input-class" placeholder="write a title about this podcast" {...field} />
            </FormControl>
           
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="podcastDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white-1 font-medium">Podcast Description</FormLabel>
            <FormControl>
              <Input className="input-class" placeholder="write a short description about this podcast" {...field} />
            </FormControl>
           
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
      <div className="flex flex-col gap-2.5">
           <Label className="font-bold text-16 text-white-1 ">Select Ai Voice</Label>
           <Select onValueChange={(value)=> setVoiceType(value)}>
  <SelectTrigger  className="w-full !text-gray-1 bg-black-1 border-none text-16 focus-visible:ring-offset-orange-1 ">
    <SelectValue  placeholder="Select AI Voice" className="text-gray-1" />
  </SelectTrigger>
  <SelectContent  className="text-16 border-none bg-black-1 font-bold text-white-1 focus:ring-orange-1">
                  {voiceDetails.map((item) => (
                    <SelectItem  key={item.id} value={item.name} className="capitalize focus:bg-orange-1">
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
                {voiceType && (
                  <audio 
                    src={`/${voiceType}.mp3`}
                    autoPlay
                    className="hidden"
                  />
                )}
</Select>
      </div>
      <div className="border-b border-black-2 h-1 w-full" />
       <GeneratePodcast 
          audio={audio}
          setAudio={setAudio}
          voiceType={voiceType!}
          voicePrompt={voicePrompt}
          setVoicePrompt={setVoicePrompt}
          setAudioDuration={setAudioDuration}
       />
       <NoSSR 
       image={imageUrl}
       imageId={uploadCareImage}
       setImageId={setUploadCareImage}
       setImage={setImageUrl}
      imagePrompt={imagePrompt}
      setImagePrompt={setImagePrompt} />
      <Button className="text-white-1 bg-orange-1 w-full transition-all
       duration-500 hover:bg-black-1 " type="submit">Submit & Publish Podcast</Button>
    </form>
  </Form>
  )
}

export default PodcastForm