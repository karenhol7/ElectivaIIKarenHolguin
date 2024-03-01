const { response } = require("express");

//Temporary storage of tasks
let tasks = [

    {
        id: 1,
        body: ''
    },
    {
        id: 2,
        body: ''
    },
    {
        id: 3,
        body: ''
    }
]


//Get all tasks
const getAllTasks = (req, res = response) => {
    res.statusCode = 200;
    res.json(tasks);
};

//Get task by id
const getTaskById = (req, res = response) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);

    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ error: 'Not Found' });
    }
}

//Create a new task 
const createNewTask = (req, res = response) => {

    const { body } = req.body;
    const newTask = {
        id: tasks.length + 1,
        body
    };

    tasks.push(newTask);

    res.status(201).json("Created");
}

//Export variables
module.exports = {
    getAllTasks,
    getTaskById,
    createNewTask
} 