const express = require("express")
const app = express()

const bodyParser = require("body-parser")
// body parser 
//middle ware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

let todoList = [
    {
        description: "learn react",
        done: "false"
    },
    {
        description: "earn redux",
        done: "false"
    }
]

//API Info
app.get("/", (req,res) => {
    res.send('this is API demo')
})

//read
app.get("/todos", (req, res) => {
    res.send(todoList)
})

// create
app.post("/todos", (req, res)=> {
    todoList.push(req.body)
    res.send(req.body)
})

//search
app.get("/todos/search", (req, res) => {
    const result = todoList.filter((todo, index) => {
        return todo.description === req.query.description
    }) 
    res.send(result)
})


// read one
app.get("/todos/:index", (req, res) => {
    res.send(todoList[req.params.index])
})

// update
app.put("/todos/:id", (req, res) => {
    todoList[req.params.id] = req.body
    res.send(`update todo with id ${req.params.id}`)
})

//delete one
app.delete("/todos/:index", (req,res) => {
    todoList.splice(req.params.index,1)
    res.send(`delete todo with id ${req.params.index}`)
})

//delete all
app.delete("/todos", (req, res) => {
    todoList = []
    res.send(todoList)
})



app.listen(3000,()=> {
    console.log('app in port 3000')
})

