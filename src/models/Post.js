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
        default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
    },
    giveOrWant: {
        type: String,
        enum: ['give', 'want'],
        required: true
    },
    userId:{
        type: String,
        required: [true, 'User ID is required.']
    },
    createdAt: { type: Date, default: new Date() }
},
    {
        versionKey: false
    })

export const Post = model('Post', PostSchema);