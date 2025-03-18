import mongoose, { Schema,Document } from "mongoose"

interface INote extends Document{
    name:string,
    title:string,
    createdAt:Date
}

const NotesSchema =  new Schema <INote>(
    {
        name:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        }
    }
)

const Note = mongoose.model<INote>('Note', NotesSchema);
export default Note;