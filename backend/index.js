const nodemailer = require("nodemailer");
const express = require('express');
const dotenv = require('dotenv').config();
const http  = require('http');
const Server  = require("socket.io").Server;
const cors = require('cors');
const app = express();
const path = require('path')
const port = 3000;//process.env.PORT || 8080;
const _dirname = path.dirname("")
const buildPath = path.join(_dirname  , "./frontend");

app.use(express.json())
app.use(cors())
app.use(express.static(buildPath))


const user_email = process.env.WEBSITE_EMAIL || "test";
const user_pass = process.env.WEBSITE_PASSWORD || "test";

const transporter_info = {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: user_email,
        pass: user_pass
    }
}

const contactInfoArray = [];

const server  = http.createServer(app)

app.get("/*", function(req, res){

    res.sendFile(
        path.join(__dirname, "../frontend/dist/frontend/index.html"),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );

})

app.get('/api/contact', (req, res) => {
    res.send(contactInfoArray)
})

app.post('/api/contact', (req, res) => {
    const transporter = nodemailer.createTransport(transporter_info)
    const contactInfo = {
        id: contactInfoArray.length + 1,
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    }

    const htmlData = `<ul><li>Sender: ${contactInfo.email}</li><li>Message: ${contactInfo.message}</li></ul>`
    const mailOptions = {
        from: {
            name: contactInfo.name,
            address: contactInfo.email
        },
        to: ["danda.smruthi@gmail.com", "smruthi07@gmail.com"],
        subject: contactInfo.subject,
        html: htmlData
    }

    transporter.sendMail(mailOptions)
    .then(() => {
        console.log("Successfully sent data!")
    })
    .catch(() => {
        console.log("Unsuccessful :(")
    })
    contactInfoArray.push(contactInfo);
    res.send(contactInfo);
})
 
 server.listen(port , () => {})