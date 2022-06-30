import { Schema, model } from "mongoose"

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is requied']
    },
    category: {
        type: String,
        required: [true, 'Category is requied']
    },
    state: String,
    description: {
        type: String,
        required: [true, 'Description is requied']
    }, 
    image: {
        type: String,
        default: 'image/url'
    },
    createdAt: { type: Date, default: new Date() }
},
    {
        versionKey: false
    })

export const Post = model('Post', PostSchema);