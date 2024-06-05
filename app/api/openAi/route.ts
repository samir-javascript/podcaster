import { NextResponse } from "next/server";
import OpenAI from "openai";

export const POST = async(req:Request)=> {
    const openai = new OpenAI({
        apiKey:  process.env.OPENAI_API_KEY
    })
    const { prompt } = await  req.json()
    try {
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            quality: "standard",
            n: 1,
            size: "1024x1024",
          });
         const image_url =  response.data[0].url;
         if(!image_url) {
            throw new Error('No iMAGE url')
         }
        

         return NextResponse.json({image_url})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({error})
    }
}