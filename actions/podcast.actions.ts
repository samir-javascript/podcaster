"use server";
import { connectToDb } from "@/db";
import Podcast from "@/schemas/podcastSchema";
import { CreatePodcastParams } from "@/types";
import { revalidatePath } from "next/cache";

export async function createPodcast(params: CreatePodcastParams) {
  const {
    user,
    podcastTitle,
    podcastDescription,
    views,
    audioDuration,
    audioUrl,
    voiceType,
    voicePrompt,
    imageUrl,
    imagePrompt,
    path,
  } = params;
  await connectToDb();
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
      audioUrl,
    });
    revalidatePath(path);
    return {
      id: podcast._id.toString(),
      user: podcast.user,
      podcastTitle: podcast.podcastTitle,
      podcastDescription: podcast.podcastDescription,
      audioDuration: podcast.audioDuration,
      views: podcast.views,
      imageUrl: podcast.imageUrl,
      voiceType: podcast.voiceType,
      audioUrl: podcast.audioUrl,
    };
  } catch (error) {
    console.log(error);
    throw new Error('Failed to create podcast');
  }
}
