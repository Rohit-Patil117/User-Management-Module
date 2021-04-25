const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var admin = require('./Models/admin');

mongoose.connect('mongodb://localhost:27017/admindb', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/put', function (req, res) {
    const data = new admin({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.email,
        password: req.body.password
    });
    data.save().then(result => {
        res.json(result);
    }).catch(err => {
        res.json(err);
    });
});

app.get('/fetch', function(req,res){
    admin.find().then(result => {
        res.json(result);
    }).catch(err => {
        res.json(err);
    });
});

app.listen(8000);