//express
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var users = require('./users');
var room = require('./room');
var message = require('./msg');

//instantiate express
const app = express();

/* Configure express app to use bodyParser()
 * to parse body as URL encoded data
 * (this is how browser POST form data)
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9000;


app.use('/user', users);
app.use('/room', room);
app.use('/msg', message);

app.listen(port, () => {
    console.log("Server is listening on port " + port);
})