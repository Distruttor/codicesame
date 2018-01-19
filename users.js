const express = require('express');
const bodyParser = require('body-parser');

const users = express.Router();

const usersChat = [];

users.post('/user', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let registrationDate = new Date();

    let newUser = {username: username, password: password, registrationDate: registrationDate};

    usersChat.push(newUser);
    res.json(newUser);
});


module.exports = users;


