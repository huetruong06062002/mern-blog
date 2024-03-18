import mongoose, { Schema } from 'mongoose';

const commentSchema = new Schema({
  content: {
    type: String,
    requried: true,
  },
  postId: {
    type: String,
    require : true,
  },
  userId: {
    type: String,
    required: true,
  },
  likes: {
    type: Array,
    default: [],
  },
  numberOfLikes: {
    type: Number,
    default: 0,
  }
},
  {timestamps: true}
);

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;