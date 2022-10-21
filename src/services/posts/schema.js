import mongoose from "mongoose"

const { Schema, model} = mongoose

const postSchema = new Schema(
    {
        title: {type:String, required: true},
        description: {type:String, required: true},
    },
    {timestamps: true}
)

export default model("PostModel", postSchema)