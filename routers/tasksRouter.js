const {Router} = require("express");
const {getAllTasks, getTaskById} = require('../controllers/tasksController');


const router = Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaskById);

module.exports = router