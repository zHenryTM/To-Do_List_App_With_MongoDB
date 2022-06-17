const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/router")

const app = express()

app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

mongoose.connect("mongodb://localhost/To-Do")
    .then(() => console.log("Connected to database!"))
    .catch(err => console.log("Something went wrong... " + err))

app.use(router)


app.listen(3000, () => console.log("Server started on port 3000."))