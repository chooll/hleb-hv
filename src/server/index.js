const express = require('express');
const PORT = 8080;

const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors())
app.use(express.json())


app.get ('/test', async (req, res) => {
    const request = await db.query('SELECT * FROM Coment');
    res.json (request.rows);
})

app.get ('/vacancy', async (req, res) => {
    const request = await db.query('SELECT * FROM VACANCY');
    res.json (request.rows);
})

app.listen(
    PORT,
    () => console.log("Server is work on port 3000")
)