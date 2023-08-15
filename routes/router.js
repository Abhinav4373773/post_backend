const express = require("express");
const router = express.Router();

// immporting controller
const {createPost} =require("../controller/posts");
const {updatePost} =require("../controller/updatePost");
const {getPost} = require("../controller/getPost");
const {deletePost} = require("../controller/deletePost");

// mounting controller
router.post("/post/create",createPost);
router.put("/post/update/:id",updatePost);
router.get("/post/get/:id",getPost);
router.delete("/post/delete/:id",deletePost);

//exporting router
module.exports = router;