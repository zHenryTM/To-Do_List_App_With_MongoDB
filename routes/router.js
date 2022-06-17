const router = require("express").Router()
const Task = require("./../models/Task")

router.get("/", async (req, res) => {  
    try {
        const task = await Task.find()
        console.log(task)

        res.render("home", {task: task})
    } catch(err) {
        console.log(err)
    }
})

router.get("/add", (req, res) => {
    res.render("add")
})

router.post("/add", async (req, res) => {
    try {
        const task = await new Task({...req.body}).save()
        res.redirect("/")
    } catch(err) {
        console.log("Error creating a new task...")
    }
})

router.get("/delete/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        res.redirect("/")
    } catch(err) {
        console.log("Error deleting a task...")
    }
})

module.exports = router