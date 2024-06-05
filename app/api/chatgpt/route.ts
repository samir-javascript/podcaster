import { NextResponse } from "next/server";
import OpenAI from "openai";
import { SpeechCreateParams } from "openai/resources/audio/speech.mjs";

export const POST = async(req:Request)=> {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });
    const { voicePrompt, voiceType } = await req.json()
    try {
        const mp3 = await openai.audio.speech.create({
            model: "tts-1",
            voice: voiceType as SpeechCreateParams["voice"],
            input: voicePrompt,
          });
          const buffer = Buffer.from(await mp3.arrayBuffer());
          return new NextResponse(buffer, {
            headers: {
              "Content-Type": "audio/mpeg",
            },  });
         
         
    } catch (error) {
        console.log(error)
       return NextResponse.json({error})
    }
}