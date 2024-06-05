export interface CreateUserParams {
    clerkId: string;
    name: string;
    username: string;
    email: string;
    picture: string;
}
export interface CreatePodcastParams {
   user: string;
   path: string;
   podcastTitle: string;
   imageUrl: string;
   podcastDescription: string;
   audioDuration: number;
   voiceType: string;
   imagePrompt?: string;
   voicePrompt?:string;
   audioUrl:string;
   views?: number
}
export interface audioProps {
  audio: string | null;
   setAudio: (v:string)=> void;
   setAudioDuration:(v:number)=> void;
   voiceType: string;
   voicePrompt: string;
   setVoicePrompt: (v: string)=> void;
}
export interface UpdateUserParams {
    clerkId: string;
    updateData: Partial<IUser>;
    path: string;
  }
  export interface DeleteUserParams {
    clerkId: string;
  }
  