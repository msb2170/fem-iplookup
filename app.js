require('dotenv').config();


const express = require('express');

const app = express();

const port = process.env.port;
const apiKey = process.env.apikey;

app.get("/", (req,res) => res.send("hello work"));

app.get("/api/search", async (req,res) => {
    try {
        const searchStr = `q=${req.query.q}`

        const response = await fetch(`https://ipapi.co/${searchStr}}/{json}/`)
            .then(data => console.log(data))
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => console.log(`listening on port ${port}`));