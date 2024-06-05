"use server"
import { connectToDb } from "@/db";
import { CreateUserParams, DeleteUserParams, GetCurrentUserParams, UpdateUserParams } from "@/types";
import User from "@/schemas/userSchema";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
export const createUser = async(userData:CreateUserParams) =>  {
   
   try {
       await connectToDb()
       const newUser = await User.create(userData)
       return newUser
   } catch (error) {
     console.log(error)
     throw new Error('Failed to create new User, try again')
   }
}
export const updateUser = async(params:UpdateUserParams)=> {
    const { path, updateData, clerkId } = params;
    try {
       await connectToDb()
        await User.findOneAndUpdate({clerkId}, updateData)
       revalidatePath(path)
        
    } catch (error) {
        console.log(error)
        throw new Error('error while updating your profile')
    }
}

export const deleteUser = async(params:DeleteUserParams)=> {
    const { clerkId } = params;
   try {
      const user = await User.findOne({clerkId})
      if(!user) {
        throw new Error('User not found')
      }
      const deletedUser = await User.findByIdAndDelete(user._id)
      return deletedUser
      
   } catch (error) {
    console.log(error)
   }
}
export const getCurrentUser = async(params:GetCurrentUserParams) =>{
  const { clerkId } = params;
  try {
     const user = await User.findOne({clerkId})
     if(!user) {
      throw new Error('User not found')
     }
     return {user }
  } catch (error) {
     console.log(error)
  }
}
// const crypto = require('crypto');

// const algorithm = 'aes-256-cbc';
// const key = crypto.randomBytes(32); // Secret key (should be stored securely)
// const iv = crypto.randomBytes(16);  // Initialization vector

// // Encrypt function
// const encrypt = (text) => {
//   const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
//   let encrypted = cipher.update(text);
//   encrypted = Buffer.concat([encrypted, cipher.final()]);
//   return iv.toString('hex') + ':' + encrypted.toString('hex');
// };
