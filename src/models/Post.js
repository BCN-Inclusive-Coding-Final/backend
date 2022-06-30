import { Schema, model } from "mongoose"

const PostSchema = new Schema({
    title: {
        type: String,
        require: [true, 'Title is requied']
    },
    category: {
        type: String,
        require: [true, 'Category is requied']
    },
    state: String,
    description: {
        type: String,
        require: [true, 'Description is requied']
    }, 
    image: {
        type: String,
        default: 'image/url'
    },
    createdAt: { type: Date, default: new Date() }
})

export const Post = model('Post', PostSchema);