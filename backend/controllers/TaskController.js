const Task = require("../models/Task");
const Heap = require("../utils/Heap");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    return res.json(tasks);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Erreur serveur");
  }
};

exports.getNextTasks = async (req, res) => {
  try {
    return res.json();
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Erreur serveur");
  }
};

exports.addTask = async (req, res) => {
  try {
    const { name, priority, deadline } = req.body;
    console.log(deadline);
    const formattedDeadline = new Date(deadline);
    const newTask = await Task.create({
      name,
      priority,
      Deadline: formattedDeadline,
    });
    return res.status(200).json(newTask);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Erreur serveur");
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, Deadline } = req.body;

    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).send("Tâche non trouvée");
    }

    // const formattedDeadline = new Date(deadline);

    await task.update({
      name,
      priority,
      Deadline: Deadline,
    });

    return res.status(200);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Erreur serveur");
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).send("Tâche non trouvée");
    }

    await task.destroy();
    return res.status(200).send("Tâche supprimée");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Erreur serveur");
  }
};
