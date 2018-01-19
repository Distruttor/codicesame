const express = require('express');
const bodyParser = require('body-parser');

const users = express.Router();

const usersChat = [];

users.post('/', (req, res) => {
    let userID = req.body.userID;
    let username = req.body.username;
    let password = req.body.password;
    //let registrationDate = new Date();

    let newUser = {userID: userID, username: username, password: password};

    usersChat.push(newUser);
    res.json(newUser);
});

users.get('/:id', (req, res) => {
    const userID = req.params.id;
    const i = usersChat.findIndex(u => {return u.userID === userID});
    if(i==-1) {
        res.sendStatus(404);
    } else {
        res.status = 200;
        res.json(usersChat[i]);
    }
});

users.put('/:id', (req, res) => {
    const userID = req.params.id;
    let username = req.body.username;
    let password = req.body.password;
    const i = usersChat.findIndex(u => {return u.userID === userID});
    if(i==-1) {
        res.sendStatus(404);
    } else {
        usersChat[i].username = username;
        usersChat[i].password = password;
        res.json(usersChat[i]);
    }
});


module.exports = users;


