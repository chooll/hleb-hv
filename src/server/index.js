const express = require('express');
const PORT = 8080;

const cors = require("cors");
const db = require("./db");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get ('/test', async (req, res) => {
    const request = await db.query('SELECT * FROM Coment');
    res.json (request.rows);
})

app.get ('/vacancy', async (req, res) => {
    const request = await db.query('SELECT * FROM VACANCY');
    res.json (request.rows);
})

app.post ('/sendcoment', async (req, res) => {
    const {name, comment} = req.body;
    const request = await db.query(`call  createcommnet ('${name}', '${comment}')`)
    res.json(req.body);
})

app.listen(
    PORT,
    () => console.log("Server is work on port 3000")
)