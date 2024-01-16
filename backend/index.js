const nodemailer = require("nodemailer");
const express = require('express');
const dotenv = require('dotenv').config()
const app = express();


const user_email = process.env.WEBSITE_EMAIL;
const user_pass = process.env.WEBSITE_PASSWORD;
app.use(express.json())

const contactInfoArray = [{
    "id": 1,
    "name": "Smruthi",
    "email": "smruthi07@gmail.com",
    "subject": "Test",
    "message": "Test"
}];

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