const {response} = require("express");

//Temporary storage of tasks
let tasks = [
    {
        id: 1,
        title: 'Hello',
        body: 'Bye'
    },
    {
        id: 2,
        title: 'Hello',
        body: 'Bye'
    },
    {
        id: 3,
        title: 'Hello',
        body: 'Bye'
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
};

//Create a new task 
const createNewTask = (req, res = response) => {
    
}

//Export variables
module.exports = {
    getAllTasks,
    getTaskById
} 