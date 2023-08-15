const Post =require("../model/model");


exports.deletePost =async(req,res) => {
    try {
        const {id}=req.params;

        const post =await Post.findByIdAndDelete({_id:id});

       
        res.status(200).json({
            success:true,
            data:post,
            message:"Successfully Deleted."
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Error occured while deleting the post"
        })
        
    }

}