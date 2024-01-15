const nodemailer = require("nodemailer");
const express = require('express');
const app = express();

const contactInfoArray = [];

app.get('/api/contact', (req, res) => {
    res.send(contactInfoArray)
})

app.post('/api/contact', (req, res) => {
    const contactInfo = {
        id: contactInfoArray.length + 1,
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    }
    contactInfoArray.push(contactInfo);
    res.send(contactInfo);
})






app.listen(3000, () => [
    console.log("Listening on port 3000")
])

