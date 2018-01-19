//express
var express = require('express');
var bodyParser = require('body-parser');

//instantiate express
var app = express();

/* Configure express app to use bodyParser()
 * to parse body as URL encoded data
 * (this is how browser POST form data)
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9000;

app.get('/', (req, res) => {
    res.send("Page1");
});


app.listen(port, () => {
    console.log("Server is listening on port " + port);
})