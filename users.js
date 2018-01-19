const express = require('express');
const bodyParser = require('body-parser');

const users = express.Router();

const usersChat = [];

users.post('/user', (req, res) => {
    let userID = req.body.userID;
    let username = req.body.username;
    let password = req.body.password;
    //let registrationDate = new Date();

    let newUser = {userID: userID, username: username, password: password};

    usersChat.push(newUser);
    res.json(newUser);
});


module.exports = users;


