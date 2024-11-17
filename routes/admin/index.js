const express = require('express')
const Category = require('../../models/Category')
const router = express.Router()


/*.get */
router.get/*.get */('/', (req, res) => {
     
    res.render('admin/index')
})

router.get('/categories', (req, res) => {
     
    Category.find({}).sort({$natural:-1}).then(categories => {
        res.render('admin/categories', {categories: categories})
    })
})

router.post('/categories', (req, res) => {

    Category.create(req.body).then((error, category) => {
        // if(error){
            res.redirect('/admin/categories')
        // }
    })
})

router.delete('/categories/:id', (req, res) => {
     
    Category.deleteOne({_id: req.params.id}).then(() => {
        res.redirect('/admin/categories')
    })
})

module.exports = router