"use server"
import { connectToDb } from "@/db";
import Podcast from "@/schemas/podcastSchema";
import { CreatePodcastParams } from "@/types";
import { revalidatePath } from "next/cache";

export async function createPodcast(params:CreatePodcastParams) {
    const {user, podcastTitle, podcastDescription, views, audioDuration,
        audioUrl,voiceType,voicePrompt,imageUrl,imagePrompt,path} = params;
        await connectToDb()
   try {
        const podcast = await Podcast.create({
             user,
             podcastDescription,
             podcastTitle,
             audioDuration,
             views,
             imagePrompt,
             imageUrl,
             voicePrompt,
             voiceType,
             audioUrl
        })
        revalidatePath(path)
        return podcast
   } catch (error) {
      console.log(error)
   }
}