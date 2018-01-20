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
});

room.put('/:id', (req, res) => {
    const roomID = req.params.id;
    let roomName = req.body.roomName;

    const i = roomList.findIndex(r => {return r.roomID === roomID});
    if(i==-1) {
        res.sendStatus(404);
    } else {
        roomList[i].roomName= roomName;
        res.json(roomList[i]);
    }
});

room.get('/', (req, res) => {
    res.json(roomList);
});


module.exports = room;