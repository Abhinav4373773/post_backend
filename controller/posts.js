const Post = require("../model/model");

exports.createPost = async (req,res) => {
    try {
        const {title,content} =req.body;


       const post = await Post.create({title,content});
       return res.status(200).json({
        success:true,
        data:post,
        message:"New post has been created."
       })
    } catch (error) {
       return res.status(400).json({
        success:false,
        message:"Error occured while creating the post."
       })
    }
}