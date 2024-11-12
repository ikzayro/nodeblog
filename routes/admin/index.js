const express = require('express')
const router = express.Router()


/*.get */
router.get/*.get */('/', (req, res) => {
     
    res.render('admin/index')
})

router.get/*.get */('/categories', (req, res) => {
     
    res.render('admin/categories')
})

module.exports = router