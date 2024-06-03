"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { voiceDetails } from "@/contants"
import { Button } from "@/components/ui/button"
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
import { useForm } from "react-hook-form"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { useState } from "react"

import GenerateThumbnail from "./GenerateThumbnail"
const formSchema = z.object({
  podcastTitle: z.string().min(2).max(50),
  podcastDescription: z.string().min(2)
})
const PodcastForm = () => {
  const [voiceType,setVoiceType] = useState("")
  const  [isAiThumbnail,setIsAiThumbnail] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      podcastTitle: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
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
        name="podcastTitle"
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
    <SelectValue placeholder="Select AI Voice" className="text-gray-1" />
  </SelectTrigger>
  <SelectContent className="text-16 border-none bg-black-1 font-bold text-white-1 focus:ring-orange-1">
                  {voiceDetails.map((item) => (
                    <SelectItem key={item.id} value={item.name} className="capitalize focus:bg-orange-1">
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
</Select>
      </div>
      <div className="border-b border-black-2 h-1 w-full" />
      <FormField
        control={form.control}
        name="podcastTitle"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white-1 font-medium ">Ai Prompt to generate a Podcast</FormLabel>
            <FormControl>
              <Textarea className="input-class" placeholder="Provide text to Ai to generate an Audio" {...field} />
            </FormControl>
           
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
       <GenerateThumbnail />
      <Button className="text-white-1 bg-orange-1 w-full transition-all duration-500 hover:bg-black-1 " type="submit">Submit & Publish Podcast</Button>
    </form>
  </Form>
  )
}

export default PodcastForm