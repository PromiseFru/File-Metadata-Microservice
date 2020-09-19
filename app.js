var express = require('express');
var upload = require('express-fileupload');
var app = express();
const port = 3000;

app.use(upload());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/api/fileanalyse', (req, res) => {
    if(!req.files) {
        res.json({
            error: "No file uploaded"
        });
    }else {
        res.json({
            name: req.files.upfile.name,
            size: req.files.upfile.size,
            type: req.files.upfile.mimetype
        });
    }
})

app.listen(port, console.log(`listening on port ${port}`));

