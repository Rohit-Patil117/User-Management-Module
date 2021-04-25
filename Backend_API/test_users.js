const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const users = require('./Models/users');
var nodemailer = require('nodemailer');

mongoose.connect('mongodb://localhost:27017/management', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/put', function (req, res) {
    const data = new users({
        _id: new mongoose.Types.ObjectId(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    });
    data.save().then(result => {
        res.json(result);
    }).catch(err => {
        res.json(err);
    });
});

app.get('/get', function (req, res) {
    users.find().then(result => {
        res.json(result);
    }).catch(err => {
        res.json(err);
    });
});

app.delete('/delete/:_id', function (req, res) {
    users.deleteOne({ _id: req.params._id }).then(result => {
        res.json(result);
    }).catch(err => res.json(err));
});

app.post('/:email', (req, res) => {
    var transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'rohitpatil7559@gmail.com',
            pass: '*sonu7559@#'
        }
    });
    var mailOption = {
        from: 'rohitpatil7559@gmail.com',
        to: req.params.email,
        subject: 'Signed up successful.',
        text: 'Hello Dear... \n Signed up successful. \n Welcome to LogiQuad family.'
    }
    transport.sendMail(mailOption, (err, info) => {
        if (err) throw err;
        res.json(info.response);
    });
});
app.listen(5000);