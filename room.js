const express = require('express');
const bodyParser = require('body-parser');

const room = express.Router();

const roomList = [];

room.post('/', (req, res) => {
    let roomID = req.body.roomID;
    let roomName = req.body.roomName;
    let userCount = 0;

    let newRoom = {roomID:roomID, roomName:roomName, userCount:userCount};
    roomList.push(newRoom);

    res.json(newRoom);
})


module.exports = room;