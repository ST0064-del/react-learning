const express = require("express");
const route = express.Router();
const TaskController = require("../controllers/TaskController"); // Importation du contrôleur

route.get("/tasks", TaskController.getTasks);
route.get("/nextTasks", TaskController.getNextTasks);
route.post("/addTasks", TaskController.addTask);
route.put("/updateTasks/:id", TaskController.updateTask);
route.delete("/deleteTasks/:id", TaskController.deleteTask);

module.exports = route; // Route pour obtenir toutes les tâches
