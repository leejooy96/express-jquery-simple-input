const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(`Server has started on port ${port}!`);
});

app.use('/js', express.static(__dirname + '/../../node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/../../node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/../../node_modules/bootstrap/dist/css'));
app.use('/', express.static(__dirname + '/pages'));

app.get('/', function (req, res) {
    res.send('hello world');
});