const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

/*.get */
router.post/*.get */('/new', (req, res) => {
    res.render('site2/addpost')
})

router.get('/:id', (req, res) => {
    Post.findById(req.params.id).then(post => {
        res.render('site2/post', {post:post})
    })

})

router.post('/test', (req, res) => {
    Post.create(req.body)
    res.redirect('/')
})



module.exports = router