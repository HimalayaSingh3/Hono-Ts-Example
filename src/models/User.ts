import mongoose, { Schema, Document } from "mongoose"

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
  }

const UserSchema = new Schema<IUser>(
    {
        username:{
            type:String,
            required:true,
            min:5
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
            min:8,
        },

    },
    {timestamps:true}
)

const User = mongoose.model<IUser>('User', UserSchema);
export default User;