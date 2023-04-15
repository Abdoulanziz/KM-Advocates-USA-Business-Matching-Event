const express = require('express');
const ejs = require('ejs');
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "../public")));

const upload = multer();

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/api/create/data', upload.none(), (req, res) => {
    console.log("success", req.body);
    res.status(201).send(req.body);
});

app.listen(8000, () => console.log('Server running on port 8000'));
