import PodcastCard from "@/components/PodcastCard"
import { Button } from "@/components/ui/button"
import { podcastData } from "@/contants"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col mt-9 gap-9 md:overflow-hidden ">
      <section className="flex flex-col gap-5">
         <h2 className="capitalize text-white-1 font-bold text-[20px]  ">Trending podcasts</h2>
         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
             {podcastData.map(item => (
                 <PodcastCard key={item.id} {...item} />
             ))}
         </div>
      </section>
     
    </div>
  )
}
