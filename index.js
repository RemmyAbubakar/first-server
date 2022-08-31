const express = require("express");
const { send } = require("process");

const app = express();

app.get("/", (req, res) => {
   res.status(200).send("Welcome to my server");
});

app.post("/", (req,res) => {
    res.status(201).send("Your data has been saved");
})

app.put("/", (req,res) => {
    res.status(200).send("Your data has been replaced");
})

app.patch("/", (req,res) => {
    res.status(200).send("Your info has been updated");
})

app.delete("/", (req,res) => {
    res.status(200).send("Your info has been deleted");
})



app.listen(4000, () => {
    console.log("🚀server Up and Running http://localhost:4000")
})