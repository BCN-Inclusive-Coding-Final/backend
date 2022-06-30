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
    state: {
        type: String,
        enum: ['nuevo', 'seminuevo', 'usado']
    },
    description: {
        type: String,
        required: [true, 'Description is requied']
    }, 
    image: {
        type: String,
        default: 'image/url'
    },
    giveOrWant: {
        type: String,
        enum: ['give', 'want'],
        required: true
    },
    createdAt: { type: Date, default: new Date() }
},
    {
        versionKey: false
    })

export const Post = model('Post', PostSchema);