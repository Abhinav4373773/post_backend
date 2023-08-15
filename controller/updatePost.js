const Post = require("../model/model");


exports.updatePost = async(req,res) => {
    try {
        const {id} = req.params;
        const {title,content} = req.body;
        const post =await Post.findByIdAndUpdate({_id:id},{content},)
        res.status(200).json({
            success:true,
            data:post,
            message:"The content of the given post is Updated",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Server Error",
        })
    }
}