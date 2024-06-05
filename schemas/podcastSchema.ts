import mongoose from "mongoose"
const PodcastSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
         ref: "User",
        required: true
    },
    podcastTitle: {
        type: String,
        required: true
    },
    imageUrl: {
        type: Object
    },
    podcastDescription: {
        type: String,
        required: true
    },
    views: {
        type: Number,
    },
    audioDuration: {
        type: Number,
    },
    voiceType: {
        type: String
    },
    imagePrompt: {
        type: String
    },
    voicePrompt: {
        type: String
    },
    
    audioUrl: {
        type: String
    },
   

})
const Podcast = mongoose.models.Podcast || mongoose.model("Podcast", PodcastSchema)
export default Podcast