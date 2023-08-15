const Post=require("../model/model");

exports.getPost = async(req,res) => {
   try {
    const {id} =req.params;

    const post = await Post.findById({_id:id});
    if(!post)
    {
        return res.status(501).json({
            success:true,
            message:"No such post exist in database."
        })
    }
    res.status(200).json({
        success:true,
        data:post,
        message:"post is present"
    })
   } catch (error) {
    console.error(error);
    res.status(500).json({
        success:false,
        message:"error occured while feching the post"
    })
   }
}