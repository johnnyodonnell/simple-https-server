const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const https = require("https");


const app = express();

app.get("/", (req, res) => {
    console.log(req.query.payload);
    res.json(true);
});

const key = fs.readFileSync("ssl/server.key");
const cert = fs.readFileSync("ssl/server.crt");

const httpsServer = https.createServer({key, cert}, app);

httpsServer.listen(3000);

