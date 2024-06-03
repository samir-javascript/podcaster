import mongoose, { Document} from "mongoose";
export interface IUser extends Document {
   clerkId: string;
   name: string;
   username:string;
   email: string;
   picture: string;
   saved: string[];
   joinedAt: Date;
} 
const UserSchema = new mongoose.Schema<IUser>({
    clerkId: {type:String,required:true},  
    name : {type: String, required: true},
    username:  {type:String, required: true, unique: true},
    email: {type: String, required: true, unique:true},
   
    picture: {type: String, required: true},

    saved: [{type: mongoose.Schema.Types.ObjectId , ref: 'Podcast'}], // which question has been saved
    joinedAt: {type: Date, default : Date.now}
}, 
{
    timestamps: true
}
)

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
export default User