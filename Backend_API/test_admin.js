const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var admin = require('./Models/admin');

mongoose.connect('mongodb+srv://rohit_patil:Jm3i0ZhKXnZlDWEd@cluster0.ae10b.mongodb.net/usermodule?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/create-admin', function (req, res) {
    const data = new admin({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password
    });
    data.save().then(result => {
        res.json(result);
    }).catch(err => {
        res.json(err);
    });
});

app.post('/admin-login', function (req, res) {
    admin.findOne({ username: req.body.username, password: req.body.password }).then(result => {
        res.json(result);
    }).catch(err => {
        res.json(err); 
    });
});

app.listen(8000);