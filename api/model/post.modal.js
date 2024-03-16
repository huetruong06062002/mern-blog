import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true
    },
    content: {
      type: String,
      require: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
      type:String,
      default:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwordtracker-swoop-uploads.s3.amazonaws.com%2Fuploads%2Fckeditor%2Fpictures%2F1247%2Fcontent_wordtracker_blog_article_image.jpg&tbnid=SmZv80V4ysWrKM&vet=12ahUKEwiGyr6jofmEAxXzoa8BHZRfDe0QMygaegUIARCFAQ..i&imgrefurl=https%3A%2F%2Fwww.wordtracker.com%2Fblog%2Fcontent%2F25-ways-to-promote-your-blog-post&docid=zN6irx2FnFDupM&w=640&h=550&q=blog%20post%20image&ved=2ahUKEwiGyr6jofmEAxXzoa8BHZRfDe0QMygaegUIARCFAQ',
    },
    category: {
      type: String,
      default:'uncategorized',
    },
    slug: {
      type: String, 
      required: true,
      unique: true,
    },
}, { timestamps: true });
  

const Post = mongoose.model('Post', postSchema);

export default Post;