import mongoose from "mongoose";

const Post = mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

/**
 * @info
 * below command is used to create a table at mongoDB
 * arguments , 1st is the name of Schema
 * and the next is the above created object
 *
 */
const postSchema = mongoose.model("Post", Post);

export default postSchema;
