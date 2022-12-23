const { json } = require('body-parser');
const express = require('express')
const router = express.Router();
const Post = require('../models/Post');

//get back all the post
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res,json({message:err})
    }
});

//submit the post
router.post('/', async (req, res)=>{
    const post = new Post({
        quote: req.body.quote,
        author: req.body.author
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch (err){
        res.json({message:err});
    }
    
})

//specific post
router.get('/:postId', async (req, res)=>{
    try{
        const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json({message:err})
    }
    
})


//Detele post
router.delete('/:postId', async (req, res)=>{
    try{
        const removePost = await Post.remove({_id: req.params.postId});
        res,json(removePost);
    }catch(err){
        res.json({message:err})
    }

})

//update post
router.patch('./:postId', async (req, res)=>{
    try{
        const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set: {quote: req.body.quote}}, {$set: {author: req.body.author}});
        res,json(updatedPost);
    }catch(err){
        res.json({message:err})
    }
    
} )

module.exports = router;