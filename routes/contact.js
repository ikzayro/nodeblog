const express = require('express')
const router = express.Router()

router.post('/email', (req, res) => {

    const outputHTML =
        `
        <h2> Mail Details</h2>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.phone}</p>
    `

    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
            user: "",
            pass: "",
        },
    });

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Node Proje Contact Form" <>', // sender address
            to: "", // list of receivers
            subject: "Node Contact Message", // Subject line
            text: "Hello world?", // plain text body
            html: outputHTML, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>

        req.session.sessionFlash = {
            type: 'alert alert-success',
            message: 'Mesajınız başarılı bir şekilde gönderildi.'
        }

        res.redirect('/contact')
    }


    main().catch(console.error);

})

module.exports = router