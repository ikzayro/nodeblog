const mongoose = require('mongoose')

const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db');

Post.findByIdAndDelete('65e7bf0b2c295f945912f570')
.then((post) => {
    console.log(post)
}).catch((err) => {
    console.log(err)
})


/* Post.findByIdAndUpdate('65e521735d26f0ceb05a813d', {
    title: 'Benim 1. Postum'
}).then((post) => {
    console.log(post)
}).catch((err) => {
    console.log(err)
}) */

/* Post.findById('65e521735d26f0ceb05a813d')
.then((post) => {
    console.log(post)
}).catch((err) => {
    console.log(err)
}) */

/* Post.find({
    title: 'İkinci Post Başlığım'
}).then((post) => {
    console.log(post)
}).catch((err) => {
    console.log(err)
}) */

/* Post.create({
    title: 'İkinci Post Başlığım',
    content: 'İkinci post içeriği, lorem ipsum text'
}).then((post) => {
    console.log(post)
}).catch((err) => {
    console.log(err)
}) */