const express = require('express');
const bodyParser = require('body-parser');

const message = express.Router();

const messages = [];

message.post('/', (req, res) => {
    let messageID = req.body.messageID;
    let text = req.body.text;
    let roomID = req.body.roomID;
    let authorID = req.body.authorID;
    let time = new Date();

    let newMessage = {messageID: messageID, text: text, roomID: roomID, authorID: authorID, time: time};
    messages.push(message);
    res.json(message);
})


module.exports = message;