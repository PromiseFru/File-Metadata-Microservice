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
        console.log(req.files.upfile);
    }
})

app.listen(port, console.log(`listening on port ${port}`));

