import mongoose from "mongoose"
export const connectToDb = async()=> {
    if(!process.env.MONGODB_URL) {
       throw new Error('Missing mongo db Url')
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "podcster"
        })
        console.log('Mongo db has been connected successfuly')
    } catch (error) {
        console.log(error)
    }
}
