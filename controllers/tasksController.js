const { response } = require("express");

//Temporary storage of tasks
let tasks = [

    {
        id: 1,
        title: 'Nuevo cliente',
        body: 'Generar la cotización del nuevo cliente',
        manager: 'Karen Holguín',
        notes: 'Costos 2023',
        state: 'Finalizado'
    },
    {
        id: 2,
        title: 'Certificado',
        body: 'Generar y enviar el nuevo certificado',
        manager: 'Ponchita Dolores',
        notes: '',
        state: 'En proceso'
    },
    {
        id: 3,
        title: 'Homologación',
        body: 'Homologar los estudios y analitos',
        manager: 'Pancracio Desgracias',
        notes: 'Homologar por CUPS',
        state: 'Pendiente'
    }
]


//Function to get all tasks
const getAllTasks = (req, res = response) => {
    res.statusCode = 200;
    res.json(tasks);
};

//Function to get task by its id
const getTaskById = (req, res = response) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);

    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({
            error: {
                code: "404",
                message: "No encontrada"
            }
        });
    }
}

//Function to create a new task 
const createNewTask = (req, res = response) => {
    const { title } = req.body;
    const { body } = req.body;
    const { manager } = req.body;
    const { notes } = req.body;
    const { state } = req.body;

    if (!title) {
        return res.status(400).json({
            error: {
                code: "400",
                message: "El titulo de la tarea es requerido"
            }
        });
    }
    if (!manager) {
        return res.status(400).json({
            error: {
                code: "400",
                message: "El responsable de la tarea es requerido"
            }
        });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        body,
        manager,
        notes,
        state
    };

    tasks.push(newTask);

    res.status(201).json({
        success: true,
        message: "La tarea ha sido creada correctamente",
        code: "201"
    });
}

//Function to update a task by its id
const updateTask = (req, res = response) => {
    const taskId = parseInt(req.params.id);

    const { title } = req.body;
    const { body } = req.body;
    const { manager } = req.body;
    const { notes } = req.body;
    const { state } = req.body;

    const existingTask = tasks.find(task => task.id === taskId);

    if (!title) {
        return res.status(400).json({
            error: {
                code: "400",
                message: "El titulo de la tarea es requerido"
            }
        });
    }
    if (!manager) {
        return res.status(400).json({
            error: {
                code: "400",
                message: "El responsable de la tarea es requerido"
            }
        });
    }

    existingTask.title = title;
    existingTask.body = body;
    existingTask.manager = manager;
    existingTask.notes = notes;
    existingTask.state = state;


    res.status(200).json({
        success: true,
        message: "La tarea ha sido actualizada correctamente",
        code: "200"
    });
};

//Function to delete a task by its id
const deleteTask = (req, res = response) => {
    const taskId = parseInt(req.params.id);

    const taskIndex = tasks.findIndex(task => task.id === taskId);

    const deletedTask = tasks.splice(taskIndex, 1)[0];

    res.status(201).json({
        success: true,
        message: "La tarea ha sido eliminada correctamente",
        code: "204"
    });
};

//Export variables
module.exports = {
    getAllTasks,
    getTaskById,
    createNewTask,
    updateTask,
    deleteTask
} 