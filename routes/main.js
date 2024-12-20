const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const Category = require('../models/Category')
const User = require('../models/User')

router.get('/', (req, res) => {
    console.log(req.session)
    res.render('site2/index')
})

// router.get('/admin', (req, res) => {
//     res.render('admin/index')
// })

router.get('/blog', (req, res) => {

    const postPerPage = 4
    const page = req.query.page || 1

    Post.find({}).populate({ path: 'author', model: User }).sort({ $natural: -1 })
        .skip((postPerPage * page) - postPerPage)
        .limit(postPerPage)
        .then(posts => {
        Post.countDocuments().then(postCount => {
            Category.aggregate([
                {
                    $lookup: {
                        from: 'posts',
                        localField: '_id',
                        foreignField: 'category',
                        as: 'posts'
                    }
                },
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        num_of_posts: { $size: '$posts' }
                    }
                }
            ]).then(categories => {
                res.render('site2/blog', { 
                    posts: posts, 
                    categories: categories,
                    current: parseInt(page),
                    pages: Math.ceil(postCount/postPerPage)
                 })
            })
        })
        

    })


    //res.render('site2/blog')
})

router.get('/contact', (req, res) => {
    res.render('site2/contact')
})

// router.get('/login', (req, res) => {
//     res.render('site2/login')
// })

// router.get('/register', (req, res) => {
//     res.render('site2/register')
// })

// router.get('/posts/new', (req, res) => {
//     res.render('site2/addpost')
// })


module.exports = router