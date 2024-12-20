const express = require('express')
const User = require('../models/User')
const router = express.Router()

router.get('/register', (req, res) => {
    res.render('site2/register')
})

router.post('/register', (req, res) => {
    User.create(req.body).then((error, user) => {
        req.session.sessionFlash = {
            type: 'alert alert-success',
            message: 'Kullanıcı başarılı bir şekilde oluşturuldu'
        }
        res.redirect('/users/login')
    })
})

router.get('/login', (req, res) => {
    res.render('site2/login')
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({ email: email });

        if (user) {
            // Şifre eşleşmesi (eğer şifre hashlenmişse bcrypt kullanın)
            if (user.password === password) {
                req.session.userId = user._id
                res.redirect('/');
            } else {
                res.redirect('/users/login');
            }
        } else {
            res.redirect('/users/register');
        }

    } catch (error) {
        console.log('Error finding user:', error);
        res.status(500).send('An error occurred during login');
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
    res.render('site2/login')
})

module.exports = router