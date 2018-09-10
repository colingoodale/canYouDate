const express = require("express");
const inquirer = require("inquirer");
const mySql = require("mysql");
const bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", function (req, res) {
    res.send("Welcome to the dating page");
});

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

