const express = require('express');
const port = 3000
const fs = require('fs');
const chance = require('chance');

const myChance = new chance();
let myRoll = undefined;

app.get("/", function (request, response){

    const fileContents = fs.readFileSync("./templates/index.html", "utf-8");

    response.send(fileContents);
});

app.listen(port, function(){
    console.log("App listening on port " + port);
});


