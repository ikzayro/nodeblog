const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('site2/index')
})

router.get('/about', (req, res) => {
    res.render('site2/about')
})

router.get('/blog', (req, res) => {
    res.render('site2/blog')
})

router.get('/contact', (req, res) => {
    res.render('site2/contact')
})

router.get('/login', (req, res) => {
    res.render('site2/login')
})

router.get('/register', (req, res) => {
    res.render('site2/register')
})

router.get('/posts/new', (req, res) => {
    res.render('site2/addpost')
})

router.post('/posts/test', (req, res) => {
    res.redirect('/')
})


module.exports = router