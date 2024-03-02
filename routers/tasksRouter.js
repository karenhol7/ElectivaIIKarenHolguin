const { Router } = require("express");
const { getAllTasks, getTaskById, createNewTask, updateTask, deleteTask } = require('../controllers/tasksController');


const router = Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaskById);
router.post("/tasks", createNewTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask)

module.exports = router